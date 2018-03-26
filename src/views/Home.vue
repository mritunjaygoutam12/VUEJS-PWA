<template lang="html">
	<div>
      <h1 style="text-align:center;color:#2c3e50">Welcome to Nextcloud</h1>
      <div id="login">
        <h1 style="text-align:center;color:white;">Login</h1>
        <div id="foram"><label style="color:white">Username
        <input class="text" type="text"  placeholder="Username" autocomplete="new-password"
         v-model="user"></label><br><br>
<label style="color:white">Password
		 <input type="password" placeholder="Password"
                autocomplete="new-password" v-model="password"></label>
								
                </div>
                <div id="but" v-on:click="logincheck"><h2 style="color:white;margin:5px;">Submit</h2></div>
								<div id="wrong" v-bind:style="{display:none}"><p style="color:red;">Wrong credentials</p></div>
		 </div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'hello',
  data () {
    return {
      user:"",
      password:"",
			none:"none"
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
		else{
			this.none="block"
		}
	})
}
	},
	beforeMount(){
		//this.redirect()
		if(localStorage.getItem('test')==="loged")
		{this.$router.push({ name: 'showcase',params: { name: '/' }})}
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
	box-shadow: 5px 5px 5px grey;
}

input {
	width: 70%;
	height: 45px;
	background-color: white;
	border-radius: 5%;
}

#foram {
	position: relative;
	left: 3%;
	top: 15%;
}

#but {
	position: absolute;
	top: 110%;
	left: 40%;
	background-color: #2c3e50;
	border-radius: 5%;
}

#wrong {
	position: absolute;
	top: 130%;
	left: 33%;
}
</style>
