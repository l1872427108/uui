<template >
	<div>
		<div class="uu-radio-group">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "UuUuiUuRadioGroup",
	props: {
		value: {
			type: [String, Boolean, Number],
			default: false,
		},
		size: {
			type: String,
			default: "",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		textColor:{
            type:String,
			default:"#ffffff"
		},
		fill:{
			type:String,
			default:'#409EFF'
		}
	},
	provide() {
		return {
			that: this,
		};
	},
	data() {
		return {};
	},
	mounted() {},

	methods: {},
};
</script>

<style lang="scss" scoped>
.uu-radio-group {
	display: inline-block;
	line-height: 1;
	vertical-align: middle;
	font-size: 0;
}
</style>