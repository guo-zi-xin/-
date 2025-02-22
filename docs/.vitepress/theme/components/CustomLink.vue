<script setup lang="ts">
import { computed } from 'vue'
import { EXTERNAL_URL_RE } from '../utils/md'

interface ILink {
  href: string
  title: string
  target?: string
  rel?: string
  tag?: string
  desc?: string
}

const { href, title, tag = 'a', rel, target, desc } = defineProps<ILink>()

const lowerHref = href.toLocaleLowerCase();

const hrefSource = computed(() => {
  if (/bilibili\.com/.test(lowerHref))
    return 'bilibili'
  if (/juejin\.cn/.test(lowerHref))
    return 'juejin'
  if (/mp\.weixin\.qq/.test(lowerHref))
    return 'mpwx'
  if (/weread\.qq\.com/.test(lowerHref))
    return 'weread'
  else if (/youtube\.com/.test(lowerHref))
    return 'youtube'
  else if (/github\.com/.test(lowerHref))
    return 'github'
  else if (/zsxq\.com/.test(lowerHref))
    return 'zsxq'
  else if (/vercel/.test(lowerHref))
    return 'vercel'
  else if (/next[-]?js/.test(lowerHref))
    return 'nextjs'
  else if (/typescript/.test(lowerHref))
    return 'typescript'
  else if (/react[-]?query/.test(lowerHref))
    return 'react-query'
  else if (/react/.test(lowerHref))
    return 'react'
  else if (/stackoverflow/.test(lowerHref))
    return 'stackoverflow'
  else if (/bun/.test(lowerHref))
    return 'bun'
  else if (/momentjs/.test(lowerHref))
    return 'momentjs'
  else if (/nodejs/.test(lowerHref))
    return 'node'
  else if (/java/.test(lowerHref))
    return 'java'
  else if (/uniapp/.test(lowerHref) || /uniCloud/.test(lowerHref) || /dcloud.net/.test(lowerHref))
    return 'uni'
  else if (/csdn|CSDN/.test(lowerHref))
    return 'csdn'
  else return 'web'
})

const isExternal = computed(() => href && EXTERNAL_URL_RE.test(href))

const component = computed(() => {
  if (tag)
    return tag

  return href ? 'a' : 'button'
})
</script>

<template>
  <component
    :is="component" v-if="isExternal" :href="href"
    :target="target || (isExternal ? '_blank' : undefined)" :rel="rel || (isExternal ? 'noreferrer' : undefined)"
    class="custom-link"
  >
    <div class="custom-wrap rounded-lg p-px dark:shadow-lg shadow-black/20 my-4 border-zinc-300 border-solid border-px">
      <div class="rounded-lg dark:bg-black">
        <section class="flex group flex-col rounded-md p-4 gap-3 transition duration-500 cursor-pointer ">
          <span
            class="text-ellipsis w-[90%] whitespace-nowrap overflow-hidden dark:opacity-90 font-600 group-hover:text-[#06f]"
          >{{ title }}
          </span>
          <div v-if="desc" class="opacity-75 font-500 text-sm">
            {{ desc }}
          </div>
          <div class="flex item-center justify-between">
            <div class="flex items-center gap-1 w-full max-w-[75%]">
              <tabler:brand-bilibili v-if="hrefSource === 'bilibili'" class="text-blue-600 w-8 h-8 " />
              <uiw:weixin v-if="hrefSource === 'weread'" class="text-blue-600 w-8 h-8 " />
              <fe:youtube v-if="hrefSource === 'youtube'" class="text-red-600 w-8 h-8" />
              <bi:github v-if="hrefSource === 'github'" class="text-slate-600 w-7 h-7" />
              <ph:planet-fill v-if="hrefSource === 'zsxq'" class="text-emerald-600 w-8 h-8" />
              <uiw:weixin v-if="hrefSource === 'mpwx'" class="text-emerald-600 w-8 h-8" />
              <skill-icons:vercel-dark v-if="hrefSource === 'vercel'" class="text-zinc-800 w-7 h-7" />
              <teenyicons:nextjs-solid v-if="hrefSource === 'nextjs'" class="text-zinc-800 w-7 h-7" />
              <tabler:brand-juejin v-if="hrefSource === 'juejin'" class="text-blue-600 w-7 h-7" />
              <skill-icons:typescript v-if="hrefSource === 'typescript'" class="w-7 h-7" />
              <logos:react-query-icon v-if="hrefSource === 'react-query'" class="w-7 h-7" />
              <skill-icons:react-dark v-if="hrefSource === 'react'" class="w-7 h-7" />
              <skill-icons:stackoverflow-dark v-if="hrefSource === 'stackoverflow'" class="w-7 h-7" />
              <vscode-icons:file-type-bun v-if="hrefSource === 'bun'" class="w-7 h-7" />
              <icon-park:add-web v-if="hrefSource === 'web'" class="w-7 h-7" />
              <logos:momentjs v-if="hrefSource === 'momentjs'" class="w-7 h-7"/>
              <devicon:nodejs-wordmark v-if="hrefSource === 'node'" class="w-7 h-7"/>
              <devicon:java v-if="hrefSource === 'java'" class="w-7 h-7"/>
              <emojione-monotone:letter-u v-if="hrefSource === 'uni'" class="w-7 h-7"/>
              <simple-icons:csdn v-if="hrefSource === 'csdn'" class="w-7 h-7"/>
              <span class="text-ellipsis w-full whitespace-nowrap overflow-hidden text-sm opacity-75 font-500">
                {{ href }}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </component>
  <component :is="component" v-else :href="href" class="internal-link">
    {{ title }}
  </component>
</template>

<style scoped>
.custom-link {
  color: unset;
  font-weight: normal;
  text-decoration-style: none;
  text-decoration: none;
}

.dark .custom-link {
  color: white;
}

.dark .custom-wrap {
  border: unset;
  background-image: radial-gradient(at left top, #71717a, 50px, #27272a 50%);
}

.custom-link:hover {
  text-decoration: none;
}

.internal-link {
  color: var(--vp-c-brand);
  font-weight: normal;
}

.internal-link:hover {
  cursor: pointer;
}
</style>
