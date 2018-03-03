<template lang="html">
<div>
	<div style="background:#f5f5f5;" class="listbox" v-for="(item, index) in list" 
	v-on:click="forward(index)">
	   <div style="display: inline-block;"><i class="material-icons"
	    style="font-size:48px;color:#2c3e50;">cloud_upload</i></div>
	   <div class="aficon"><h6>{{item.name}}</h6></div>
	   <div style="display: inline-block;" class="downicon" v-on:click="download(index)">
		   <a href='http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2FSquirrel.jpg' target='_self'> <i class="material-icons"
	    style="font-size:48px;color:#2c3e50;">cloud_download</i></a></div>
		<hr>
	</div>
</div>
</template>

<style lang="css" scoped>
.aficon {
	display: inline-block;
	margin-left: 30px;
	position: relative;
	bottom: 20px;
}

.downicon {
	position: absolute;
	left: 90%;
}

.listbox {
	position: relative;
	left: 20%;
	width: 60%;
}
</style>

<script>
import axios from 'axios'
export default {
	name: "Showcase",
	data: () => {
		return {
			counter: 0,
			path:'/',
			prelist:[],
			list:[]
		}
	},
	computed: {

	},
	meta() {
		return {
			title: "Showcase",
			description: "This is the meta description for the showcase page"
		}
	},
	methods:{
  listviewer(){
		axios.post('/list',{path:this.path}).then(response =>{
			this.prelist[0]=response.data
			this.list=[]
			var i;
			for(i=1;i<this.prelist[0].length;i++){
this.list.push(this.prelist[0][i])
     }
     this.prelist=[]
	 console.log(response.data,this.list,"see")
		}).catch(error =>{console.log(error)})
	},
	forward:function(index){
		//var r=this.list[index].getname()
		//console.log(r,"luucky")
       if(this.list[index].type==='dir'){
       this.path=this.list[index].name
			this.listviewer()
			this.$router.push({ name: 'showcase', params: { name: this.path }})
       }
       else{
		let u=this.list[index].name.slice(0,this.list[index].name.length)
				let g,m=0;
		for(g=0;g<u.length;g++){
         if(u[g]==='/'){m=g}
		}
		u=u.slice(m+1,u.length)
		let p=u.slice(u.length-4,u.length)
		console.log(this.list[index].name,"just",u.slice(u.length-4,u.length))
	 axios.post('/brodownload',{path:this.list[index].name,name:u}).then(response=>{
	console.log(response.data,u)
	if(p===('.jpg'||'.png'||'.svg')){
	this.$router.push({ name: 'img', params: { name: u}})
	}
	else if(p==='.pdf'){
		this.$router.push({ name: 'pdf', params: { name: u}})
	}
	else if(p===('.mp4'||'.mp3')){
		this.$router.push({ name: 'vedio', params: { name: u}})
	}
	})
	 
	   }
        
 },
 download(index){
	 if(this.list[index].type==='dir'){
       
	   }
	   else{
		let u=this.list[index].name.slice(0,this.list[index].name.length)
				let g,m=0;
		for(g=0;g<u.length;g++){
         if(u[g]==='/'){m=g}
		}
		u=u.slice(m+1,u.length)
		let p=u.slice(u.length-4,u.length)
		console.log(this.list[index].name,"just",u.slice(u.length-4,u.length))
	 axios.post('/brodownload',{path:this.list[index].name,name:u}).then(response=>{
	console.log(response.data,u)
	let r="http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2F"+this.$route.params.name
	//window.open(r,'_blank')
	setTimeout(() => window.open('http://google.com'), 2000);
	})
	 
	   }
 }
	},
	beforeMount(){
	//	this.$router.push({ name: 'showcase',params: { name: '/' }})
	this.path=this.$route.params.name
		console.log(this.$route.params.name,"before")
		this.listviewer()
		//this.listnamegen()
	},
	watch: {
    '$route' (to, from) {
			this.path=this.$route.params.name
			//console.log(this.path,"watch",this.path[this.path.length-1])
		this.listviewer()
	  //this.listnamegen()
    }
  }
	}
</script>
