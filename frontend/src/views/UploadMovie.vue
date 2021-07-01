<template>
  
 <div class="flexbox-item flexbox-item-2">
            <table class="table">
                
            <center>
                <div>
                    <form enctype="multipart/form-data" @submit.prevent="sendFile"  >
                      <h4>Upload New Movie</h4>
                      
                      <label for="title" >Title</label>
                      <input type="text" id="title" v-model="title" >

                      <label for="genre" >Genre</label>
                      <input type="genre" id="genre" v-model="genre" >

                      <label for="file" class="label">Upload Movie Poster</label>
                      <input type="file" ref="file" @change="selectFile" >
                      

                      <button type="submit">Upload</button>
                    </form>
                </div>   
               
                    
            </center>
            </table>
            



</div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'UploadMovie',
    data(){
      return{
        file: "",
        title: "",
        genre: "",
        selectFile: null
      }
    },
    methods:{
      selectFile(){
        this.file = this.$refs.file.files[0]
      },
      
      async sendFile(){
       /*  const formData = new FormData();
       
        formData.append('file', this.file); */
        try{
       /*    const config ={
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          }


          await axios.post('http://localhost:3000/api/upload',{file: this.file}, config) */
          const config = { headers: { 'Content-Type': 'multipart/form-data' } };
          let formData = new FormData();
          formData.append('image',this.file)
          await axios.post('http://localhost:3000/api/movies', formData, config)

        }catch(err){
          console.log(err);
        }
        
      }
    }
    
}





</script>






<style scoped>
  form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }

@import 'https://kit.fontawesome.com/a15a5a5781.js';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';


/* Style for flexbox */
.flexbox-container{
    display: flex;
}
.flexbox-item{
    
    background-color: white;

}

.flexbox-item-1
{
    width: 500px;
    max-height: 720px;
    font-size: larger;
}

.flexbox-item-2
{
    width: 1920px;
    min-height: 2000px;
}
/* Style for table data */
.table{
    width:100%;
    border-collapse: collapse;
}
.table td, .table th{
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
}
.table th{
    background-color: rgb(122, 122, 233);
    color:#ffff;
    
}

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