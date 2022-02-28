<template>
	<label
		class="uu-radio-button"
		:class="that.size ? `uu-radio-button--${that.size}` : ''"
	>
		<input
			:disabled="judgeDisabled ? that.disabled : disabled"
			type="radio"
			v-model="values"
			class="uu-radio-button__orig-radio"
			:class="{ 'is-checked': values == label }"
			:value="label"
		/>
		<span
			class="uu-radio-button__inner"
			:style="values === label ? activeStyle : null"
		>
			{{ label }}
		</span>
	</label>
</template>

<script>
export default {
	name: "UuUuiUuRadio",

	props: {
		label: {
			type: [String, Boolean, Number],
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
	},
	inject: {
		that: {
			from: "that",
			default: "",
		},
	},
	mounted() {},
	computed: {
		values: {
			get() {
				return this.that.value;
			},
			set(newValue) {
				this.that.$emit("input", newValue);
			},
		},
		judgeDisabled() {
			return this.that.disabled;
		},
		judgeSize() {
			return this.that.size;
		},
		activeStyle() {
			return {
				backgroundColor: this.that.fill || "",
				borderColor: this.that.fill || "",
				boxShadow: this.that.fill ? `-1px 0 0 0 ${this.that.fill}` : "",
				color: this.that.textColor || "",
			};
		},
	},

	methods: {},
};
</script>

<style lang="scss" scoped>
label {
	cursor: default;
}
input {
	cursor: default;
}
.uu-radio-button,
.uu-radio-button__inner {
	position: relative;
	display: inline-block;
	outline: none;
}
.uu-radio-button__orig-radio {
	opacity: 0;
	outline: none;
	position: absolute;
	z-index: -1;
}
// .uu-radio-button__orig-radio.is-checked + .uu-radio-button__inner {
// 	color: #fff;
// 	background-color: #409eff;
// 	border-color: #409eff;
// 	box-shadow: -1px 0 0 0 #409eff;
// }
.uu-radio-button:first-child .uu-radio-button__inner {
	border-left: 1px solid #dcdfe6;
	border-radius: 4px 0 0 4px;
	box-shadow: none !important;
}
.uu-radio-button--medium .uu-radio-button__inner {
	padding: 10px 20px;
	font-size: 14px;
	border-radius: 0;
}
.uu-radio-button__inner {
	line-height: 1;
	white-space: nowrap;
	vertical-align: middle;
	background: #fff;
	border: 1px solid #dcdfe6;
	font-weight: 500;
	border-left: 0;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	margin: 0;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	padding: 12px 20px;
	font-size: 14px;
	border-radius: 0;
}
.uu-radio-button,
.uu-radio-button__inner {
	position: relative;
	display: inline-block;
	outline: none;
}

.uu-radio-button:last-child .uu-radio-button__inner {
	border-radius: 0 4px 4px 0;
}

.uu-radio-button--medium .uu-radio-button__inner {
	padding: 10px 20px;
	font-size: 14px;
	border-radius: 0;
}

.uu-radio-button--small .uu-radio-button__inner {
	padding: 9px 15px;
	font-size: 12px;
	border-radius: 0;
}

.uu-radio-button--mini .uu-radio-button__inner {
	padding: 7px 15px;
	font-size: 12px;
	border-radius: 0;
}

input:disabled {
	cursor: default;
	background-color: -internal-light-dark(
		rgba(239, 239, 239, 0.3),
		rgba(59, 59, 59, 0.3)
	);
	color: -internal-light-dark(rgb(84, 84, 84), rgb(170, 170, 170));
	border-color: rgba(118, 118, 118, 0.3);
}

.uu-radio-button__orig-radio:disabled + .uu-radio-button__inner {
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5;
	box-shadow: none;
}
.uu-radio-button__orig-radio:disabled:checked + .uu-radio-button__inner {
	background-color: #f2f6fc;
}
</style>