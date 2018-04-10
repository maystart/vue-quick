import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'less/main.less'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/less/font-awesome.less'
import menu from './router/menu.js'

router.beforeEach((to, from, next) => {
  let routeName = to.meta.name || to.name;
  window.document.title = `${routeName}-彩票数据后台管理系统`;
  if (to.path == '/login' || to.path == '/404') {
    next();
  } else {
    if (!window.localStorage.token) {
      next('/login');
    } else {
      if (to.path == '/') {
        next();
        return;
      }
      let hasPath = 0;
      if (menu && Array.isArray(menu) && menu.length) {
        for (let i = 0, len = menu.length; i < len; i++) {
          if (menu[i] && menu[i].children && Array.isArray(menu[i].children) && menu[i].children.length) {
            for (let j = 0, len = menu[i].children.length; j < len; j++) {
              let item = menu[i].children[j];
              if (to.path == item.path) {
                hasPath++;
                next();
                break;
              }
            }
          }
        }
      }
      if (!hasPath) {
        next('/404');
      }
    }
  }
});

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
