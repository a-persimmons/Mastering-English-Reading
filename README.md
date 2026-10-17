# 英语句子解构：从简单句到长难句

一本为中文母语、自评初高中词汇基础、认识单词却不会拆英语句子的读者设计的自学教材。

- **30 章 Markdown**：按六篇逐步建立从主干到多层从句的结构认识。
- **48 道额外分级训练**：从五大句型延伸到语境猜词与自然意译，提供结构依据、参考译文和易错点。
- **图示与工具**：拆句流程、从句层级、猜词流程、意译核对、随堂答案折叠区、速查表、错题复盘。
- **三轮编辑审查**：去重复、目标导向检查、图文精修，详情见 [编辑审查记录](docs/appendix/editorial-notes.md)。

## 本地开发

```bash
npm install
npm run docs:dev
npm run docs:build
```

## 目录

- 课程首页：[`docs/index.md`](docs/index.md)
- 阅读说明：[`docs/start.md`](docs/start.md)
- 章节正文：[`docs/chapters/`](docs/chapters/)
- 48 道训练：[`docs/appendix/training-path.md`](docs/appendix/training-path.md)
- 配置：[`docs/.vitepress/config.mts`](docs/.vitepress/config.mts)
- 部署：[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## GitHub Pages 部署

代码推送 `main` 后自动执行 GitHub Actions 构建与发布。首次使用需在仓库 **Settings → Pages → Build and deployment** 中将 **Source** 设为 **GitHub Actions**，否则虽可构建成功，但部署会报 404。启用后重试工作流。

预计站点地址（须在部署成功后才可访问）：https://a-persimmons.github.io/Mastering-English-Reading/

## 阅读目的

**先找主干，分清修饰和逻辑，再结合语境理解。** 不保证能从孤句猜出所有生词；遇到证据不足的词应查证。自然意译必须保留原文事实与不确定性。
