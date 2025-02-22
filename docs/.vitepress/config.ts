import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { PageData, defineConfig, } from 'vitepress'


import algolia from './algolia';

import {
  nav,
  head,
  AlgorithmBar,
  NativeBar,
  ToolsBar,
  GuideBar,
  StructureBar,
  FrameBar,
  InterViewBar,
} from './configs'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/web-docs/',
  lang: 'zh-CN',
  title: '我的胃来食',
  description: '一些日常',
  head,

  lastUpdated: true,  //上次更新时间
  cleanUrls: true,  //去除.html后缀
  /* markdown 配置 */
  markdown: {
    lineNumbers: false,
    // math: true, //默认不解析
    theme: 'material-theme-palenight',
  },
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    siteTitle: '我的胃来食',
    logo: '/image/logo.jpg',
    nav,
    sidebar: {
      // 先前导言
      '/guide/': GuideBar,
      // 原生
      '/native/': NativeBar,
      // 工具
      '/tools/': ToolsBar,
      // 算法题
      '/algorithm/': AlgorithmBar,
      // 数据结构
      '/structure/': StructureBar,
      // 框架
      '/frame/': FrameBar,
      // 面试
      '/interview/': InterViewBar
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    // socialLinks: [{ icon: 'github', link: 'https://github.com/guo-zi-xin' }],

    footer: {
      message: '人生没有捷径，就像到二仙桥必须要走成华大道。',
      copyright: 'Copyright © 2019-present guozixin'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    /* Algolia DocSearch 配置 */
    // algolia,

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },

  /* 生成站点地图 */
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://notes.fe-mm.com/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
})