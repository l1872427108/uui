<template>
	<div class="uu-carousel__item" :class="{'is-animating': animating}" :style="itemStyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'uuCarouselItem',
	data() {
		return {
			active: false,
			translate: 0,
			scale: 1,
			animating: false
		}
	},
	methods: {
		processIndex(index, activeIndex, length) {
			if (activeIndex === 0 && index === length - 1) {
				return -1;
			} else if (activeIndex === length - 1 && index === 0) {
				return length;
			} else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
				return length + 1;
			} else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
				return -2;
			}
			return index;
		},
		translateItem(index, activeIndex, oldIndex) {
			const length = this.$parent.items.length;
			if (oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }

			if (index !== activeIndex && length > 2 && this.$parent.loop) {
				index = this.processIndex(index, activeIndex, length);
			}
			this.active = index === activeIndex;
			this.translate = this.calcTranslate(index, activeIndex);
			console.log(this.translate);
			this.scale = 1;
		},

		calcTranslate(index, activeIndex) {
			const distance = this.$parent.$el.offsetWidth;
			// console.log('==>', this.$parent.$el.offsetWidth);
			console.log(activeIndex);
			return distance * (index - activeIndex);
		},

		autoprefixer(style) {
			if (typeof style !== 'object') return style;
			const rules = ['transform', 'transition', 'animation'];
			const prefixes = ['ms-', 'webkit-'];
			rules.forEach(rule => {
				const value = style[rule];
				if (rule && value) {
					prefixes.forEach(prefix => {
						style[prefix + rule] = value;
					});
				}
			});
			return style;
		}
	},

	computed: {
		itemStyle() {
			const value = `translateX(${ this.translate }px) scale(${ this.scale })`;
			const style = {
				transform : value
			}
			return this.autoprefixer(style);
		}
	},

	created() {
    this.$parent && this.$parent.updateItems();
  },
}
</script>

<style lang="scss">
.uu-carousel__item {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: inline-block;
	overflow: hidden;
	z-index: 0;
	background: #ccc;
	&:nth-child(2n) {
    background-color: #99a9bf;
  }
  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.uu-carousel__item.is-animating {
	transition: transform .4s ease-in-out;
}
</style>
