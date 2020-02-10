<template>
  <div>
      Email: <input type="text" v-model="email" /><br>
      userID: <input type="text" v-model="userID" /><br>
      Name: <input type="text" v-model="Name" /><br>
      Password: <input type="password" v-model="password" /><br>
      <button @click="signup"> signup </button>
      {{ error }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            email:'',
            userID:'',
            Name:'',
            password:'',

            error: '',
        }
    },
    methods: {
        signup(){
            let newUser = {
                email: this.email,
                userID: this.userID,
                Name: this.Name,
                password: this.password
            }
            axios.post('http://localhost:3001/user/signup', newUser)
                .then(res => {
                    console.log(res)
                    this.$router.push('/LogIn')
                }, err => {
                    console.log(err.response)
                    this.error = err.response.data.error
                })
        }

    }
}
</script>

<style>

</style>