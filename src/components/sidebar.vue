<template>
    <div class="sidebar">
        <div >
            <div class="header">
                <div class="logo">&#xe641</div>
                <div class="blog-info">
                    <div class="blog-name">{{sidebar.blogName}}</div>
                    <div class="author-name">{{sidebar.authorName}}</div>
                </div>
            </div>
            <div class="search-box">
                <el-input suffix-icon="el-icon-search" size="small"></el-input>
            </div>
            <div class="page-option" @click="changeSelectPage($event)">
                <div v-for="(item, index) in sidebar.pageList"
                     :key="item.pageId"
                     class="page"
                     :class="{active: item.pageId === selectPageId ? true : false}"
                ><span>{{item.icon}}</span>{{item.pageName}}</div>
            </div>
            <div class="footer">
                <a :href="sidebar.blogUrl" target="_blank">{{sidebar.footer}}</a>
                <span>&#xe505</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    sidebar () {
      return this.$store.getters.sidebar
    },
    selectPageId () {
      return this.$store.getters.selectPageId
    }
  },
  methods: {
    changeSelectPage (event) {
      let target = event.target
      if (target.hasAttribute('data-page-id')) {
        this.$store.dispatch('changeSelectPage', target.getAttribute('data-page-id'))
      }
    }
  }
}
</script>

<style scoped lang = "less">
    .sidebar {
        width: 280px;
        background-color: rgb(244, 248, 251);
        height: 100%;
        position: absolute;
        left: 0;
        .header {
            height: 40px;
            position: relative;
            padding: 20px;

            .logo {
                font-family: 'iconfont';
                height: 40px;
                width: 40px;
                font-size: 34px;
                line-height: 40px;
                position: absolute;
                left: 20px;
                margin: 0;
            }

            .blog-info {
                height: 34px;
                position: absolute;
                top: 20px;
                left: 60px;
                width: 200px;

                .blog-name {
                    height: 17px;
                    position: absolute;
                    top: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 17px;
                }

                .author-name {
                    height: 17px;
                    position: absolute;
                    top: 18px;
                    font-size: 12px;
                    line-height: 17px;
                }
            }
        }
        .search-box {
            padding: 0 20px 10px;
        
        }
        .page-option {
            padding-right: 20px;
            .page {
                font-size: 14px;
                height: 34px;
                line-height: 34px;
                border-radius: 4px;
                span {              
                    font-family: 'iconfont';
                    font-size: 20px;
                    margin: 0 10px 0 20px;
                }
            }

            .page:hover {
                cursor: pointer;
                background-color: rgb(217, 237, 250);
            }
        }
        .footer {
            position: absolute;
            bottom: 0;
            height: 45px;
            line-height: 45px;
            text-align: center;
            width: 100%;
            a {
                text-decoration: none;
            }
            span {
                font-family: 'iconfont';
                font-size: 20px;
            }
        }
    }
</style>


