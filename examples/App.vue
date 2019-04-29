<template>
  <div id="app">
    <div class="main-container__mc">
      <div class="main-aside__mc">
        <div class="main-logo__mc">
          ew ui
        </div>
        <ul class="aside-link__mc">
          <li v-for="(item, idx) in list" :key="idx">
            <router-link :to="{name: item.name}">
              {{item.label}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="main-container__mc">
        <div class="markdown-format">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    list () {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss">
  #app {
    height:100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-left: 20px;
    padding-right: 20px;
  }
  .main-container__mc{
    height: 100%;
    .main-aside__mc{
      width: 180px;
      height: 100%;
      overflow: auto;
      float: left;
      border-right: 1px solid #ededed;
      padding-right: 20px;
      .main-logo__mc{
        line-height: 2em;
        font-size: 30px;
        font-weight: bold;
        color: #888;
        font-family: '微软雅黑 Light', 'pingfang';
      }
    }
    .main-container__mc{
      margin-left: 240px;
      overflow: auto;
    }

    .aside-link__mc{
      a{
        display: block;
        line-height: 1.5em;
        border-left: 3px solid transparent;
        padding-left: 10px;
        &.router-link-active{
          color: #97c1da;
          border-left: 3px solid #97c1da;
        }
      }
    }
  }
</style>
