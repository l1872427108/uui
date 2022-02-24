<template>
	<div>
		<div class="bottom">----------------------------------- 基础用法</div>
		<uu-link type="default">默认链接</uu-link>
		<uu-link type="success">主要链接</uu-link>
		<uu-link type="primary">成功链接</uu-link>
		<uu-link type="danger">警告链接</uu-link>
		<uu-link type="warning">危险链接</uu-link>
		<uu-link type="info">信息链接</uu-link>

		<div class="bottom">----------------------------------- 下划线</div>
		<uu-link type="success">主要链接</uu-link>
		<uu-link :underline="false" type="primary">成功链接</uu-link>

		<div class="bottom">----------------------------------- 禁用状态</div>
		<uu-link type="default" disabled>默认链接</uu-link>
		<uu-link type="success" disabled>主要链接</uu-link>
		<uu-link type="primary" disabled>成功链接</uu-link>
		<uu-link type="danger" disabled>警告链接</uu-link>
		<uu-link type="warning" disabled>危险链接</uu-link>
		<uu-link type="info" disabled>信息链接</uu-link>

		<div class="bottom">----------------------------------- 图标</div>
		<uu-link type="default" icon="uui-icon-edit">编辑</uu-link>
		<uu-link type="success" >查看</uu-link>

	</div>
</template>

<script>
import uuLink from "./uu-link.vue";
export default {
	name: "UuUuiLink",
	components: {
		uuLink,
	},
	data() {
		return {};
	},

	mounted() {},

	methods: {},
};
</script>

<style lang="scss" scoped>
.bottom {
	margin: 40px 0;
}
</style>