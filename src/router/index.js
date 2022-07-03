import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
import Edit from '@/views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
