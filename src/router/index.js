import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Student from '../components/Student.vue'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkAuth();
  console.log(isAuthenticated);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

function checkAuth() {
  return localStorage.getItem('islogged') === 'true';
}

export default router
