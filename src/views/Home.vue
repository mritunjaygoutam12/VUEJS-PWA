<template lang="html">
	<div>
      <h1 style="text-align:center;color:#2c3e50">Welcome to Cernbox</h1>
      <div id="login">
        <h1 style="text-align:center;color:white;">Login</h1>
        <div id="foram">
        <input class="text" type="text"  placeholder="Username" autocomplete="new-password"
         v-model="user"><br><br>
		 <input class="text"type="password" placeholder="Password"
                autocomplete="new-password" v-model="password">
                </div>
                <button id="but" v-on:click="logincheck"><h2>Submit</h2></button>
		 </div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'hello',
  data () {
    return {
      user:"mohit",
      password:"beauty@1"
    }
  },
  meta () {
    return {
      title:"cerbox",
      description:"cerbox"
    }
  },

  methods: {
logincheck(){
	console.log("lallan")
	axios.post('/login',{user:this.user,pass:this.password}).then(response => {
		console.log(response.data)
		localStorage.setItem('test',response.data)
    if(localStorage.getItem('test')==="loged"){
			this.$router.push({ name: 'showcase',params: { name: '/' }})
		}
	})
}
	},
	beforeMount(){
		//this.redirect()
		//if(localStorage.getItem('test')==="loged")
		//{this.$router.push({ name: 'showcase',params: { name: '/mohit' }})}
 }
}
</script>
<style lang="css">
#login {
	width: 30%;
	height: 45%;
	background-color: #2c3e50;
	position: absolute;
	top: 20%;
	left: 35%;
	border-radius: 5%;
}

input {
	width: 70%;
	height: 45px;
	background-color: white;
	border-radius: 5%;
}

#foram {
	position: relative;
	left: 15%;
	top: 15%;
}

#but {
	position: absolute;
	top: 110%;
	left: 40%;
	background-color: #2c3e50;
}
</style>
