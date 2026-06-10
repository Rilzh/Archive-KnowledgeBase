import fs from 'fs'
import path from 'path'

// 💡 这是一个自动读取文件夹内所有 .md 文件的魔法函数
function getSidebarItems(dirName) {
  const dirPath = path.resolve(__dirname, `../${dirName}`)
  if (!fs.existsSync(dirPath)) return []
  
  return fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
    .map(file => {
      const name = file.replace('.md', '')
      return {
        text: name,
        link: `/${dirName}/${name}`
      }
    })
}

export default {
  base: '/Archive-KnowledgeBase/', 
  title: "档案法规标准知识库",
  description: "档案法规与知识检索数据库",
  themeConfig: {
    // 1. 开启本地全文检索框
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

    // 2. 🤖 全自动侧边栏配置（再也不用手动改这里了！）
    sidebar: [
      {
        text: '📖 法律法规',
        items: getSidebarItems('法律') // 自动去抓“法律”文件夹里的所有文件
      },
      {
         text: '📖 标准',
         items: getSidebarItems('标准') // 自动去抓“标准”文件夹里的所有文件
      }
    ]
  }
}
