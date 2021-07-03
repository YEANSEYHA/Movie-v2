<template>
  <form @submit.prevent="uploadMovie" >
    <h3>Sign up</h3>
    <input type="text" placeholder="title" name="title" v-model="title" >
    <input type="text" placeholder="image url" name="image" v-model="image">
    
    <button type="submit" name="button">Upload</button>
  </form>
</template>

<script>
export default {
  name: 'UploadMovie',
  data(){
      return{
        title: '',
        image: '',
      }
  },
  methods:{
    uploadMovie(){
      this.$store.dispatch('uploadMovie',{
        title: this.title,
        image: this.image,
      })
    // redirect to the dashboard when upload success
    .then( () =>{
      this.$router.push({ name: 'Dashboard'})
    })
    }
  }
}
</script>

<style scoped>



</style>