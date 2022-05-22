<template>
  <div id="app">
		<!-- <uuButton></uuButton> -->
		<!-- <uu-switch></uu-switch> -->
		<!-- <uu-link></uu-link> -->
		<!-- <uu-dialog></uu-dialog> -->
		<uu-card class="box-card" shadow="hover" :body-style="{padding: '0px'}">
			<div slot="header" class="clearfix">
				<span>卡片名称</span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			</div>
			<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
			</div>
		</uu-card>

		<el-card class="box-card" :body-style="{padding: '0px'}">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
  </div>
</template>

<script>
// import uuButton from './components/uu-button.vue';
// import uuSwitch from './components/switch.vue';
// import uuLink from './components/link.vue';
// import uuDialog from './components/uu-dialog.vue';
import uuDialog from './components/dialog.vue';
import uuCard from './components/uu-card.vue';
export default {
	name: 'App',
	components: {
		// uuButton,
		// uuSwitch,
		// uuLink,
		// uuDialog
		uuCard
	},
	data() {
		return {
			active: false
		}
	},
	methods: {
		
	}
}
</script>

<style>
/* body {
	background-color: #ccc;
} */

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
.box-card {
	width: 480px;
}
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
</style>
