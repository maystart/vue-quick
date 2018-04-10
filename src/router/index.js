import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

let baseRoute = [{
  path: '/login',
  name: '登录',
  component: (resolve) => require(['../components/user/login.vue'], resolve)
}, {
  path: '/401',
  name: '无权访问',
  component: (resolve) => require(['../components/401.vue'], resolve)
}, {
  path: '/404',
  name: '找不到页面',
  component: (resolve) => require(['../components/404.vue'], resolve)
}];

let router = new Router({
  routes: baseRoute
});

export default router;
