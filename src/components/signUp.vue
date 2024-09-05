<template>
    <div id="image">
        <div id="line">
     <h2>Sign Up Page</h2>
     </div>

        <div class="input-1" >
            <div>
                <input v-model="profile_picture" placeholder="Profile_picture*"/>
            </div>
            <div>
                <input v-model="username" placeholder="Username*"/>
            </div>
            <div>
                <input v-model="email" placeholder="Email*"/>
            </div>
            <div>
                <input v-model="password" placeholder="Password"/>
            </div>

            <button @click="signUp">Register</button>
           
        </div>

        

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'signUp',
        components: {
            
        },

        data() {
            return {
                username: '',
                email: '',
                password: '',
                profile_picture: '',
                token: '',
                usersid: ''
                
                
            }
        },


    methods: {
        signUp() {
            console.log('signUp', this.username, this.email, this.password, this.profile_picture)
            axios.request({
               method: "POST",
               url: 'http://127.0.0.1:5000/api/usersignUp',

                data: {
                  username: this.username,
                  email: this.email,
                  password: this.password,
                  profile_picture: this.profile_picture
            },
            })
            .then(this.success)
            .catch(this.failure)  
        },
     
     success: function(response){
        console.log(response)
        if(response.status ===200){
            this.token = response.status.token
            this.usersid = response.status.user_id
            cookies.set('TOKEN', this.token)
            cookies.set('USERID', this.usersid)
            this.$router.push('/login')
            
        }
     },

     failure: function(error){
        console.log(error)
     }


    },

    }
</script>

<style scoped>

.input-1{
    padding: 9px;
    box-shadow: 12px 20x 3px green;
}

input{
    padding: 15px 30px 15px 9px;
    margin: 9px;
    
}

button{
    box-sizing: border-box;
    padding: 13px 18px 13px 18px;
    border: none;
    background-color: cadetblue;
    color: white;
    font-weight: bolder;
    letter-spacing: 0.1px;
     margin-right: 110px;
     margin-top: 15px;
}

h2{
  box-sizing: border-box;
   margin-right: 60px;
 font-family: 'sans-serif';

 
}

#line{
    width: 60%;
   border: none;
   border-bottom: 1px solid #333;
   margin: 20px auto; 
  
}


body{
   background-image: url("@/assets/computer.jpg");
   background: cover;
   background-size: cover;
   background-repeat: no-repeat;
 
}

@media only screen and (min-width: 768px){


   input{
    padding: 15px 90px 15px 9px;
    margin: 9px;
    
}


.input-1{
    margin-top: 25px;
}


button{
         margin-right: 170px;
}


#line{
    width: 40%;
}


}

</style>