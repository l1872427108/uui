<template>
	<div v-show="visible"  class="uu-dialog">
		<div :style="{width,height}" class="uu-dialog-visible">
             <p class="uui-icon-close"></p>
             
        </div>
	</div>
</template>

<script>
export default {
	name: "UuUuiUuDialog",
	props: {
		visible: {
			type: Boolean,
			default: true,
		},
        width: {
            type:String,
            default:'38.25rem'
        },
         height: {
            type:String,
            default:'15.5rem'
        }
	},
	data() {
		return {};
	},

	mounted() {},

	methods: {},
};
</script>

<style lang="scss" scoped>
.uu-dialog {
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgba(128, 128, 128, 0.2);
}
.uu-dialog-visible{
    background-color: white;
    margin: auto;
    margin-top: 50%;
    
}
</style>