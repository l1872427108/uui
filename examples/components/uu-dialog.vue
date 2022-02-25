<template>
<!-- 动画层 -->
	<transition name="uu-dialog">
		<!-- 遮罩层 -->
		<div class="uu-dialog-wrapper" v-show="visible"  @click.self="handleClose">
				<div class="uu-dialog" :class="{'uu-dialog-enter': center}" :style="{width: width, marginTop: top}">
					<div class="uu-dialog-header">
						<!-- 标题插槽 -->
						<slot name="title">
							<span class="uu-dialog-title">{{ title }}</span>
						</slot>
						<button class="uu-dialog-btn" @click="handleClose">
							<i class="uui-icon-close"></i>
						</button>
					</div>
					<div class="uu-dialog-main">
						<!-- 默认插槽 -->
						<slot></slot>
					</div>
					<div class="uu-dialog-footer" v-if="$slots.footer">
						<!-- 底部插槽 -->
						<slot name="footer">	</slot>
					</div>
				</div>
		</div>
	</transition>
</template>

<script>
import uuButton from './uu-button.vue';
export default {
	name: 'uuDialog',
	components: {
		uuButton
	},
	props: {
		title: {
			type: String,
			default: '提示'
		},
		width: {
			type: String,
			default: '50%'
		},
		top: {
			type: String,
			default: '15vh'
		},
		visible: {
			type: Boolean,
			default: false
		},
		center: {
			type: Boolean,
			default: false
		},
		fullscreen: {
			type: Boolean,
			default: false
		},
		modal: {
			type: Boolean,
			default:false
		}
	},
	methods: {
		handleClose() {
			this.$emit('update:visible', false);
		}
	}
}
</script>

<style lang="scss" scoped>
.uu-dialog-wrapper {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	z-index:2003;
	background-color: rgba(0, 0, 0, .5);
	margin: 0;

	.uu-dialog {
		width: 30%;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		margin: 15vh auto 50px;
		position: relative;

		&-header {
			padding: 20px 20px 10px;
			.uu-dialog-title {
				line-height: 24px;
				font-size: 18px;
				color: #303133;
			}
			.uu-dialog-btn {
				position: absolute;
				top: 20px;
				right: 20px;
				padding: 0;
				background-color: transparent;
				border: none;
				outline: none;
				cursor: pointer;
				font-size: 16px;
				// 移动端按钮高亮
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				// 移动端圆角处理
				-webkit-appearance: none;
				.uui-icon-close {
					color: #909399;
				}
			}
		}

		&-main {
			padding: 30px 20px;
			color: #606266;
			font-size: 14px;
			// 规定自动换行的处理方法 normal|break-all(允许在单词内换行)|keep-all
			word-break: break-all;
		}

		&-footer {
			padding: 10px 20px 20px;
			text-align: right;
			box-sizing: border-box;
			// 深度选择器
			::v-deep .uu-button:first-child {
				margin-right: 20px;
			}
		}

	}
}


.uu-dialog-enter {
	text-align: center;
	.uu-dialog-footer {
		text-align: inherit;
	}
}

.uu-dialog-enter-active {
	animation: fade .3s;
}

.uu-dialog-leave-active {
	animation: fade .3s reverse;
}

@keyframes fade {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
