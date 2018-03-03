<template lang="html">
	<div>
      <video style="height: 100%;width: 100%;background-color:black;" name="media" controls="controls">
         <!-- autoplay -->
         <source v-bind:src="imageLink" type="video/mp4">
         <source v-bind:src="imageLink" type="video/ogg">
      </video>
   </div>
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
    this.imageLink="http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2F"+this.$route.params.name
    //this.imagepath()
		console.log(this.$route.params.name,"before",this.imageLink)
		//this.listviewer()
		//this.listnamegen()
    }
}
</script>
<style lang="css">

</style>
