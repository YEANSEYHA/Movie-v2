import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import UserProfile from '../views/UserProfile.vue'
import Dashboard from '../views/Dashboard.vue'

import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'

import UploadMovie from '../views/UploadMovie.vue'
import MovieDetail from '../views/MovieDetail.vue'
import ListMovies from '../views/ListMovies.vue'
const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/user',
    name: 'User',
    component: UserProfile
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{ requiresAuth: true},
  },
  {
    path: '/uploadmovie',
    name: 'UploadMovie',
    component: UploadMovie,
  },
  {
    path: '/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail

  },
  {
    path: '/listmovies',
    name: 'ListMovies',
    component: ListMovies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  const loggedIn = localStorage.getItem('user')

  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn){
    next('/')
  }
    next()

})

export default router
