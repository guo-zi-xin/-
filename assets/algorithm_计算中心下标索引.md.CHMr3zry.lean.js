import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.DG_r4eBb.js";import{_ as p,c as o,j as n,a as e,G as t,a6 as c,o as r}from"./chunks/framework.D7D3iUXQ.js";import"./chunks/theme.DDTcEUIz.js";const u=JSON.parse('{"title":"数组中心下标索引","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/计算中心下标索引.md","filePath":"algorithm/计算中心下标索引.md","lastUpdated":1698662919000}'),y={name:"algorithm/计算中心下标索引.md"};function D(F,s,B,i,C,A){const a=l;return r(),o("div",null,[s[0]||(s[0]=n("h1",{id:"数组中心下标索引",tabindex:"-1"},[e("数组中心下标索引 "),n("a",{class:"header-anchor",href:"#数组中心下标索引","aria-label":'Permalink to "数组中心下标索引"'},"​")],-1)),t(a,{readTime:"1",words:"375"}),s[1]||(s[1]=c(`<hr><p><strong>给你一个整数数组<code>nums</code>，请计算数组的<code>中心下标</code></strong><strong>数组<code>中心下标</code>是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。</strong><strong>如果中心下标位于数组最左端，那么左侧数之和视为<code>0</code> ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。</strong><strong>如果数组有多个中心下标，应该返回 <em>最靠近左边</em> 的那一个。如果数组不存在中心下标，返回 <code>-1</code></strong></p><ul><li>示例1</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 7</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 6</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">输出 </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#BABED8;">解释： </span></span>
<span class="line"><span style="color:#BABED8;">  中心下标是3， </span></span>
<span class="line"><span style="color:#BABED8;">  左侧数之和 sum </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 7</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 11</span></span>
<span class="line"><span style="color:#BABED8;">  右侧数之和 sum </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 5</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 6</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 11</span><span style="color:#BABED8;">， 两者相等</span></span></code></pre></div><ul><li>示例2</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nums  </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">输出 </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#BABED8;">解释：</span></span>
<span class="line"><span style="color:#BABED8;">  数组中不存在满足此条件的中心下标</span></span></code></pre></div><ul><li>示例3</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">输出 </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#BABED8;">解释：</span></span>
<span class="line"><span style="color:#BABED8;">  中心下标是0</span></span>
<span class="line"><span style="color:#BABED8;">  左侧数之和是 sum </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 0</span><span style="color:#BABED8;"> （下标 </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> 左侧不存在元素）</span></span>
<span class="line"><span style="color:#BABED8;">  右侧数之和是 sum </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums[</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;"> +</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span></code></pre></div><p><strong>求解：</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> pivotIndex </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;"> number</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> tar</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;"> cur</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> tar</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 求和</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> leftSum</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> k</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">leftSum</span><span style="color:#89DDFF;"> ===</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;"> leftSum</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">k</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">  // 比较左侧数字之和是否等于总和减去左侧数字和当前数字的值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        return</span><span style="color:#BABED8;"> k</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#BABED8;">      leftSum</span><span style="color:#89DDFF;"> +=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">k</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 7</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 6</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#82AAFF;">  pivotIndex</span><span style="color:#BABED8;">(nums)</span></span></code></pre></div>`,10))])}const g=p(y,[["render",D]]);export{u as __pageData,g as default};
