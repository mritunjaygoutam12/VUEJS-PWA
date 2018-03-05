<template lang="html">
	<div>
       <iframe v-bind:src="imageLink"  
style="width:100%; height:900px;" frameborder="0"></iframe>
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
    this.imageLink="http://docs.google.com/gview?url="+this.$route.params.name+"&embedded=true"
    //this.imagepath()
        console.log(this.imageLink)
        console.log("http://docs.google.com/gview?url=http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2FownCloud_User_Manual.pdf&embedded=true")
		//this.listviewer()
		//this.listnamegen()
    }
}
</script>
<style lang="css">
</style>
