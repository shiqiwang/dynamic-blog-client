<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @font-face {
    font-family: 'iconfont';
    src: url('assets/iconfont/iconfont.eot');
    src: url('assets/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('assets/iconfont/iconfont.woff') format('woff'),
    url('assets/iconfont/iconfont.ttf') format('truetype'),
    url('assets/iconfont/iconfont.svg#iconfont') format('svg');
  }
  html {
    height: 100%;

    body {
      margin: 0;
      width: 100%;

      #app {
        height: 100%;
        font-family: 'Microsoft JhengHei Light', Arial, Helvetica, sans-serif;
      }
    }
  }
</style>
