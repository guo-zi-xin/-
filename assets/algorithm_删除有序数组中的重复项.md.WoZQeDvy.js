import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.DG_r4eBb.js";import{_ as p,c as o,j as n,a as e,G as t,a6 as c,o as r}from"./chunks/framework.D7D3iUXQ.js";import"./chunks/theme.DDTcEUIz.js";const u=JSON.parse('{"title":"删除有序数组中的重复项","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/删除有序数组中的重复项.md","filePath":"algorithm/删除有序数组中的重复项.md","lastUpdated":1699530194000}'),y={name:"algorithm/删除有序数组中的重复项.md"};function F(D,s,B,i,C,d){const a=l;return r(),o("div",null,[s[0]||(s[0]=n("h1",{id:"删除有序数组中的重复项",tabindex:"-1"},[e("删除有序数组中的重复项 "),n("a",{class:"header-anchor",href:"#删除有序数组中的重复项","aria-label":'Permalink to "删除有序数组中的重复项"'},"​")],-1)),t(a,{readTime:"1",words:"405"}),s[1]||(s[1]=c(`<hr><p><strong>给你一个 <em>非严格递增排列</em> 的数组 <code>nums</code> ，请你 <em>原地</em> 删除重复出现的元素，使每个元素 <em>只出现一次</em> ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 <code>nums</code> 中唯一元素的个数。</strong></p><p><strong>考虑 <code>nums</code> 的唯一元素的数量为 <code>k</code> ，你需要做以下事情确保你的题解可以被通过：</strong></p><p><strong>更改数组 <code>nums</code> ，使 <code>nums</code> 的前 <code>k</code> 个元素包含唯一元素，并按照它们最初在 <code>nums</code> 中出现的顺序排列。<code>nums</code> 的其余元素与 <code>nums</code>的大小不重要。</strong></p><p><strong>返回 <code>k</code>。</strong></p><ul><li>示例1</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">输出：</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">_]</span></span>
<span class="line"><span style="color:#BABED8;">解释：函数应该返回新的长度 </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;"> ，并且原数组 nums 的前两个元素被修改为 </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 2</span><span style="color:#BABED8;"> 。不需要考虑数组中超出新长度后面的元素。</span></span></code></pre></div><ul><li>示例2</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">输出：</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">解释：函数应该返回新的长度 </span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;"> ， 并且原数组 nums 的前五个元素被修改为 </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 4</span><span style="color:#BABED8;"> 。不需要考虑数组中超出新长度后面的元素。</span></span></code></pre></div><ul><li>求解</li></ul><blockquote><p>通过判断与前一项是否相等，在通过指针重新指向</p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> removeDuplicates </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">number</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> len</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> index</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> len</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">k</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">k</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">k</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">        index</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span></code></pre></div><blockquote><p>通过两个指针一快一慢来限定重复项目</p></blockquote><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> removeDuplicates </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">number</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> len</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> fast</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> slow</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    while</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">fast</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> len</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">fast</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">fast</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">])  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">slow</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">fast</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">        ++</span><span style="color:#BABED8;">slow</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">      ++</span><span style="color:#BABED8;">fast</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> slow</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span></code></pre></div>`,14))])}const g=p(y,[["render",F]]);export{u as __pageData,g as default};
