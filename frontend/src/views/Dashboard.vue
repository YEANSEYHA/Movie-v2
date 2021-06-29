<template>
    <div class="flexbox-container">
        <div class="flexbox-item flexbox-item-1">
            <router-link to="/dashboard/listmovies">
             <button style="width:100%; height:50px;">Movies</button>
            </router-link>

            <br>
            <router-link to="/dashboard/listusers">
             <button style="width:100%; height:50px;">Users</button>
            </router-link>

            <br>
            <router-link to="/dashboard/uploadmovie">
             <button style="width:100%; height:50px;">UploadMovie</button>
            </router-link>
            
        </div>
        <router-view></router-view>       
    </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
@import 'https://kit.fontawesome.com/a15a5a5781.js';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
}

.brand-title {
    font-size: 1.5rem;
    margin: .5rem;
}

.navbar-links {
    height: 100%;
}

.navbar-links .search-container {
    float: right;
}
.navbar-links input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }

.navbar-links .search-container button{
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.navbar-links .search-container button:hover{
    background: #ccc;
}
  

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}



.navbar-links li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 1rem;
}

.navbar-links li:hover {
    background-color: #555;
}

.toggle-button {
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
    }

    .navbar-links {
        display: none;
        width: 100%;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links ul li {
        text-align: center;
    }

    .navbar-links ul li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }
}
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
</style>