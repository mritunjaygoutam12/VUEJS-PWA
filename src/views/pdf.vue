<template lang="html">
	<div>
       <iframe src="http://docs.google.com/gview?url=http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2FownCloud_User_Manual.pdf&embedded=true" 
style="width:1300px; height:900px;" frameborder="0"></iframe>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	meta() {
		return {
			title: "Showcase",
            description: "This is the meta description for the showcase page"
            }
            },
            data: () => {
		return {
			imageLink: ""
		}
    },
    beforeMount(){
	//	this.$router.push({ name: 'showcase',params: { name: '/' }})
    //this.path=this.$route.params.name
    this.imageLink="http://docs.google.com/gview?url=http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2F"+this.$route.params.name+"&embedded=true"
    //this.imagepath()
        console.log(this.imageLink)
        console.log("http://docs.google.com/gview?url=http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2FownCloud_User_Manual.pdf&embedded=true")
		//this.listviewer()
		//this.listnamegen()
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
</style>