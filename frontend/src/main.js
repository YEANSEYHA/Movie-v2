import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'
import axios from 'axios'

// Create vuex store
const store = createStore({
    state:{
        user: null
    },
    mutations:{
        SET_USER_DATA (state, userData){
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
        },
        CLEAR_USER_DATA(){

            localStorage.removeItem('user')
            location.reload()


        }
    },

    actions:{
        register({commit}, credentials){
            return axios
            .post('http://localhost:3000/register', credentials)
            .then(
                ({data}) =>{
                    commit('SET_USER_DATA', data)
                    console.log('user data is: ', data)
                }
            )
        },
        login({commit}, credentials){
            return axios
            .post('http://localhost:3000/login', credentials)
            .then(
                ({data}) =>{
                    commit('SET_USER_DATA', data)
                    console.log('user data is: ', data)
                }
            )
        },
        logout({commit}){
            commit('CLEAR_USER_DATA')
        }
    },
    getters:{
        // use to hide login nav
        loggedIn (state){
            return !!state.user
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

/* createApp(App).use(router).mount('#app') */
