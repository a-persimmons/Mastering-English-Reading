# 英语能力进阶系列

**同一个 GitHub 仓库、同一个 VitePress 阅读站、两本互相衔接的书。**

| 系列 | 书名 | 状态 | 阅读入口 |
| --- | --- | --- | --- |
| 第一本 | 《英语句子解构：从简单句到长难句》 | 30章 + 48道额外练习，已完成 | [进入第一本](docs/books/reading/index.md) |
| 第二本 | 《英语思维：从中文翻译到英语直觉》 | 7篇32章正文第一版已提交，进行全书审稿 | [进入第二本](docs/books/thinking/index.md) |

阅读路径：**读懂句子结构 → 准确理解原意 → 建立英语与情境的直接联系 → 逐步自然表达**。第二本不要求彻底禁止中文；第一本也不是需要死记语法术语的考试教材。

## 单仓库内容组织

```text
docs/
├── index.md                       # 系列总首页
├── roadmap.md                     # 两本书的学习路径
├── books/
│   ├── reading/                   # 第一本
│   │   ├── index.md
│   │   ├── start.md
│   │   ├── method.md
│   │   ├── chapters/01.md ... 30.md
│   │   └── appendix/              # 练习、速查表、编辑记录
│   └── thinking/                  # 第二本
│       ├── index.md
│       ├── contents.md
│       ├── guide.md
│       └── chapters/              # 每章一个 Markdown，逐章完成
├── chapters/                      # 旧章节链接兼容提示页
├── appendix/                      # 旧工具页兼容提示页
└── .vitepress/config.mts          # 统一导航、两套侧栏
```

**不要再将新内容写回 `docs/chapters`。** 两本书的正文一律按自己的路径组织，避免侧栏串章和 URL 冲突。

## 本地运行与内容校验

```bash
npm install
npm run docs:check
npm run docs:dev
npm run docs:build
```

工作流 `.github/workflows/deploy.yml` 在 `main` 更新时统一检查、构建并部署两本书；不会为第二本再创建一个 Pages 项目。站点的 `base` 仍是 `/Mastering-English-Reading/`。

## 现有链接兼容

原来以 `/chapters/01`、`/start`、`/method`、`/appendix/...` 开头的页面保留一个迁移入口，指向书籍内新地址；不会出现旧链接直接 404。以后请使用新书籍 URL。

## 教材编辑规则

第一本的审稿记录保存在 [第一本附录](docs/books/reading/appendix/editorial-notes.md)。第二本编写时坚持：每章有真实场景、表达原理、主动生成、跨情境迁移和详解；尚未写完的章节只保留在目录中，**不生成冒充正文的空白页**。
