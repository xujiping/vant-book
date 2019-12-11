import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
    Swipe, SwipeItem, Lazyload, Row, Col, Image,
    Panel, Grid, GridItem, Skeleton, Button, NavBar,
    Toast, Search
} from 'vant'

Vue.config.productionTip = false

Vue.use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Row)
    .use(Col)
    .use(Image)
    .use(Panel)
    .use(Grid)
    .use(GridItem)
    .use(Skeleton)
    .use(Button)
    .use(NavBar)
    .use(Toast)
    .use(Search)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')


/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })