import fs from 'node:fs';
import path from 'node:path';

const docs = path.resolve('docs');
const errors = [];
const contents = [];
const exists = p => fs.existsSync(p);
const readingDir = path.join(docs, 'books/reading/chapters');
const thinkingDir = path.join(docs, 'books/thinking/chapters');
const expectedReading = Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(2, '0') + '.md');

for (const name of expectedReading) {
  const file = path.join(readingDir, name);
  if (!exists(file)) { errors.push('Missing reading chapter: ' + name); continue; }
  const body = fs.readFileSync(file, 'utf8');
  if (!/^# 第\d+章 /m.test(body)) errors.push('Invalid reading chapter title: ' + name);
  if (body.length < 1200) errors.push('Reading chapter too short: ' + name);
  if (!/练习|自测|测试|训练/.test(body)) errors.push('Reading chapter has no exercises: ' + name);
}
if (fs.readdirSync(readingDir).filter(x => x.endsWith('.md')).length !== 30)
  errors.push('Expected exactly 30 reading chapters');

const thinkingFiles = fs.readdirSync(thinkingDir).filter(x => /^\d\d\.md$/.test(x)).sort();
const expectedThinking = Array.from({length:32}, (_,i)=>String(i+1).padStart(2,'0')+'.md');
if (thinkingFiles.length !== 32 || expectedThinking.some(x=>!thinkingFiles.includes(x))) errors.push('Expected exactly 32 numbered thinking chapters');
for (const name of thinkingFiles) {
  const text = fs.readFileSync(path.join(thinkingDir, name), 'utf8');
  if (!new RegExp('^# 第'+Number(name.slice(0,2))+'章 ').test(text)) errors.push('Invalid thinking chapter heading: ' + name);
  if (!(text.match(/^::: details(?:\s|$)/gm) || []).length) errors.push('Thinking chapter has no answer explanation: ' + name);
  if (text.length < 1200 || !/练习|任务|自测|测试/.test(text))
    errors.push('Thinking chapter needs a full lesson with practice: ' + name);
}
for (const file of ['books/reading/index.md','books/thinking/index.md','books/thinking/contents.md','books/thinking/guide.md','roadmap.md']) {
  if (!exists(path.join(docs,file))) errors.push('Missing series page: ' + file);
}
for (const appendix of ['books/reading/appendix','books/thinking/appendix']) for (let i=1; i<=4; i++) {
  const name = 'level-' + i + '.md';
  const file = path.join(docs, appendix, name);
  if (!exists(file)) { errors.push('Missing drill page: ' + appendix + '/' + name); continue; }
  const body = fs.readFileSync(file, 'utf8');
  if ((body.match(/^## \d{2} ·/gm) || []).length !== 12)
    errors.push('Expected 12 extra drills in ' + appendix + '/' + name);
}

function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name.startsWith('.')) continue;
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (item.name.endsWith('.md'))
      contents.push({ name: path.relative(docs, file), body: fs.readFileSync(file, 'utf8') });
  }
}
walk(docs);
let figures = 0, answers = 0;
const checkLink = (url,from) => {
  if (url.startsWith('http') || url.startsWith('//')) return;
  if (!url.startsWith('/')) return;
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  let file;
  if (clean.endsWith('.svg') || clean.startsWith('/images/')) {
    file = path.join(docs,'public',clean.replace(/^\//,''));
  } else {
    const p = clean.replace(/^\//,'');
    file = path.join(docs,p.endsWith('/') ? p+'index.md' : p+'.md');
    if (!exists(file) && exists(path.join(docs,p,'index.md'))) file=path.join(docs,p,'index.md');
  }
  if (!exists(file)) errors.push('Broken internal link '+url+' in '+from);
};
for(const {name,body} of contents){
  const opens=(body.match(/^::: (?:details|tip|info|warning|danger|caution|note)(?:\s|$)/gm)||[]).length;
  const closes=(body.match(/^:::\s*$/gm)||[]).length;
  if(opens!==closes) errors.push('Unbalanced callouts: '+name);
  answers+=(body.match(/^::: details(?:\s|$)/gm)||[]).length;
  if(/<details>|<\/details>/.test(body))errors.push('Raw HTML answer block: '+name);
  for(const m of body.matchAll(/(!?)\[[^\]]*\]\((\/[^)]+)\)/g)) {
    checkLink(m[2],name);
    if(m[1]==='!') figures++;
  }
  if(name==='index.md') for(const m of body.matchAll(/^\s*link:\s*(\/\S+)\s*$/gm)) checkLink(m[1],name);
}

for (const { name, body } of contents) {
  if (!/^books\/(?:reading|thinking)\/(?:chapters\/\d{2}|appendix\/level-[1-4])\.md$/.test(name)) continue;
  const detailBlocks = [...body.matchAll(/^::: details[^\n]*\n([\s\S]*?)^:::\s*$/gm)];
  if (detailBlocks.length === 0) errors.push('Missing answer section: ' + name);
  for (const [index, detail] of detailBlocks.entries()) {
    if (!/^\s*-\s+\S/m.test(detail[1]))
      errors.push('Answer details must contain unordered list: ' + name + ' #' + (index + 1));
  }
}

const config=fs.readFileSync(path.join(docs,'.vitepress/config.mts'),'utf8');
for(const m of config.matchAll(/\blink:\s*['"](\/[^'"]+)['"]/g)) checkLink(m[1],'VitePress config');
if(!config.includes("'/books/reading/'")||!config.includes("'/books/thinking/'"))
  errors.push('Book-scoped sidebars missing');
if(!config.includes("base: '/Mastering-English-Reading/'"))
  errors.push('GitHub Pages base path changed');
for(const name of expectedReading){
  const legacy=path.join(docs,'chapters',name);
  if(!exists(legacy)||!fs.readFileSync(legacy,'utf8').includes('/books/reading/chapters/'))
    errors.push('Missing legacy chapter entry: '+name);
}
// Validate all local SVG illustrations and ensure each is used by the published books.
const svgDir = path.join(docs, 'public/images');
const svgFiles = fs.readdirSync(svgDir).filter(name => name.endsWith('.svg'));
for (const file of svgFiles) {
  const body = fs.readFileSync(path.join(svgDir, file), 'utf8');
  if (!/<svg\b/.test(body) || !/\bviewBox=/.test(body) || !/<\/svg>\s*$/.test(body))
    errors.push('Malformed SVG wrapper: ' + file);
  const used = contents.some(page => page.body.includes('/images/' + file));
  if (!used) errors.push('Unreferenced illustration: ' + file);
  if (/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/.test(body))
    errors.push('Unescaped XML ampersand: ' + file);
}
const audit = path.join(docs, 'visual-review.md');
if (!exists(audit)) errors.push('Missing chapter-by-chapter visual review');
else {
  const rows = (fs.readFileSync(audit, 'utf8').match(/^\| \[第 \d{2} 章\]\(\/books\//gm) || []).length;
  if (rows !== 62) errors.push('Visual review must cover 62 chapters, found ' + rows);
}

if (errors.length) {
  for (const error of errors) console.error('ERROR '+error);
  process.exitCode=1;
} else {
  console.log('PASS: 30 reading chapters, '+thinkingFiles.length+' English-thinking chapters, 96 graded drills across both books, '+answers+' answer blocks, '+figures+' figure usages; internal links, series navigation and legacy links valid.');
}
