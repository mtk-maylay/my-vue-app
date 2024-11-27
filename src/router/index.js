import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../components/TodoList.vue'

const routes = [

   {
     path: '/',
     name: 'Login',
     component: () => import('@/components/LoginPage.vue')
   },

  {
    path: '/todolist',
    name: 'TodoList',
    component: TodoListView
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('token');
  
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
