import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '英语能力进阶系列',
  titleTemplate: ':title · 英语能力进阶系列',
  description: '从句子解构到英语思维：一站式阅读、理解、表达训练系列。',
  base: '/Mastering-English-Reading/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/Mastering-English-Reading/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#152342' }],
    ['meta', { property: 'og:title', content: '英语能力进阶系列：从读懂句子到直接用英语思考' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '英语能力进阶',
    nav: [
      {
        text: '进阶系列',
        activeMatch: '^/(books|roadmap)(/|$)',
        items: [
          { text: '系列首页', link: '/' },
          { text: '系列一 · 英语句子解构', link: '/books/reading/' },
          { text: '系列二 · 英语思维', link: '/books/thinking/' },
          { text: '学习路径', link: '/roadmap' },
          { text: '62章配图审阅记录', link: '/visual-review' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/a-persimmons/Mastering-English-Reading' }
    ],
    sidebar: {
      '/books/reading/': [
  {
    "text": "第一本 · 英语句子解构",
    "link": "/books/reading/",
    "items": [
      {
        "text": "本书导读",
        "link": "/books/reading/start"
      },
      {
        "text": "六步拆句法",
        "link": "/books/reading/method"
      }
    ]
  },
  {
    "text": "第一篇 · 认识英语句子",
    "collapsed": false,
    "items": [
      {
        "text": "1. 英语句子到底怎样组成",
        "link": "/books/reading/chapters/01"
      },
      {
        "text": "2. 句子成分：每一块负责什么",
        "link": "/books/reading/chapters/02"
      },
      {
        "text": "3. 动词：拆句最重要的定位点",
        "link": "/books/reading/chapters/03"
      },
      {
        "text": "4. 第一套拆句流程：定位、切块、连线",
        "link": "/books/reading/chapters/04"
      }
    ]
  },
  {
    "text": "第二篇 · 五大句型与动词",
    "collapsed": true,
    "items": [
      {
        "text": "5. 第一类骨架：主语 + 谓语（SV）",
        "link": "/books/reading/chapters/05"
      },
      {
        "text": "6. 主系表：描述而不施加动作",
        "link": "/books/reading/chapters/06"
      },
      {
        "text": "7. 主谓宾：动作指向什么",
        "link": "/books/reading/chapters/07"
      },
      {
        "text": "8. 双宾语：给谁什么",
        "link": "/books/reading/chapters/08"
      },
      {
        "text": "9. 宾语补足语：让对象变成什么",
        "link": "/books/reading/chapters/09"
      },
      {
        "text": "10. 特殊句式：存在、形式主语与问句",
        "link": "/books/reading/chapters/10"
      },
      {
        "text": "11. 时间、体、情态与否定：先读准语气",
        "link": "/books/reading/chapters/11"
      },
      {
        "text": "12. 被动语态：先找事件，再找施事",
        "link": "/books/reading/chapters/12"
      }
    ]
  },
  {
    "text": "第三篇 · 短语与非谓语",
    "collapsed": true,
    "items": [
      {
        "text": "13. 名词短语：先抓中心词",
        "link": "/books/reading/chapters/13"
      },
      {
        "text": "14. 介词短语：它究竟连到哪里",
        "link": "/books/reading/chapters/14"
      },
      {
        "text": "15. 形容词、副词与比较：看清程度和范围",
        "link": "/books/reading/chapters/15"
      },
      {
        "text": "16. 不定式 to do：读出意图与动作关系",
        "link": "/books/reading/chapters/16"
      },
      {
        "text": "17. 动名词 doing：把动作当成一件事",
        "link": "/books/reading/chapters/17"
      },
      {
        "text": "18. 分词 doing / done：浓缩的修饰与动作",
        "link": "/books/reading/chapters/18"
      }
    ]
  },
  {
    "text": "第四篇 · 并列与从句",
    "collapsed": true,
    "items": [
      {
        "text": "19. 并列句：不是所有 and 都连接整句话",
        "link": "/books/reading/chapters/19"
      },
      {
        "text": "20. 时间、原因、条件：读出事件间的逻辑",
        "link": "/books/reading/chapters/20"
      },
      {
        "text": "21. 目的、结果、让步与比较：别读反逻辑",
        "link": "/books/reading/chapters/21"
      },
      {
        "text": "22. 定语从句：谁在修饰谁",
        "link": "/books/reading/chapters/22"
      },
      {
        "text": "23. 名词性从句：整句话占一个位置",
        "link": "/books/reading/chapters/23"
      },
      {
        "text": "24. 从句套从句：用树形关系拆解",
        "link": "/books/reading/chapters/24"
      }
    ]
  },
  {
    "text": "第五篇 · 长难句拆解",
    "collapsed": true,
    "items": [
      {
        "text": "25. 倒装、强调与虚拟：遇到奇怪语序怎么办",
        "link": "/books/reading/chapters/25"
      },
      {
        "text": "26. 省略、插入与指代：把缺失的信息补回来",
        "link": "/books/reading/chapters/26"
      },
      {
        "text": "27. 长难句全流程：从句法树到意思",
        "link": "/books/reading/chapters/27"
      }
    ]
  },
  {
    "text": "第六篇 · 猜词与自然意译",
    "collapsed": true,
    "items": [
      {
        "text": "28. 陌生词推断：先保住整句理解",
        "link": "/books/reading/chapters/28"
      },
      {
        "text": "29. 从准确理解到自然意译：不按词序搬运",
        "link": "/books/reading/chapters/29"
      },
      {
        "text": "30. 终章：建立自己的独立拆句系统",
        "link": "/books/reading/chapters/30"
      }
    ]
  },
  {
    "text": "练习与速查",
    "collapsed": true,
    "items": [
      {
        "text": "分级训练路线",
        "link": "/books/reading/appendix/training-path"
      },
      {
        "text": "训练 A",
        "link": "/books/reading/appendix/level-1"
      },
      {
        "text": "训练 B",
        "link": "/books/reading/appendix/level-2"
      },
      {
        "text": "训练 C",
        "link": "/books/reading/appendix/level-3"
      },
      {
        "text": "训练 D",
        "link": "/books/reading/appendix/level-4"
      },
      {
        "text": "句型速查表",
        "link": "/books/reading/appendix/quick-reference"
      },
      {
        "text": "错题记录手册",
        "link": "/books/reading/appendix/practice"
      },
      {
        "text": "编辑审稿记录",
        "link": "/books/reading/appendix/editorial-notes"
      }
    ]
  }
],
      '/books/thinking/': [
  {
    "text": "第二本 · 英语思维",
    "items": [
      {
        "text": "本书首页",
        "link": "/books/thinking/"
      },
      {
        "text": "32章目录",
        "link": "/books/thinking/contents"
      },
      {
        "text": "学习指南",
        "link": "/books/thinking/guide"
      },
      {
        "text": "分级迁移训练",
        "link": "/books/thinking/appendix/training-path"
      },
      { "text": "速查卡", "link": "/books/thinking/appendix/quick-reference" },
      { "text": "主动练习记录", "link": "/books/thinking/appendix/practice" },
      { "text": "三轮编辑审稿", "link": "/books/thinking/appendix/editorial-notes" }
    ]
  },
  {
    "text": "第一篇 · 重新认识英语思维",
    "collapsed": false,
    "items": [
      {
        "text": "1. 什么才是真正的英语思维？",
        "link": "/books/thinking/chapters/01"
      },
      {
        "text": "2. 为什么我们总是习惯先想中文？",
        "link": "/books/thinking/chapters/02"
      },
      {
        "text": "3. 语言、概念与思考之间是什么关系？",
        "link": "/books/thinking/chapters/03"
      },
      {
        "text": "4. 如何逐步建立直接理解英语的能力？",
        "link": "/books/thinking/chapters/04"
      }
    ]
  },
  {
    "text": "第二篇 · 英语概念系统",
    "collapsed": true,
    "items": [
      {
        "text": "5. 英语如何给世界中的事物分类？",
        "link": "/books/thinking/chapters/05"
      },
      {
        "text": "6. 英语如何理解动作与事件？",
        "link": "/books/thinking/chapters/06"
      },
      {
        "text": "7. 为什么英语需要大量词块？",
        "link": "/books/thinking/chapters/07"
      },
      {
        "text": "8. 英语如何理解空间、方向与位置？",
        "link": "/books/thinking/chapters/08"
      },
      {
        "text": "9. 英语如何通过熟悉的概念表达抽象思想？",
        "link": "/books/thinking/chapters/09"
      }
    ]
  },
  {
    "text": "第三篇 · 用英语组织信息",
    "collapsed": true,
    "items": [
      {
        "text": "10. 英语如何选择一句话的出发点？",
        "link": "/books/thinking/chapters/10"
      },
      {
        "text": "11. 英语如何把一个事件表达清楚？",
        "link": "/books/thinking/chapters/11"
      },
      {
        "text": "12. 英语怎样看待时间与动作状态？",
        "link": "/books/thinking/chapters/12"
      },
      {
        "text": "13. 英语如何安排重点与背景？",
        "link": "/books/thinking/chapters/13"
      },
      {
        "text": "14. 英语如何表达逻辑与判断？",
        "link": "/books/thinking/chapters/14"
      }
    ]
  },
  {
    "text": "第四篇 · 从想法到英语表达",
    "collapsed": true,
    "items": [
      {
        "text": "15. 如何表达存在、拥有与状态？",
        "link": "/books/thinking/chapters/15"
      },
      {
        "text": "16. 如何表达感觉、经历与情绪？",
        "link": "/books/thinking/chapters/16"
      },
      {
        "text": "17. 如何表达愿望、计划、决定与观点？",
        "link": "/books/thinking/chapters/17"
      },
      {
        "text": "18. 如何使用英语提出请求、拒绝和建议？",
        "link": "/books/thinking/chapters/18"
      },
      {
        "text": "19. 如何使英语表达自然、准确且得体？",
        "link": "/books/thinking/chapters/19"
      }
    ]
  },
  {
    "text": "第五篇 · 直接理解英语",
    "collapsed": true,
    "items": [
      {
        "text": "20. 阅读英文时，怎样减少脑内中文翻译？",
        "link": "/books/thinking/chapters/20"
      },
      {
        "text": "21. 听英语时，为什么认识单词却听不懂？",
        "link": "/books/thinking/chapters/21"
      },
      {
        "text": "22. 遇到陌生单词，如何不打断理解？",
        "link": "/books/thinking/chapters/22"
      },
      {
        "text": "23. 怎样理解一个段落，而不只是一个句子？",
        "link": "/books/thinking/chapters/23"
      },
      {
        "text": "24. 如何理解英语中没有直接说出来的意思？",
        "link": "/books/thinking/chapters/24"
      }
    ]
  },
  {
    "text": "第六篇 · 培养英语内部语言",
    "collapsed": true,
    "items": [
      {
        "text": "25. 看见一个画面，如何直接用英语描述？",
        "link": "/books/thinking/chapters/25"
      },
      {
        "text": "26. 别人提出问题时，怎样用英语快速回应？",
        "link": "/books/thinking/chapters/26"
      },
      {
        "text": "27. 如何开始用英语自言自语？",
        "link": "/books/thinking/chapters/27"
      },
      {
        "text": "28. 如何用英语解释一个英语概念？",
        "link": "/books/thinking/chapters/28"
      },
      {
        "text": "29. 如何直接用英语回忆与讲述经历？",
        "link": "/books/thinking/chapters/29"
      }
    ]
  },
  {
    "text": "第七篇 · 用英语完成思考",
    "collapsed": true,
    "items": [
      {
        "text": "30. 如何用英语解释问题、比较方案和表达观点？",
        "link": "/books/thinking/chapters/30"
      },
      {
        "text": "31. 如何在真实生活和工作中使用英语思考？",
        "link": "/books/thinking/chapters/31"
      },
      {
        "text": "32. 如何让英语思维成为长期稳定的能力？",
        "link": "/books/thinking/chapters/32"
      }
    ]
  }
]

    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/a-persimmons/Mastering-English-Reading' }],
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜索两本书', buttonAriaLabel: '搜索系列内容' }, modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除查询', footer: { selectText: '选择', navigateText: '切换' } } } } },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdated: { text: '更新日期' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '章节目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换浅色主题',
    darkModeSwitchTitle: '切换深色主题',
    footer: { message: '第一本训练读懂，第二本训练直接理解与表达。', copyright: '两本书 · 一个仓库 · 一个阅读站点' },
    editLink: { pattern: 'https://github.com/a-persimmons/Mastering-English-Reading/edit/main/docs/:path', text: '对本页提出修改建议' }
  }
})
