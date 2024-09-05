<template>
    <div>

        <div id="line">
     <h2>Log In Page</h2>
     </div>

        <div class="input-1" >
             
            <div>
                <input v-model="username" placeholder="Username*"/>
            </div>
           
            <div>
                <input v-model="password" placeholder="Password*"/>
            </div>

            <button @click="logIn">Login</button>

            <div class="pass">
                <router-link to="/forgetPassword" id="router">
                     <h4>Forget Password?</h4>
                </router-link>
            </div>

            <div class="sign">
                <router-link to="/signup" id="router"> 

                <button id="buton-1">Create New Account</button>

                </router-link>
            </div>
           
        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'logIn',
        components: {
            
        },
        
        data() {
            return {
                username: '',
                password: '',
                token: '',
                userid: ''
            }
        },

        
        methods: {
            logIn(){
                axios.request({
                    method: "POST",
                    url:'http://127.0.0.1:5000/api/user_login',

                    data: {
                        username: this.username,
                        password: this.password

                    }
                })
                .then(this.success)
                .catch(this.failure)
            },

            success: function(response){
                console.log(response)
                if(response.status === 200){
                    this.token = response.data.token
                    this.userid = response.data.users_id
                    cookies.set('TOKEN', this.token)
                     cookies.set('USERID', this.userid)
                     this.$router.push("/post")

                }
            },

            failure: function(error){
                console.log(error)
                alert('Login is Fail, Please try again.')
                
                
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
    padding: 13px 85px 13px 85px;
    border: none;
    background-color: cadetblue;
    color: white;
    font-weight: bolder;
    letter-spacing: 0.1px;
     margin-top: 15px;
}

#router{
    text-decoration: none;    
}

.pass{
    margin-top: 30px;
}

.sign{
    margin-top: 35px;
   
}


h4{
  box-sizing: border-box;
 font-family: 'sans-serif';
 text-align: center;
 font-weight: 100;
 
}

#buton-1{
    box-sizing: border-box;
 font-family: 'sans-serif';
 text-align: center;
 font-weight: bolder;
 background-color: coral;
 padding: 13px 40px 13px 40px;

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

button{
     padding: 13px 115px 13px 115px;
}


.input-1{
    margin-top: 25px;
}




#line{
    width: 40%;
}


}

</style>