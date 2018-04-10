<template>
  <router-view id="app"></router-view>
</template>
<script>
import user from './router/menu.js'
export default {
  created() {
    this.isLogin();
  },
  mounted() {
    this.$router.addRoutes(user);
  },
  methods: {
    isLogin() {
      if (window.localStorage.token) {
        return this.$router.replace({ path: user[0].path || '/' });
      } else {
        return this.$router.push({ path: '/login' });
      }
    }
  }
}

</script>
