<template>
    <div>

       <div v-for="(post, i) in post" :key="i">


           
       </div>


        <div>
            <div>
               <textarea v-model="content" placeholder="Content*"></textarea>
            </div>

            <button @click="usersPost">Post</button>       
         </div>
               
            
        

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'make-post',
        components: {

        },

        data() {
            return {
                post: [],
                userid: '',
                content: '',
                image_url: ''
                
                
            }
        },


        methods: {
            usersPost() {
                axios.request({
                    method: "POST",
                    url: 'http://127.0.0.1:5000//api/post',

                    data: {
                        user_id: this.user_id,
                        content: this.content,
                        image_url: this.image_url,
                        
                    }

                })
                .then(this.success)
                .catch(this.failure)
                
            },


            success: function(response){
                console.log(response)
                if(response.status ===200){
                    this.post = response.data
                }
            },

            failure: function(error){
                console.log(error)
                alert('The post was not successful')
            }


        },
    }
</script>

<style  scoped>



</style>