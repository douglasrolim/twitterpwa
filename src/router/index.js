import Vue from 'vue'
import Router from 'vue-router'
import Tabs from '@/components/Tabs'
import Tweet from '@/components/Tweet'
import Redigir from '@/components/Redigir'

Vue.component('tweet', Tweet);
Vue.component('redigir', Redigir);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabs',
      component: Tabs
    }
  ]
})
