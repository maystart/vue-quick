export default [{
  path: '/',
  name: '主页',
  icon: "fa-home",
  component: (resolve) => require(['../components/home/index.vue'], resolve),
}, {
  path: '/http',
  name: 'HTTP数据',
  icon: 'fa-home',
  component: (resolve) => require(['../components/home/index.vue'], resolve),
  children: [{
      path: '/onlineUsers',
      name: '在线主播',
      component: (resolve) => require(['../components/http/onlineUsers.vue'], resolve)
    },
    // {
    //   path: '/accounts',
    //   name: '在线小哥',
    //   component: (resolve) => require(['../components/404.vue'], resolve)
    // }, 
    // {
    //   path: '/accounts',
    //   name: '待发送彩票列表',
    //   component: (resolve) => require(['../components/404.vue'], resolve)
    // },
    {
      path: '/lotteryOrdersList',
      name: '已购买彩票列表',
      component: (resolve) => require(['../components/http/lotteryOrdersList.vue'], resolve)
    }
  ]
}];
