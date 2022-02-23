<template>
	<div class="uu-switch" :class="{'is-checked': value}" @click="handleClick">
		<input :name="name" ref="input" class="uu-switch-input" type="checkbox">
		<span v-if="inactiveText" :class="{'is-active': !value}" class="uu-switch-label uu-switch-label-left">
			<span>{{ inactiveText }}</span>
		</span>
		<span ref="core" class="uu-switch-core">
			<span class="uu-switch-button"></span>
		</span>
		<span v-if="activeText" :class="{'is-active': value}" class="uu-switch-label uu-switch-label-right">
			<span class="">{{ activeText }}</span>
		</span>
	</div>
</template>

<script>
export default {
	name: 'uuSwitch',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		// v-model 绑定值
		value: {
			type: Boolean,
			default: false
		},
		// switch 打开时的背景色
		activeColor: {
			type: String,
			default: ''
		},
		// switch 关闭时的背景色
		inactiveColor: {
			type: String,
			default: ''
		},
		// 打开时文字
		activeText: {
			type: String,
			default: ''
		},
		// 关闭时的文字
		inactiveText: {
			type: String,
			default: ''
		},
		// switch 对应的 name 属性
		name: {
			type: String,
			default: ''
		}
	},
	mounted() {
		// 设置激活的背景颜色
		this.setColor();
		// 同步 input 的 checked 值
		this.$refs.input.checked = this.value;
	},
	methods: {
		handleClick() {
			// 触发出去 change 事件
			this.$emit('change', !this.value);
			// 注意：父组件的 value 值修改并为立即传入子组件. 利用 nextTick 等待 DOM 更新
			this.$nextTick(() => {
				// 重新修改激活颜色
				this.setColor();
				// 同步 input 的 checked 值
				this.$refs.input.checked = this.value;
			})

		},
		setColor() {
			// 判断是否有传入激活颜色
			if (this.activeColor || this.inactiveColor) {
				let color = this.value ? this.activeColor : this.inactiveColor;
				this.$refs.core.style.borderColor = color;
				this.$refs.core.style.backgroundColor = color;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.uu-switch {
	display: inline-block;
	align-items: center;
	position: relative;
	font-size: 14px;
	line-height: 20px;
	height: 20px;
	vertical-align: middle;
	.uu-switch-input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
		margin: 0;
	}
	.uu-switch-label {
		transition: .2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
	}
	.uu-switch-label-left {
		margin-right: 10px;
	}
	.uu-switch-label-right {
		margin-left: 10px;
	}
	.uu-switch-core {
		margin: 0;
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 10px;
		box-sizing: border-box;
		background: #dcdfe6;
		cursor: pointer;
		transition: border-color .3s, background-color .3s;
		vertical-align: middle;
		.uu-switch-button {
			position: absolute;
			top: 1px;
			left: 1px;
			border-radius: 100%;
			transition: all .3s;
			width: 16px;
			height: 16px;
			background-color: #fff;
		}
	}
}

.uu-switch.is-checked {
	.uu-switch-core {
		border-color: #409eff;
		background-color: #409eff;
		.uu-switch-button {
			transform: translateX(20px);
		}
	}
}

.uu-switch {
	.is-active {
		color: #409eff;
	}
}


</style>
