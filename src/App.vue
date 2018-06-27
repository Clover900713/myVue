<template>
  <div id="app">
      <HeaderDiv :logo="logoMsg"></HeaderDiv>
  </div>
</template>

<script>
import HeaderDiv from './components/header'

export default {
  name: 'App',
  data () {
    return {
      logoMsg: 'fakeQQ'
    }
  },
  components: {
    HeaderDiv
  }
}
</script>
