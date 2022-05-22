<template>
	<div class="uu-carousel" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">

		<!-- 包裹层 -->
		<div :style="{height: height}" class="uu-carousel-container">
				<!-- 向左按钮 -->
			<transition name="carousel-arrow-left" v-if="arrowDisplay">
				<button  @click.stop="throttledArrowClick(activeIndex - 1)" v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)" @mouseenter="handleButtonEnter('left')" @mouseleave="handleButtonLeave" type="button" ref="left" class="uu-carousel-arrow uu-carousel-arrow-left"> 
					<i class="uui-icon-edit"></i>
				</button>
			</transition>

			<!-- 向右按钮 -->
			<transition name="carousel-arrow-right" v-if="arrowDisplay">
				<button @click.stop="throttledArrowClick(activeIndex + 1)" v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)" @mouseenter="handleButtonEnter('right')" @mouseleave="handleButtonLeave" type="button" ref="right" class="uu-carousel-arrow uu-carousel-arrow-right">
					<i class="uui-icon-edit"></i>
				</button>
			</transition>
			
			<!-- item 插槽 -->
			<slot></slot>
		</div>

		<!-- 小圆点 -->
		<ul class="uu-carousel-indicators">
			<li v-for="(item, index) in items" :key="index" class="uu-carousel-indicator" @click.stop="handleIndicatorClick(index)">
				<button class="uu-carousel-button" :class="{'is-active': index === activeIndex}">
        </button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'uuCarousel',
	props: {
		// 内容的高度
		height: {
			type: String,
			default: ''
		},
		// 轮播的时间
		interval: {
			type: Number,
			default: 2000
		},
		// 初始的 index
		initialIndex: {
			type: Number,
			default: 0
		},
		// 自动循环
		loop: {
			type: Boolean,
			default: true
		},
		// 切换箭头的显示时机
		arrow: {
			type: String,
			default: 'hover'
		},
	},
	data() {
		return {
			// 小圆点
			items: [],
			// 激活的下标
			activeIndex: -1,
			// 定时器
			timer: null,
			// 内容的宽度
			containerWidth: '',
			// 是否移动进入
			hover: false
		}
	},
	
	computed: {
		arrowDisplay() {
			return this.arrow !== 'never';
		}
	},

	watch: {
		// 监听 loop
		loop() {
			this.setActiveItem(this.activeIndex);
		},
		activeIndex(val, oldVal) {
			this.resetItemPosition(oldVal);
		}
	},
	
	methods: {
		// 进入到carousel
		handleMouseEnter() {
			// 设置 hover 的状态
			this.hover = true;
			// 暂停自动轮播
			this.pauseTimer();
		},
		// 离开 carousel
		handleMouseLeave() {
			// 改变 hover 的状态
			this.hover = false;
			// 开启自动轮播
			this.startTimer();
		},

		// 进入到按钮
		handleButtonEnter() {
			
		},

		// 离开按钮
		handleButtonLeave() {

		},

		// 暂停自动轮播
		pauseTimer() {
			// 清除定时器 (有定时器才去清除)
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
		},
		// 开启定时器
		startTimer() {
			if (this.timer) return;
			this.timer = setInterval(/*自动轮播函数 */this.play, /* 传入的时间 */this.interval);
		},
		// 轮播函数
		play() {
			// 只需要让下标改变即可
			if (this.activeIndex < this.items.length - 1) {
				// 后面还有图片
				this.activeIndex++;
			} else if (this.loop) {
				// 轮训完一圈, 回到第一张
				this.activeIndex = 0;
			}
		},

		// 更新 items 数组
		updateItems() {
			this.items = this.$children.filter(child => child.$options.name == 'uuCarouselItem');
		},

		// 设置激活的 item
		setActiveItem(index) {
			index = Number(index);
			let length = this.items.length;
			const oldIndex = this.activeIndex;
			if (index < 0) {
				this.activeIndex = this.loop ? length - 1 : 0;
			} else if (index >= length) {
				this.activeIndex = this.loop ? 0 : length - 1;
			} else {
				this.activeIndex = index;
			}
			if (oldIndex == this.activeIndex) {
				this.resetItemPosition(oldIndex);
			}
			this.resetTimer();
		},

		resetItemPosition(oldIndex) {
			this.items.forEach((item, index) => {
				item.translateItem(index, this.activeIndex, oldIndex);
			})
		},

		resetTimer() {
			this.pauseTimer();
			this.startTimer();
		},

		throttle(fn, wait = 50) {
			// 上一次执行 fn 的时间
			let previous = 0
			// 将 throttle 处理结果当作函数返回
			return function(...args) {
				// 获取当前时间，转换成时间戳，单位毫秒
				let now = +new Date()
				// 将当前时间和上一次执行函数的时间进行对比
				// 大于等待时间就把 previous 设置为当前时间并执行函数 fn
				if (now - previous > wait) {
					previous = now
					fn.apply(this, args)
				}
			}
		},

		handleIndicatorHover(index) {
			if (index !== this.activeIndex) {
				this.activeIndex = index;
			}
		}
	},

	created() {
		this.throttledArrowClick = this.throttle(index => {
			this.setActiveItem(index);
		}, 500);

		this.handleIndicatorClick = this.throttle(index => {
			this.handleIndicatorHover(index);
		}, 500);
	},

	mounted() {
		this.updateItems();
		this.$nextTick(() => {
			if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
				this.activeIndex = this.initialIndex;
			}
			this.startTimer();
		})
	}
}
</script>

<style lang="scss">
.uu-carousel {
	position: relative;
	overflow-x: hidden;
	.uu-carousel-container {
		text-align: center;
	}
	.uu-carousel-arrow {
		border: none;
    outline: none;
    padding: 0;
    margin: 0;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: .3s;
    border-radius: 50%;
    background-color: rgba(31,45,61,.11);
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px;
	}
	.uu-carousel-indicators {
		bottom: 0;
    left: 50%;
    transform: translateX(-50%);
		position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 2;
		.uu-carousel-indicator {
			background-color: transparent;
			cursor: pointer;
			display: inline-block;
			padding: 12px 4px;
			.uu-carousel-button {
				display: block;
				opacity: .48;
				width: 30px;
				height: 3px;
				background-color: #fff;
				border: none;
				outline: none;
				padding: 0;
				margin: 0;
				cursor: pointer;
				transition: .3s;
				&.is-active {
					background: red;
				}
			}
		}
	}
	.uu-carousel-arrow-left {
		left: 16px;
	}
	.uu-carousel-arrow-right {
		right: 16px;
	}
}


.carousel-arrow-left-enter,
.carousel-arrow-left-leave-active {
  opacity: 0;
}

.carousel-arrow-right-enter,
.carousel-arrow-right-leave-active {
  opacity: 0;
}

.uu-carousel-indicator:hover button {
	opacity: 0.64;
}
.uu-carousel-indicator {
	padding: 6px 4px;
}

</style>
