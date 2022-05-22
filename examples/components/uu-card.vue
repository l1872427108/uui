<template>
	<div class="uu-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
		<div class="uu-card__header" v-if="$slots.header">
			<slot name="header"></slot>
		</div>
		<div class="uu-card__body" :style="bodyStyle">
				<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UuCard',
	props: {
		bodyStyle: {},
		shadow: {
			type: String
		}
	},
	mounted() {
		console.log(this.$slots);
	}
}
</script>

<style lang="scss" scoped>
.uu-card {
	border-radius: 4px;
	border: 1px solid #EBEEF5;
	background-color: #FFFFFF;
	overflow: hidden;
	color: #303133;
	transition: 0.3s;

	&__header {
		padding: 20px;
		border-bottom: 1px solid #EBEEF5;
		box-sizing: border-box;
	}

	&__body {
		padding: 20px;
	}

	&.is-always-shadow {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}

	&.is-hover-shadow {
		&:hover,
    &:focus {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
	}

}


</style>
