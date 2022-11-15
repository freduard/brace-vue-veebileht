import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import Team from '../views/Team.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
  ]
})

export default router
