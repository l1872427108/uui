<template>
	<div>
		<uu-switch v-model="active1"></uu-switch>
		<div style="marginBottom: 30px;"></div>
		<uu-switch v-model="active2" active-color="#13ce66" inactive-color="#ff4949"></uu-switch>
		<div style="marginBottom: 30px;"></div>
		<uu-switch v-model="active3" active-text="按月付费" inactive-text="按年付费" active-color="#13ce66" inactive-color="#ff4949"></uu-switch>
		<div style="marginBottom: 30px;"></div>
		<uu-switch v-model="active4" @change="handleChange" ></uu-switch>
	</div>
</template>

<script>
import uuSwitch from './uu-switch.vue';
export default {
	components: {
		uuSwitch
	},
	data() {
		return {
			active1: false,
			active2: true,
			active3: false,
			active4: false,
		}
	},
	methods: {
		handleChange(val) {
			alert(val.toString());
		}
	}
}
</script>

<style>

</style>
