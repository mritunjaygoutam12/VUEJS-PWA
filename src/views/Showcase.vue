<template lang="html">
<div>
	<div style="background:white;" class="listbox" v-for="(item, index) in list" 
	v-on:click="forward(index)">
	   <div style="display: inline-block;"><i class="material-icons"
	    style="font-size:48px;color:#2c3e50;">folder_open</i></div>
	   <div class="aficon"><h5>{{item.name}}</h5></div>
	   
		<hr>
	</div>
	<div id="down">
	<div id="dow" v-for="(n,index) in list" ><a v-bind:href="part[index]" target="_self">
		<i class="material-icons">file_download</i></a></div>
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
	left: 80%;
}

.listbox {
	position: relative;
	left: 20%;
	width: 50%;
}

#down {
	position: absolute;
	left: 68%;
	top: 14%;
	width: 8.7%;
	height: 8.8%;
}

#dow {
	width: 100%;
	height: 100%;
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
			list:[],
			part:[]
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
	 this.part=[]
	 let inde=0,e=this.list.length
	 for(inde=0;inde<e;inde++){
	 }
	 this.download(0,e)
		}).catch(error =>{console.log(error)})
		
	},
	 forward(index){
		//var r=this.list[index].getname()
		//console.log(r,"luucky")
       if(this.list[index].type==='dir'){
       this.path=this.list[index].name
			//this.listviewer()
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
		//console.log(this.list[index].name,"just",u.slice(u.length-4,u.length))
	  axios.post('/brodownload',{path:this.list[index].name,name:u}).then(response=>{
	console.log(response.data,u,"see ity")
	u=response.data
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
 load(){
	 return "ret"
 },
   download(index,size){
	if(index<size){
	
	 if(this.list[index].type==='dir'){
		 console.log("inside dirrr",this.list[index].type)
         axios.post('/download',{path:this.list[index].name}).then(response=>{
	console.log(response.data,"it is download dir",index)
	 this.part.push(response.data)
	 index=index+1
       this.download(index,size)
	})
	   }
	   else{
		let u=this.list[index].name.slice(0,this.list[index].name.length)
				let g,m=0;
		for(g=0;g<u.length;g++){
         if(u[g]==='/'){m=g}
		}
		u=u.slice(m+1,u.length)
		let p=u.slice(u.length-4,u.length)
		console.log(this.list[index].name,"just file",u.slice(u.length-4,u.length))
	   axios.post('/brodownload',{path:this.list[index].name,name:u}).then(response=>{
	console.log(response.data,u,"it is download file",index)
	this.part.push(response.data)
		 index=index+1

	 this.download(index++,size)
	
	})
	 
	   }
	   return 0
	   console.log(this.part,"derto")
  }
	}
	},
	beforeMount(){
	//	this.$router.push({ name: 'showcase',params: { name: '/' }})
	this.path=this.$route.params.name
		console.log(this.$route.params.name,"before")
		this.listviewer()
		//this.download()
		console.log(this.list,"why not")
		//this.listnamegen()
	},
	watch: {
    '$route' (to, from) {
			this.path=this.$route.params.name
			//console.log(this.path,"watch",this.path[this.path.length-1])
		this.listviewer()
		//this.download()
		console.log(this.part,"whyit")
	  //this.listnamegen()
    }
  }
	}
</script>
