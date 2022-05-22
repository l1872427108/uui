<template>
	<label
		class="uu-radio"
		:class="[
			{ 'is-bordered': border, 'is-checked': values == label },
			(judgeSizes && border) ? `uu-radio--${judegSize ? that.size : size}` : '',
		]"
	>
		<span
			class="uu-radio__input"
			:class="{ 'is-checked': values == label, 'is-disabled': disabled }"
		>
			<span class="uu-radio__inner"></span>
			<input
				:disabled="disabled"
				ref="input"
				class="uu-radio__original"
				type="radio"
				v-model="values"
				:value="label"
			/>
		</span>
		<span class="uu-radio__label">
			<slot></slot>
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
		value: {
			type: [String, Boolean, Number],
			default: false,
		},
		name: {
			type: String,
			default: "",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		border: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: "",
		},
	},
	inject: {
		that: {
			from: "that",
			default: "",
		},
	},
	data() {
		return {};
	},
	computed: {
		values: {
			get() {
				return this.judgeValue ? this.that.value : this.value;
			},
			set(newValue) {
				this.judgeValue
					? this.that.$emit("input", newValue) &&
					  this.that.$emit("change", newValue)
					: this.$emit("input", newValue) && this.$emit("change", newValue);
			},
		},
		judgeValue() {
			return !!this.that.value;
		},
		judegSize() {
			return !!this.that.size;
		},
		judgeSizes() {
			return !!!(this.size && this.that.size);
		},
	},

	mounted() {
		console.log(this.disabled);
	},

	methods: {},
};
</script>

<style lang="scss" scoped>
.uu-radio {
	color: #606266;
	font-weight: 500;
	line-height: 1;
	position: relative;
	cursor: pointer;
	display: inline-block;
	white-space: nowrap;
	outline: none;
	font-size: 14px;
	margin-right: 30px;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}
.uu-radio__input {
	white-space: nowrap;
	cursor: pointer;
	outline: none;
	display: inline-block;
	line-height: 1;
	position: relative;
	vertical-align: middle;
}
.uu-radio__inner {
	border: 1px solid #dcdfe6;
	border-radius: 100%;
	width: 14px;
	height: 14px;
	background-color: #fff;
	position: relative;
	cursor: pointer;
	display: inline-block;
	box-sizing: border-box;
}
.uu-radio__inner:after {
	width: 4px;
	height: 4px;
	border-radius: 100%;
	background-color: #fff;
	content: "";
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) scale(0);
	transition: transform 0.15s ease-in;
}
.uu-radio__input.is-checked .uu-radio__inner:after {
	transform: translate(-50%, -50%) scale(1);
}
.uu-radio__input.is-checked .uu-radio__inner {
	border-color: #409eff;
	background: #409eff;
}
.uu-radio__original {
	opacity: 0;
	outline: none;
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
}
.uu-radio__label {
	font-size: 14px;
	padding-left: 10px;
}
.uu-radio__input.is-checked + .uu-radio__label {
	color: #409eff;
}

.uu-radio__input.is-disabled .uu-radio__inner {
	background-color: #f5f7fa;
	border-color: #e4e7ed;
	cursor: not-allowed;
}

.uu-radio__input.is-disabled + span.uu-radio__label {
	color: #c0c4cc;
	cursor: not-allowed;
}
.uu-radio__input.is-disabled.is-checked .uu-radio__inner:after {
	background-color: #c0c4cc;
}

.uu-radio.is-bordered {
	padding: 12px 20px 0 10px;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	height: 40px;
}

.uu-radio.is-bordered.is-checked {
	border-color: #409eff;
}

.uu-radio--medium.is-bordered {
	padding: 10px 20px 0 10px;
	border-radius: 4px;
	height: 36px;
}
.uu-radio--small.is-bordered {
	padding: 8px 15px 0 10px;
	border-radius: 3px;
	height: 32px;
}

.uu-radio--mini.is-bordered {
	padding: 6px 15px 0 10px;
	border-radius: 3px;
	height: 28px;
}

.uu-radio--mini.is-bordered .uu-radio__label {
	font-size: 12px;
}
.uu-radio--mini.is-bordered .uu-radio__inner {
	height: 12px;
	width: 12px;
}

.uu-radio--small.is-bordered .uu-radio__label {
	font-size: 12px;
}
.uu-radio--small.is-bordered .uu-radio__inner {
	height: 12px;
	width: 12px;
}

.uu-radio--medium.is-bordered .uu-radio__label {
	font-size: 14px;
}
.uu-radio--medium.is-bordered .uu-radio__inner {
	height: 14px;
	width: 14px;
}
</style>