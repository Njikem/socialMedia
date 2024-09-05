<template>
<header>

 
<div id="header-1">

<div>
    
        <h2>SubScribers</h2>
</div>

<div class="rout-1">
<div>
    <router-link to="signup" id="router">
        <h4>signUp</h4>
    </router-link>
</div>

<div>
    <router-link to="login" id="router">
        <h4>Login</h4>
    </router-link>
</div>

</div>


<div id="log">
<div>
    <router-link to="login" id="router">
        <h4>Profile</h4>
    </router-link>
</div>

<div>
    <router-link to="/" id="router">
        <h4>Logout</h4>
    </router-link>
</div>

</div>

</div>



</header>
   
</template>

<script>
    export default {
        name: 'Header-page',
        components: {
          
        }

        
    }
</script>

<style  scoped>

#log{
    display: none;
}

header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: cadetblue;
    overflow-x: hidden;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;

}
#router{
    text-decoration: none;
}

#header-1{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}


.rout-1{
    display: flex;
    box-sizing: border-box;
    gap: 19px;
}

h4{
     color: white;
     font-family: sans-serif;
     font-weight: 500;
}

h1{
    font-family: 'Arial Narrow';
}

</style>