import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.DG_r4eBb.js";import{_ as o,c as p,j as n,a as t,G as e,a6 as c,o as r}from"./chunks/framework.D7D3iUXQ.js";import"./chunks/theme.DDTcEUIz.js";const d=JSON.parse('{"title":"合并两个有序数组","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/合并两个有序数组.md","filePath":"algorithm/合并两个有序数组.md","lastUpdated":1699530194000}'),y={name:"algorithm/合并两个有序数组.md"};function F(D,s,i,B,A,E){const a=l;return r(),p("div",null,[s[0]||(s[0]=n("h1",{id:"合并两个有序数组",tabindex:"-1"},[t("合并两个有序数组 "),n("a",{class:"header-anchor",href:"#合并两个有序数组","aria-label":'Permalink to "合并两个有序数组"'},"​")],-1)),e(a,{readTime:"1",words:"280"}),s[1]||(s[1]=c(`<hr><p><strong>给你两个有序整数数组<code>nums1</code>和<code>nums2</code>，请你将<code>nums2</code>合并到<code>nums1</code>中，使<code>num1</code>成为一个有序数组。</strong></p><blockquote><p>说明: 初始化<code>nums1</code>和<code>nums2</code>需要合并的元素数量分别为 <code>m</code>和 <code>n</code> 。 你可以假设<code>nums1</code> 有足够的空间（空间大小大于或等于 <code>m + n</code> ）来保存 <code>nums2</code> 中的元素。</p></blockquote><ul><li>示例</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 输入:</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> nums1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 3</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> nums2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">       n </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 输出: [1,2,2,3,5,6]</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> getConcatArr </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> nums2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> m</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> n</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;"> void</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">    nums1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">m</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> ...</span><span style="color:#BABED8;">nums2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#BABED8;">    nums1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> a</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;"> b</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> nums1</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#82AAFF;">  getConcatArr</span><span style="color:#BABED8;">(nums1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums2)</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">number[]</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#BABED8;font-style:italic;"> nums1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#BABED8;font-style:italic;"> m</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">number[]</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#BABED8;font-style:italic;"> nums2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#BABED8;font-style:italic;"> n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#89DDFF;font-style:italic;"> {</span><span style="color:#FFCB6B;font-style:italic;">void</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> Do not return anything, modify nums1 in-place instead.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getConcatArr </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">nums1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> m</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> nums2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> n</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> index1</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> m</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> index2</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> tail</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> m</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    while</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">index2</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">index1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> nums2</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">index2</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">tail</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">index1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">            index1</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#BABED8;">            tail</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">            nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">tail</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums2</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">index2</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">            index2</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#BABED8;">            tail</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> nums1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> nums2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 6</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">getConcatArr</span><span style="color:#BABED8;">(nums1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 3</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(nums1)</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getConcatArr </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">nums1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> m</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> nums2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> n</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> len1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> m</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        len2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        len</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;"> number</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> m</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">len2</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">len1</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums2</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len2</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">            continue</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#BABED8;"> nums2</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> nums1</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len1</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> nums2</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">len2</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div>`,8))])}const f=o(y,[["render",F]]);export{d as __pageData,f as default};
