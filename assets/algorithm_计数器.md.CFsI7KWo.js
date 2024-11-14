import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.DG_r4eBb.js";import{_ as o,c as p,j as n,a as t,G as e,a6 as c,o as r}from"./chunks/framework.D7D3iUXQ.js";import"./chunks/theme.DDTcEUIz.js";const m=JSON.parse('{"title":"计数器","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/计数器.md","filePath":"algorithm/计数器.md","lastUpdated":1698665825000}'),i={name:"algorithm/计数器.md"};function y(F,s,D,B,d,f){const a=l;return r(),p("div",null,[s[0]||(s[0]=n("h1",{id:"计数器",tabindex:"-1"},[t("计数器 "),n("a",{class:"header-anchor",href:"#计数器","aria-label":'Permalink to "计数器"'},"​")],-1)),e(a,{readTime:"1",words:"132"}),s[1]||(s[1]=c(`<hr><p><strong>给定一个整型参数<code>n</code>，请你编写并返回一个<code>counter</code>函数。这个<code>counter</code>函数最初返回<code>n</code>，每次调用它时会返回前一个值加<code>1</code> 的值 ( <code>n</code>, <code>n + 1</code> , <code>n + 2</code>，等等)。</strong></p><blockquote><p>主要是通过使用闭包函数来保存变量，防止被全局篡改，并且保留计数器值</p></blockquote><div class="language-typeScript"><button title="Copy Code" class="copy"></button><span class="lang">typeScript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#BABED8;font-style:italic;"> n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">Function</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> counter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> createCounter </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">n</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">number</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> isInit</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9CAC;"> false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#89DDFF;">  ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">isInit</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      isInit</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9CAC;"> true</span></span>
<span class="line"><span style="color:#BABED8;">      res</span><span style="color:#89DDFF;">  =</span><span style="color:#BABED8;"> n</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      res</span><span style="color:#89DDFF;"> +=</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> res</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> createCounter</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">10</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">counter</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 10</span></span>
<span class="line"><span style="color:#82AAFF;">counter</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 11</span></span>
<span class="line"><span style="color:#82AAFF;">counter</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 12</span></span></code></pre></div>`,4))])}const C=o(i,[["render",y]]);export{m as __pageData,C as default};
