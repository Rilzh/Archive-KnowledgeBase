export default {
  // 👇 就是加了下面这一行！告诉系统你的 GitHub 仓库名字叫什么
  base: '/Archive-KnowledgeBase/', 
  
  title: "档案法规标准知识库",
  description: "档案法规与知识检索数据库",
  themeConfig: {
    // 1. 开启本地全文检索框（带具体段落高亮）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonHtml: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    // 2. 配置左侧导航栏
    sidebar: [
      {
        text: '📖 法律法规',
        items: [
          { text: '中华人民共和国档案法', link: '/法律/中华人民共和国档案法' }
        ]
      },
      {
         text: '📖 标准',
         items: [
           { text: '文书类电子档案检测一般要求', link: '/标准/文书类电子档案检测一般要求' }
         ]
      }
    ]
  }
}
