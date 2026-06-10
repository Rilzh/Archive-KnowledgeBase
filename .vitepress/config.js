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

    // 2. 配置左侧导航栏（把你的文件夹和文件关联上去）
    sidebar: [
      {
        text: '📖 法律法规',
        items: [
          // 💡 注意：这里的 link 对应你上传的 md 文件路径（不需要写 .md 后缀）
          // 举例：如果你在“法律”文件夹下有个“中华人民共和国档案法.md”
          //{ text: '中华人民共和国档案法', link: '/法律/中华人民共和国档案法' },
          
          // 💡 如果你还有其他文件，可以照着上面的格式继续往下复制添加，例如：
          // { text: '档案法实施条例', link: '/法律/档案法实施条例' },
        ]
      }
      {
         text: '📖 标准',
         items: [
           { text: '文书类电子档案检测一般要求', link: '/标准/文书类电子档案检测一般要求' },
           ]
      }
    ]
  }
}
