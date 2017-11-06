<template>
    <div class="sidebar">
        <div >
            <div class="header">
                <span class="logo"></span>
                <div>
                    <span class="blog-name">{{sidebar.blogName}}</span>
                    <span class="author-name">{{sidebar.authorName}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    sidebar () {
      return this.$store.getters.sidebar
    }
  }
}
</script>

<style scoped lang = "less">
    .sidebar {
        width: 280px;
        background-color: rgb(244, 248, 251);
    }
</style>


