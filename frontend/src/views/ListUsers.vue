<template>
        <div class="flexbox-item flexbox-item-2">
            <table class="table">
                <thead>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody v-for="data in datas" :key="data">
                    <tr>
                        <td data-label="Username">{{data.name}}</td>
                        <td data-label="Email">{{data.email}}</td>
                        <td data-label="Action">
                            <button ><i class="fas fa-edit m-2"></i></button>
                            <!-- &nbsp;&nbsp;&nbsp; -->
                            <button @click="deleteUser(data._id)"><i class="fas fa-trash m-2"></i></button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ListUsers',
    data(){
        return{
            datas:[],
            user:'',
        }
    },
    async mounted(){
        
       var response = await axios.get("http://localhost:3000/api/users")

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
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
}
.table th{
    background-color: rgb(71, 71, 117);
    color:#ffff;
    
}
</style>