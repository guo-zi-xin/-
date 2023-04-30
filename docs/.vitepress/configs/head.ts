import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'

export const head: HeadConfig[] = [
  [
    'link',
    { rel: 'icon', href: '/logo.jpg', color: '#3eaf7c' },
  ], // 需要被注入到当前页面的 HTML <head> 中的标签
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
  ['meta', { name: 'baidu-site-verification', content: 'codeva-Whjnr38WFE' }],
  ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
  // ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
  [
    'script',
    { src: isDevelopment ? '' : 'https://hm.baidu.com/hm.js?8092fab2f2adfc7938ba5b8885aef5b4' }
  ]
]