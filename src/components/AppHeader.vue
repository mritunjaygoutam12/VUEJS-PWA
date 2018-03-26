<template lang="pug">
	header.AppHeader
			
			div.AppHeader__name
				h3.AppHeader__title Nextcloud
				
</template>

<style lang="scss">
.AppHeader {
	padding: 0.7%;
	font-size: 1.5rem;
	background-color: #35495e;

	&__link {
		color: black;
	}

	&__logo {
		vertical-align: middle;
		width: 2.5rem;
		margin-right: 0.5rem;
	}

	&__name,
	&__subtitle {
		display: inline-block;
	}

	&__name {
		vertical-align: middle;
		margin-right: 0.5rem;
	}

	&__title {
		margin-right: 0.5rem;
		color: white;
	}
}
</style>

<script>
export default {
	name: "AppHeader"
}
</script>
