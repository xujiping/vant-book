import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe, SwipeItem, Lazyload, Row, Col, Image, Panel, Grid, GridItem} from 'vant'

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

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
