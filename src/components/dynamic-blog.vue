<template>
  <div id="dynamic-blog">
    <sidebar class="sidebar"></sidebar>
    <mainbar class=""></mainbar>
  </div>
</template>

<script>
  import sidebar from './sidebar.vue'
  import mainbar from './mainbar.vue'

  export default {
    components: {
      sidebar,
      mainbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'less'>
  #dynamic-blog {
    height: 100%;
    .sidebar {   
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
</style>
