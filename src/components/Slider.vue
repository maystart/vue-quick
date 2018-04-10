<template>
  <section class="slider">
    <div class="left-side">
      <div class="left-side-inner">
        <router-link to="/" class="logo block">
        </router-link>
        <el-menu class="menu-box" theme="dark" router :default-active="$route.path" style="height: calc(100vh - 60px)">
          <div v-for="(item, index) in menu" :key="index">
            <el-menu-item class="menu-list" v-if="typeof item.children === 'undefined'" :index="item.path">
              <i class="icon fa" :class="item.icon"></i>
              <span v-text="item.name" class="text"></span>
            </el-menu-item>
            <el-submenu :index="item.path" v-else>
              <template slot="title">
                <i class="icon fa" :class="item.icon"></i>
                <span v-text="item.name" class="text"></span>
              </template>
              <el-menu-item class="menu-list" v-for="(sub_item, sub_index) in item.children" :index="sub_item.path" :key="sub_index">
                <span v-text="sub_item.name" class="text"></span>
              </el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
import menuList from '../router/menu.js'
export default {
  data() {
    return {
      menu: menuList
    }
  }
}

</script>
<style lang="less">
.left-side {
  width: 220px;
  height: 100%;
  overflow-y: auto;
  user-select: none;
  .logo {
    margin: 10px auto;
    text-align: center;
  }
  .menu-box {
    .menu-list,
    .el-submenu__title {
      height: 45px;
      line-height: 45px;
      .icon {
        width: 16px;
        font-size: 14px;
      }
      .text {
        margin-left: 10px;
      }
      &.is-active,
      &:hover {
        color: #409EFF;
      }
    }
  }
}

</style>
