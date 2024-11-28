import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'
import AppInfo from './.vitepress/plugins/app-info'

const options = {
  ...flexSearchIndexOptions,
  previewLength: 62, // 搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "搜索关键词",
  allow: [],
  ignore: [],
};
const require = createRequire(import.meta.url)

export default defineConfig(async () => {
  return <UserConfig>{
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将 node_modules 中的内容拆分到不同的 chunk
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'react-vendor';
              if (id.includes('vue')) return 'vue-vendor';
              return 'vendor';
            }
          },
        },
      },
    },
    server: {
      // 端口号
      port: 3001,
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [
          resolve(__dirname, '..'),
        ],
      },
    },
    plugins: [
      AppInfo(),
      // custom
      MarkdownTransform(),
      // plugins
      SearchPlugin(options),
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3',
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        defaultStyle: 'display: inline-block',
      }),
      UnoCSS(),
      
    ],
    css: {
      postcss: {
        plugins: [
          require('postcss-nested'),
        ],
      },
    },
  }
})
