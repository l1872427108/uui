<template>
	<div>
		<uu-button @click="visible = true">点哦</uu-button>
		<uu-dialog :visible.sync="visible"></uu-dialog>
	<div style="height: 150px"></div>
		<uu-button @click="visible2 = true">点哦</uu-button>
		<uu-dialog title="提示" :visible.sync="visible2">
			<span slot="title">
				<h1>标题</h1>
			</span>
			<span>
				主要内容
			</span>
			<span slot="footer">
					<uu-button @click="visible2 = false">取 消</uu-button>
					<uu-button type="primary" @click="visible2 = false">确 定</uu-button>
			</span>
		</uu-dialog>

<div style="height: 150px"></div>
	<uu-button @click="visible3 = true">点哦</uu-button>
		<uu-dialog center title="提示" :visible.sync="visible3">
			<span slot="title">
				<h1>标题</h1>
			</span>
			<div>
				主要内容
			</div>
			<span slot="footer">
					<uu-button @click="visible3 = false">取 消</uu-button>
					<uu-button type="primary" @click="visible3 = false">确 定</uu-button>
			</span>
		</uu-dialog>


<div style="height: 150px"></div>
		<uu-button @click="visible4 = true">点哦</uu-button>
		<uu-dialog title="提示" :visible.sync="visible4">
			<uu-dialog :visible.sync="visible5">
				<div>我是内层的</div>
			</uu-dialog>
			<span slot="footer">
					<uu-button @click="visible4 = false">取 消</uu-button>
					<uu-button type="primary" @click="visible5 = true">打开内层的 dialog</uu-button>
			</span>
		</uu-dialog>
	</div>
</template>

<script>
import uuButton from './uu-button.vue';
import uuDialog from './uu-dialog.vue';
export default {
	components: {
		uuButton,
		uuDialog
	},
	data() {
		return {
			visible: false,
			visible2: false,
			visible3: false,
			visible4: false,
			visible5: false
		}
	},
}
</script>

<style>

</style>
