# CSS背景动画

<script setup>
  import { BackgroundDemo } from './components'
</script>

- 实际效果

<BackgroundDemo/>

- 代码块

```vue
<script lang="ts" setup>
const liList: Array<number> = [...Array(10).keys()]
</script>

<template>
  <div class="box">
    <ul class="layout-content-background">
        <li v-for="item in liList" :key="item"></li>
      </ul>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:math';
$number-of-items: 10;

.box {
  width: 600px;
  height: 600px;
  overflow: hidden;
}

  .layout-content-background {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #4e54c8;
    overflow: hidden;
  }

  .layout-content-background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
    @for $i from 0 through $number-of-items {
      $index: $i + 1;
      &:nth-child(#{$index}) {
        // 设置每个子元素的样式
        left: math.random(100) + 1%;
        width: math.random(10) + 10px;
        height: math.random(10) + 10px;
        bottom: - (random(20) + 20px);
        animation-delay: $i * 1s;
      }
    }
  }

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
  
</style>
```
