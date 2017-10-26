import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tweet from '@/components/Tweet'

Vue.component('tweet', Tweet);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
