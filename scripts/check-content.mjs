import fs from 'node:fs';
import path from 'node:path';

const docs = path.resolve('docs');
const errors = [];
const contents = [];
const expected = Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(2, '0') + '.md');
const chapterDir = path.join(docs, 'chapters');

for (const file of expected) {
  const full = path.join(chapterDir, file);
  if (!fs.existsSync(full)) {
    errors.push('Missing chapter: ' + file);
    continue;
  }
  const body = fs.readFileSync(full, 'utf8');
  if (!/^# 第\d+章 /m.test(body)) errors.push('Invalid chapter title: ' + file);
  if (body.length < 1200) errors.push('Chapter too short: ' + file);
  if (!/练习|自测|测试|训练/.test(body)) errors.push('Chapter has no exercise: ' + file);
  contents.push({ name: 'chapters/' + file, body });
}
const actual = fs.readdirSync(chapterDir).filter(x => x.endsWith('.md'));
if (actual.length !== 30) errors.push('Expected 30 chapters; found ' + actual.length);

const training = ['level-1.md', 'level-2.md', 'level-3.md', 'level-4.md'];
for (const file of training) {
  const full = path.join(docs, 'appendix', file);
  if (!fs.existsSync(full)) { errors.push('Missing drill page: ' + file); continue; }
  const body = fs.readFileSync(full, 'utf8');
  const exercises = (body.match(/^## \d{2} ·/gm) || []).length;
  if (exercises !== 12) errors.push('Expected 12 drills in ' + file + '; found ' + exercises);
}

function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name.startsWith('.')) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full);
    else if (item.name.endsWith('.md')) contents.push({ name: path.relative(docs, full), body: fs.readFileSync(full, 'utf8') });
  }
}
walk(path.join(docs, 'appendix'));
contents.push({ name: 'start.md', body: fs.readFileSync(path.join(docs, 'start.md'), 'utf8') });
contents.push({ name: 'method.md', body: fs.readFileSync(path.join(docs, 'method.md'), 'utf8') });
contents.push({ name: 'index.md', body: fs.readFileSync(path.join(docs, 'index.md'), 'utf8') });

let figures = 0;
let foldables = 0;
for (const { name, body } of contents) {
  const openings = (body.match(/^::: details(?:\s|$)/gm) || []).length;
  const closings = (body.match(/^:::\s*$/gm) || []).length;
  if (openings !== closings) errors.push('Unbalanced VitePress details: ' + name);
  if (/<details>|<\/details>/.test(body)) errors.push('Raw HTML details: ' + name);
  foldables += openings;
  for (const match of body.matchAll(/(!?)\[[^\]]*\]\((\/[^)#?]+)(?:#[^)]*)?\)/g)) {
    const isImage = match[1] === '!';
    const url = decodeURI(match[2]);
    let target;
    if (url.startsWith('/images/') || url === '/favicon.svg') {
      target = path.join(docs, 'public', url.replace(/^\//, ''));
    } else if (url.endsWith('.svg') || isImage) {
      target = path.join(docs, 'public', url.replace(/^\//, ''));
    } else {
      target = path.join(docs, url.replace(/^\//, '') + '.md');
    }
    if (!fs.existsSync(target)) errors.push('Broken local link in ' + name + ': ' + url);
    if (isImage) figures++;
  }
}
if (errors.length) {
  for (const error of errors) console.error('ERROR: ' + error);
  process.exitCode = 1;
} else {
  console.log('PASS: 30 chapters, 48 staged drills, ' + foldables + ' answer blocks, ' + figures + ' figure usages, all local links resolve.');
}
