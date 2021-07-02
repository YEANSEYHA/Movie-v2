<template>
  <form @submit.prevent="register" >
    <h3>Sign up</h3>
    <input type="text" placeholder="Username" name="name" v-model="name" >
    <input type="email" placeholder="Email" name="email" v-model="email">
    <input type="password" placeholder="Password" name="password" v-model="password" >
    <button type="submit" name="button">Signup</button>
  </form>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Signup',
    data(){
      return{
        name: '',
        email: '',
        password: ''
      }
    },
    methods:{
       register(){
        this.$store.dispatch('register',{
          name: this.name,
          email: this.email,
          password: this.password
        })
      }

    }
}
</script>

<style scoped>
/* custom font */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');

/* variables */
:root {
  --primary: #4f515a;
  --secondary: #ebebeb;
  --warning: #da0f41;
}

/* base styles  */
* {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  color: var(--primary);
}
body {
  background: #fafafa;
}
a {
  text-decoration: none;
}

/* buttons */
button, .btn { 
  background: var(--secondary);
  border-radius: 8px;
  border: 0;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
}
button:hover, .btn:hover {
  background: var(--primary);
  color: white;
}
button:disabled {
  opacity: 0.5;
  color: var(--primary);
  background: var(--secondary);
  cursor: not-allowed;
}

/* forms */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  border: 1px solid  var(--secondary);
  background: white;
}
input, textarea {
  border: 0;
  border-bottom: 1px solid var(--secondary);
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}

/* error text */
.error {
  color: var(--warning);
  font-size: 14px;
  margin: 16px 0;
}
</style>