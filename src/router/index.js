import Vue from 'vue'
import VueRouter from 'vue-router'
import film from '@/views/film'
import nowplaying from '@/views/film/nowplaying'
import comingsoon from '@/views/film/comingsoon'
import cinema from '@/views/cinema'
import center from '@/views/center'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: film,
    redirect: '/film/nowplaying',
    children: [
      {
        path: '/film/nowplaying',
        component: nowplaying
      },
      {
        path: '/film/comingsoon',
        component: comingsoon
      }
    ]
  },
  {
    path: '/cinema',
    component: cinema
  },
  {
    path: '/center',
    component: center
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  routes
})

export default router
