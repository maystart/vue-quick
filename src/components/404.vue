<template>
  <div layout="column" layout-align="center center" flex style="height: 100%;">
    <div class="g-center">
      <h1>404</h1>
    </div>
    <div class="go-home">
      <router-link to="/" class="go-home">
        返回首页
      </router-link>
    </div>
  </div>
</template>
<style type="text/css" lang="less" scoped>
.go-home {
  background-color: #409EFF;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

</style>
