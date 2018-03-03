<template lang="html">
	<div>
     <div style=" height: 100%;background-color:black;">
      
      <div style="width: 100%; /*overflow: auto;*/ position: relative;height: auto; margin-top: 30px;">
       
         <div style="/* overflow: scroll; */ max-height: 500; float: left;background-color:black;">
            <img  v-bind:src="imageLink" title="Google" 
            style="-webkit-user-select: none;background-position: 0px 0px, 10px 10px;background-size:
             20px 20px;background-image:linear-gradient(45deg, #eee 25%, transparent 25%, 
             transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, 
             white 75%, #eee 75%, #eee 100%);cursor: zoom-in;background-color:black;" />
            
            </p>
         </div>
      </div>
     
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
    },
    computed: {
  now: function () {
      this.imageLink="http://storage.googleapis.com/comment-c7d54.appspot.com/subfolder%2F"+this.$route.params.name
      console.log("computed")
      return this.imageLink
  }
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