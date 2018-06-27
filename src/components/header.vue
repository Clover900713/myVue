<template>
  <header class="header">
      <div id="logo">{{logo}}</div>
      <ul class="nav">
          <li v-for="nav in navs" :key="nav.id">{{nav.li}}</li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'headerDiv',
  data () {
    return {
      navs: [
        {li: '主页', id: 1},
        {li: '日志', id: 2},
        {li: '说说', id: 3},
        {li: '相册', id: 4}
      ]
    }
  },
  props: ['logo']
}
</script>
