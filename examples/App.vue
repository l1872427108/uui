<template>
  <div id="app">
		<!-- <uuButton></uuButton> -->
		<uu-switch></uu-switch>
  </div>
</template>

<script>
// import uuButton from './components/button.vue';
import uuSwitch from './components/switch.vue';
export default {
	name: 'App',
	components: {
		// uuButton,
		uuSwitch
	},
	data() {
		return {
			active: false
		}
	},
	methods: {
		handle(e) {
			console.log(e);
		}
	}
}
</script>

<style>

</style>
