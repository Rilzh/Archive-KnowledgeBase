export default {
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
          // 💡 这里我放了一个占位示例，请确保你有一个 法律/中华人民共和国档案法.md 文件
          // 💡 如果还没有，可以先把下面这一行删掉，或者把 link 改为你现有的文件名
          { text: '中华人民共和国档案法', link: '/法律/中华人民共和国档案法' }
        ]
      }, // 👈 刚才就是漏掉了这个逗号！

      {
         text: '📖 标准',
         items: [
           { text: '文书类电子档案检测一般要求', link: '/标准/文书类电子档案检测一般要求' }
         ]
      }
    ]
  }
}
