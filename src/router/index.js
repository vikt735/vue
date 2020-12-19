import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drone',
    name: 'Drone',
    component: () => import(/* webpackChunkName: "drone" */  '../views/Drone.vue')
  },
  {
    path: '/advantages',
    name: 'Advantages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Advantages.vue')
  },
  {
    path: '/characteristics',
    name: 'Characteristics',
    component: () => import(/* webpackChunkName: "characteristics" */  '../views/Characteristics.vue')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "questions" */  '../views/Questions.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */  '../views/Contacts.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
