<template>
  <div id="app">
		<!-- <uuButton></uuButton> -->
		<!-- <uu-switch></uu-switch> -->
		<uu-link></uu-link>
  </div>
</template>

<script>
// import uuButton from './components/button.vue';
// import uuSwitch from './components/switch.vue';
import uuLink from './components/link.vue';
export default {
	name: 'App',
	components: {
		// uuButton,
		// uuSwitch,
		uuLink
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
