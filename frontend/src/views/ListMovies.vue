<template>
 <div class="flexbox-item flexbox-item-2">
            <table class="table">
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Action</th>
                </thead>
                
                <tbody v-for="data in datas" :key="data">
                    <tr>
                        <td data-label="ID">1</td>
                        <td data-label="Title">{{data.title}}</td>
                        <td data-label="Genre">{{data.image}}</td>
                        <td data-label="Rating">4 <i class="fas fa-star"></i></td>
                        <td data-label="Action">
                            <i class="fas fa-edit"></i>
                            &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            



        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ListMovies',
    data(){
        return{
            datas:[],
            movie:'',
        }
    },
    async mounted(){
        
       var response = await axios.get("http://localhost:3000/api/movies")
       this.datas = response.data
    }
}

</script>

<style scoped>
@import 'https://kit.fontawesome.com/a15a5a5781.js';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';


/* Style for table data */
.table{
    width:100%;
    border-collapse: collapse;
}
.table td, .table th{
    color: red;
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
}
.table th{
    background-color: rgb(122, 122, 233);
    color:#ffff;
    
}
</style>