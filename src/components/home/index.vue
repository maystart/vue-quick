<template>
  <section class="home">
    <section class="header">
      <div layout="row" layout-align="space-between center">
        <div class="logo" layout="row" layout-align="center center">
          <img src="../../assets/images/logo.ico" alt="">
          <span>彩票数据管理中心</span>
        </div>
        <div class="userinfo" layout="row" layout-align="center center">
          <span class="time">{{nowTime}}</span>
          <span class="singup" @click="singup()">退出</span>
        </div>
      </div>
    </section>
    <section class="main" layout="row">
      <Slider/>
      <div class="content" layout="column" flex style="max-height: calc(100vh - 60px)">
        <transition name="fade" mode="out-in">
          <template v-if="$route.path == '/'">
            <Main/>
          </template>
          <template v-else>
            <router-view></router-view>
          </template>
        </transition>
        <section class="footer">
          彩票数据中心管理 &copy;{{createDate}} Created by 引力互动(武汉)科技有限公司
        </section>
      </div>
    </section>
  </section>
</template>
<script type="text/javascript">
import Slider from 'components/Slider'
import Moment from 'moment'
import Main from 'components/home/main'
export default {
  data() {
    return {
      createDate:Moment().format('YYYY'),
      nowTime: Moment().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  components: {
    Slider,
    Main
  },
  mounted() {
    console.log(this.$route.path)
    setInterval(() => {
      this.nowTime = Moment().format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
  },
  methods: {
    singup() {
      window.localStorage.removeItem('token');
      this.$router.push({ path: '/login' });
    }
  }
}

</script>
<style lang="less" scoped>
.home {
  overflow: hidden;
  .header {
    background-color: #409EFF;
    height: 60px;
    padding: 0 30px;
    color: #fff;
    font-size: 16px;
    .logo {
      height: 60px;
      img {
        max-width: 40px;
      }
      span {
        padding-left: 10px;
      }
    }
    .singup {
      background-color: #fff;
      color: #409EFF;
      border-radius: 5px;
      margin-left: 15px;
      width: 50px;
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }
  }
  .main {
    .content {
      padding: 20px 30px;
      box-sizing: border-box;
      overflow: auto;
    }
    .footer {
      text-align: center;
    }
  }
}

</style>
