import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signUp from '../components/signUp.vue'
import LogIn from '../components/LogIn.vue'
import Post from '../views/Post.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/signup',
    name: 'sign-up',
    component: signUp
  },

  
  {
    path: '/login',
    name: 'log-in',
    component: LogIn
  },

  {
    path: '/post',
    name: 'make-post',
    component: Post
  }

  
  
]

const router = new VueRouter({
  routes
})

export default router
