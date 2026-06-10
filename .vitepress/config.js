import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件所在目录的绝对路径
const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getSidebarItems(dirName) {
  // 核心改进：显式定位到 docs 根目录，防止路径偏移
  // 假设你的 md 文件在项目根目录下的 '法律' 或 '标准' 文件夹内
  const dirPath = path.join(__dirname, '..', dirName)
  
  console.log(`[DEBUG] 正在扫描路径: ${dirPath}`)
  
  if (!fs.existsSync(dirPath)) {
    console.error(`[ERROR] 目录不存在: ${dirPath}`)
    return []
  }
  
  const files = fs.readdirSync(dirPath)
  console.log(`[DEBUG] 该目录下找到的文件:`, files)
  
  return files
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
    sidebar: [
      {
        text: '📖 法律法规',
        items: getSidebarItems('法律')
      },
      {
         text: '📖 标准',
         items: getSidebarItems('标准')
      }
    ]
  }
}
