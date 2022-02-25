<template>
  <div id="app">
		<!-- <uuButton></uuButton> -->
		<!-- <uu-switch></uu-switch> -->
		<!-- <uu-link></uu-link> -->
		<uu-dialog></uu-dialog>
  </div>
</template>

<script>
// import uuButton from './components/uu-button.vue';
// import uuSwitch from './components/switch.vue';
// import uuLink from './components/link.vue';
// import uuDialog from './components/uu-dialog.vue';
import uuDialog from './components/dialog.vue';
export default {
	name: 'App',
	components: {
		// uuButton,
		// uuSwitch,
		// uuLink,
		uuDialog
	},
	data() {
		return {
			active: false
		}
	},
	methods: {
		
	}
}
</script>

<style>

</style>
