import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '英语句子解构',
  titleTemplate: ':title · 英语句子解构',
  description: '面向中文母语者：从五大句型到复杂句、语境猜词与自然意译。',
  base: '/Mastering-English-Reading/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/Mastering-English-Reading/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#101b32' }],
    ['meta', { property: 'og:title', content: '英语句子解构：从简单句到长难句' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '英语句子解构',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/start' },
      { text: '拆句方法', link: '/method' },
      { text: '速查表', link: '/appendix/quick-reference' },
      { text: 'GitHub', link: 'https://github.com/a-persimmons/Mastering-English-Reading' }
    ],
    sidebar: [
  {
    "text": "第一篇 · 建立结构意识",
    "collapsed": false,
    "items": [
      {
        "text": "1. 英语句子到底怎样组成",
        "link": "/chapters/01"
      },
      {
        "text": "2. 句子成分：每一块负责什么",
        "link": "/chapters/02"
      },
      {
        "text": "3. 动词：拆句最重要的定位点",
        "link": "/chapters/03"
      },
      {
        "text": "4. 第一套拆句流程：定位、切块、连线",
        "link": "/chapters/04"
      }
    ]
  },
  {
    "text": "第二篇 · 掌握基本句型",
    "collapsed": false,
    "items": [
      {
        "text": "5. 第一类骨架：主语 + 谓语（SV）",
        "link": "/chapters/05"
      },
      {
        "text": "6. 主系表：描述而不施加动作",
        "link": "/chapters/06"
      },
      {
        "text": "7. 主谓宾：动作指向什么",
        "link": "/chapters/07"
      },
      {
        "text": "8. 双宾语：给谁什么",
        "link": "/chapters/08"
      },
      {
        "text": "9. 宾语补足语：让对象变成什么",
        "link": "/chapters/09"
      },
      {
        "text": "10. 特殊句式：存在、形式主语与问句",
        "link": "/chapters/10"
      },
      {
        "text": "11. 时间、体、情态与否定：先读准语气",
        "link": "/chapters/11"
      },
      {
        "text": "12. 被动语态：先找事件，再找施事",
        "link": "/chapters/12"
      }
    ]
  },
  {
    "text": "第三篇 · 修饰、短语与非谓语",
    "collapsed": false,
    "items": [
      {
        "text": "13. 名词短语：先抓中心词",
        "link": "/chapters/13"
      },
      {
        "text": "14. 介词短语：它究竟连到哪里",
        "link": "/chapters/14"
      },
      {
        "text": "15. 形容词、副词与比较：看清程度和范围",
        "link": "/chapters/15"
      },
      {
        "text": "16. 不定式 to do：读出意图与动作关系",
        "link": "/chapters/16"
      },
      {
        "text": "17. 动名词 doing：把动作当成一件事",
        "link": "/chapters/17"
      },
      {
        "text": "18. 分词 doing / done：浓缩的修饰与动作",
        "link": "/chapters/18"
      }
    ]
  },
  {
    "text": "第四篇 · 进入复合句",
    "collapsed": false,
    "items": [
      {
        "text": "19. 并列句：不是所有 and 都连接整句话",
        "link": "/chapters/19"
      },
      {
        "text": "20. 时间、原因、条件：读出事件间的逻辑",
        "link": "/chapters/20"
      },
      {
        "text": "21. 目的、结果、让步与比较：别读反逻辑",
        "link": "/chapters/21"
      },
      {
        "text": "22. 定语从句：谁在修饰谁",
        "link": "/chapters/22"
      },
      {
        "text": "23. 名词性从句：整句话占一个位置",
        "link": "/chapters/23"
      },
      {
        "text": "24. 从句套从句：用树形关系拆解",
        "link": "/chapters/24"
      }
    ]
  },
  {
    "text": "第五篇 · 长难句解构",
    "collapsed": false,
    "items": [
      {
        "text": "25. 倒装、强调与虚拟：遇到奇怪语序怎么办",
        "link": "/chapters/25"
      },
      {
        "text": "26. 省略、插入与指代：把缺失的信息补回来",
        "link": "/chapters/26"
      },
      {
        "text": "27. 长难句全流程：从句法树到意思",
        "link": "/chapters/27"
      }
    ]
  },
  {
    "text": "第六篇 · 猜词、意译和独立阅读",
    "collapsed": false,
    "items": [
      {
        "text": "28. 陌生词推断：先保住整句理解",
        "link": "/chapters/28"
      },
      {
        "text": "29. 从准确理解到自然意译：不按词序搬运",
        "link": "/chapters/29"
      },
      {
        "text": "30. 终章：建立自己的独立拆句系统",
        "link": "/chapters/30"
      }
    ]
  }
],
    socialLinks: [{ icon: 'github', link: 'https://github.com/a-persimmons/Mastering-English-Reading' }],
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜索本书', buttonAriaLabel: '搜索本书' }, modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除查询', footer: { selectText: '选择', navigateText: '切换' } } } } },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdated: { text: '上次更新' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '章节目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换浅色主题',
    darkModeSwitchTitle: '切换深色主题',
    footer: { message: '理解结构，而不是逐词搬运。', copyright: '免费阅读 · 转载请保留来源' },
    editLink: { pattern: 'https://github.com/a-persimmons/Mastering-English-Reading/edit/main/docs/:path', text: '提出修改建议' }
  }
})
