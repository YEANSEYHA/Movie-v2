import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'
import axios from 'axios'

// Create vuex store
const store = createStore({
    state:{
    },
    mutations:{

    },
    actions:{
        register({commit}, credentials){
            return axios
            .post('http://localhost:3000/register', credentials)
            .then(
                ({data}) =>{
                    console.log('user data is: ', data)
                }
            )
        }
    },
    getters:{

    }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

/* createApp(App).use(router).mount('#app') */
