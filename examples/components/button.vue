<template>
	<div>
		<uu-button type="default">按钮</uu-button>
		<uu-button type="primary">按钮</uu-button>
		<uu-button type="success">按钮</uu-button>
		<uu-button type="info">按钮</uu-button>
		<uu-button type="danger">按钮</uu-button>
		<div>-----------------------------------</div>
		<uu-button type="default" plain>按钮</uu-button>
		<uu-button type="primary" plain>按钮</uu-button>
		<uu-button type="success" plain>按钮</uu-button>
		<uu-button type="info" plain>按钮</uu-button>
		<uu-button type="danger" plain>按钮</uu-button>
		<div>-----------------------------------</div>
		<uu-button type="default" round>按钮</uu-button>
		<uu-button type="primary" round>按钮</uu-button>
		<uu-button type="success" round>按钮</uu-button>
		<uu-button type="info" round>按钮</uu-button>
		<uu-button type="danger" round>按钮</uu-button>
		<div>-----------------------------------</div>
		<uu-button type="default" circle>圆</uu-button>
		<uu-button type="primary" circle>圆</uu-button>
		<uu-button type="success" circle>圆</uu-button>
		<uu-button type="info" circle>圆</uu-button>
		<uu-button type="danger" circle>圆</uu-button>
		<div>-----------------------------------</div>
		<uu-button type="default" disabled>按钮</uu-button>
		<uu-button type="primary" disabled>按钮</uu-button>
		<uu-button type="success" disabled>按钮</uu-button>
		<uu-button type="info" disabled>按钮</uu-button>
		<uu-button type="danger" disabled>按钮</uu-button>
		<div>-----------------------------------</div>
		<div>-----------------------------------</div>
		<uu-button @click="handleClick" type="primary">点我</uu-button>
	</div>
</template>

<script>
import uuButton from './uu-button';
export default {
	name: 'button',
	components: {
		uuButton
	},
	methods: {
		handleClick() {
			alert('点击了');
		}
	}
}
</script>

<style>

</style>
