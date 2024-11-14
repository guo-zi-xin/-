import{_ as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.DG_r4eBb.js";/* empty css                                                                              */import{d as i,o as a,c as l,j as n,F as D,C as y,_ as B,a as F,G as e,k as A,a6 as E}from"./chunks/framework.D7D3iUXQ.js";import"./chunks/theme.DDTcEUIz.js";const d={class:"box"},u={class:"layout-content-background"},m=i({__name:"BackgroundDemo",setup(t){const p=[...Array(10).keys()];return(s,o)=>(a(),l("div",d,[n("ul",u,[(a(),l(D,null,y(p,c=>n("li",{key:c})),64))])]))}}),g=B(m,[["__scopeId","data-v-2b454b99"]]),x=JSON.parse('{"title":"CSS背景动画","description":"","frontmatter":{},"headers":[],"relativePath":"native/css/css背景动画.md","filePath":"native/css/css背景动画.md","lastUpdated":1701338304000}'),h={name:"native/css/css背景动画.md"},k=Object.assign(h,{setup(t){return(p,s)=>{const o=r;return a(),l("div",null,[s[0]||(s[0]=n("h1",{id:"css背景动画",tabindex:"-1"},[F("CSS背景动画 "),n("a",{class:"header-anchor",href:"#css背景动画","aria-label":'Permalink to "CSS背景动画"'},"​")],-1)),e(o,{readTime:"1",words:"195"}),s[1]||(s[1]=n("ul",null,[n("li",null,"实际效果")],-1)),e(A(g)),s[2]||(s[2]=E(`<ul><li>代码块</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#C792EA;"> lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> liList</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">Array</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">10</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#BABED8;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">div</span><span style="color:#C792EA;"> class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">ul</span><span style="color:#C792EA;"> class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">layout-content-background</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">li</span><span style="color:#C792EA;"> v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in liList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> :key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#C792EA;"> lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">@use &#39;sass:math&#39;;</span></span>
<span class="line"><span style="color:#BABED8;">$number-of-items: 10;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">.box {</span></span>
<span class="line"><span style="color:#BABED8;">  width: 600px;</span></span>
<span class="line"><span style="color:#BABED8;">  height: 600px;</span></span>
<span class="line"><span style="color:#BABED8;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  .layout-content-background {</span></span>
<span class="line"><span style="color:#BABED8;">    width: 100%;</span></span>
<span class="line"><span style="color:#BABED8;">    height: 100%;</span></span>
<span class="line"><span style="color:#BABED8;">    margin: 0;</span></span>
<span class="line"><span style="color:#BABED8;">    padding: 0;</span></span>
<span class="line"><span style="color:#BABED8;">    background: #4e54c8;</span></span>
<span class="line"><span style="color:#BABED8;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  .layout-content-background li {</span></span>
<span class="line"><span style="color:#BABED8;">    position: absolute;</span></span>
<span class="line"><span style="color:#BABED8;">    display: block;</span></span>
<span class="line"><span style="color:#BABED8;">    list-style: none;</span></span>
<span class="line"><span style="color:#BABED8;">    width: 20px;</span></span>
<span class="line"><span style="color:#BABED8;">    height: 20px;</span></span>
<span class="line"><span style="color:#BABED8;">    background: rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span style="color:#BABED8;">    animation: animate 19s linear infinite;</span></span>
<span class="line"><span style="color:#BABED8;">    @for $i from 0 through $number-of-items {</span></span>
<span class="line"><span style="color:#BABED8;">      $index: $i + 1;</span></span>
<span class="line"><span style="color:#BABED8;">      &amp;:nth-child(#{$index}) {</span></span>
<span class="line"><span style="color:#BABED8;">        // 设置每个子元素的样式</span></span>
<span class="line"><span style="color:#BABED8;">        left: math.random(100) + 1%;</span></span>
<span class="line"><span style="color:#BABED8;">        width: math.random(10) + 10px;</span></span>
<span class="line"><span style="color:#BABED8;">        height: math.random(10) + 10px;</span></span>
<span class="line"><span style="color:#BABED8;">        bottom: - (random(20) + 20px);</span></span>
<span class="line"><span style="color:#BABED8;">        animation-delay: $i * 1s;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">@keyframes move {</span></span>
<span class="line"><span style="color:#BABED8;">  100% {</span></span>
<span class="line"><span style="color:#BABED8;">    transform: translate3d(0, 0, 1px) rotate(360deg);</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">@keyframes animate {</span></span>
<span class="line"><span style="color:#BABED8;">  0% {</span></span>
<span class="line"><span style="color:#BABED8;">    transform: translateY(0) rotate(0deg);</span></span>
<span class="line"><span style="color:#BABED8;">    opacity: 1;</span></span>
<span class="line"><span style="color:#BABED8;">    border-radius: 0;</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  100% {</span></span>
<span class="line"><span style="color:#BABED8;">    transform: translateY(-1000px) rotate(720deg);</span></span>
<span class="line"><span style="color:#BABED8;">    opacity: 0;</span></span>
<span class="line"><span style="color:#BABED8;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,2))])}}});export{x as __pageData,k as default};
