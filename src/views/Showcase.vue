<template lang="html">
<div>
	<div id="log" v-on:click="logout"><h2 style="color:white;">logout</h2></div>
<div style="margin-bottom:13px;" class="listbox">
	   <div style="display: inline-block;">
		   <svg fill="#2c3e50" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
	   </div>
	   <div class="aficon" style="display: inline-block;"><h4>{{topname}}</h4></div>
	   <div style="display: inline-block; position:relative;left:10%"><label><svg fill="#2c3e50" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
</svg>
        <input type="file" id="files" name="sampleFile" ref="files" multiple 
        v-on:change="handleFilesUpload()" style="display: none;"/>
      </label></div>
	</div>

	<div style="background:white;" class="listbox" v-for="(item, index) in list" 
	v-on:click="forward(index)">
	   <div style="display: inline-block;"><div v-if="item.type==='dir'"><svg xmlns="http://www.w3.org/2000/svg" 
	   style="fill:#d1d1e0;
	   stroke:blue;stroke-width:0;fill-rule:nonzero;" width="48" height="48" 
	   viewBox="0 0 48 48">
    <path d="M20 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4H24l-4-4z"/>
    <path d="M0 0h48v48H0z" fill="none"/>
</svg></div><div v-if="item.type==='file'">
<svg fill="#000000" height="48" style="fill:#d1d1e0;
	   stroke:blue;stroke-width:0;fill-rule:nonzero;" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg></div>
</div>
	   <div class="aficon"><pre style="font-size:17px;">{{item.name}}</pre></div>
	   
		<hr>
	</div>
	<div id="down">
	<div class="dow" v-for="(n,index) in list" ><a v-bind:href="part[index]" target="_self">
		<img src="../../static/down.png" alt="down"/></a></div>
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
	top: 22%;
	width: 8.7%;
	height: 8.8%;
}

.dow {
	width: 100%;
	height: 100%;
}

#log {
	position: absolute;
	left: 80%;
	top: 15px;
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
			part:[],
			topname:""
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
			this.topname=response.data[0].name
			this.list=[]
			var i;
			for(i=1;i<this.prelist[0].length;i++){
this.list.push(this.prelist[0][i])
     }
     this.prelist=[]
	 console.log(this.list,"seeha")
	 if(this.list[0]==='l'){this.$router.push({ name: '/'})}
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
 

 handleFilesUpload(){
        console.log("hahahah")
        this.files = this.$refs.files.files;
        this.submitFiles()
      },

      submitFiles(){
       console.log("innnnNNNn")
        let formData = new FormData();

      
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

					formData.append('files[' + i + ']', file,this.files[0].name);
					formData.append('file',this.files[0].name);
                    formData.append('remote',this.topname);
        }
console.log("innnnNNNn",formData,this.files[0].name)
axios.post('/upload',formData).then(rese=>{console.log(rese)})
      },

   download(index,size){
	if(index<size){
	
	 if(this.list[index].type==='dir'){
		 console.log("inside dirrr",this.list[index].type)
         axios.post('/download',{path:this.list[index].name}).then(response=>{
	console.log(response.data,"it is download dir",index)
	response.data=response.data+"/download"
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
	},
	logout(){
		localStorage.setItem('test',null)
		this.$router.push({ name: '/'})
	}
	},
	beforeMount(){
	//	this.$router.push({ name: 'showcase',params: { name: '/' }})
	console.log(localStorage.getItem('test'))
	if(localStorage.getItem('test')!=='loged'){
		console.log("singh")
this.$router.push({ name: '/'})

	}
	this.path=this.$route.params.name
		console.log(this.$route.params.name,"before")
		this.listviewer()
		//this.download()
		console.log(this.list,"why not")
		//this.listnamegen()
	},
	watch: {
    '$route' (to, from) {
		if(localStorage.getItem('test')!=="loged"){
this.$router.push({ name: '/'})

	}
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
