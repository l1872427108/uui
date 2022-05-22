<template>
	<div>
		<!-- 基础用法 -->
		<!-- <uu-radio v-model="radio" @change="xx" label="1" >备选项</uu-radio>
		<uu-radio v-model="radio" @change="xx" label="2" >备选项</uu-radio> -->
		<!-- 禁用 -->
		<!-- <uu-radio disabled v-model="radio" label="1" >备选项</uu-radio>
		<uu-radio disabled v-model="radio" label="2" >备选项</uu-radio> -->
		<!-- 单选框组  -->
		<!-- <uu-radio-group v-model="radio">
			<uu-radio :label="2">备选项</uu-radio>
			<uu-radio :label="6">备选项</uu-radio>
			<uu-radio :label="9">备选项</uu-radio>
		</uu-radio-group> -->

		<!-- 带有边框 -->
		<!-- <uu-radio-group v-model="radio">
			<uu-radio border :label="2">备选项</uu-radio>
			<uu-radio border :label="6">备选项</uu-radio>
			<uu-radio border :label="9">备选项</uu-radio>
		</uu-radio-group> -->

		<!-- size -->
		<!-- <uu-radio-group v-model="radio">
			<uu-radio  :label="1">备选项</uu-radio><br />
			<uu-radio  :label="6">备选项</uu-radio><br />
			<uu-radio  :label="9">备选项</uu-radio><br />
			<uu-radio  :label="2">备选项</uu-radio><br />
		</uu-radio-group> -->

		<!-- 按钮 -->
	   <uu-radio-group v-model="radio" size="mini" >
			<uu-radio-button  label="上海"></uu-radio-button>
			<uu-radio-button  label="北京"></uu-radio-button>
			<uu-radio-button  label="深圳"></uu-radio-button>
			<uu-radio-button  label="广州"></uu-radio-button>
		</uu-radio-group>
		<!-- <uu-radio-group v-model="radio" size="small">
			<uu-radio-button  label="上海"></uu-radio-button>
			<uu-radio-button  label="北京"></uu-radio-button>
			<uu-radio-button  label="深圳"></uu-radio-button>
			<uu-radio-button  label="广州"></uu-radio-button>
		</uu-radio-group>
		<uu-radio-group v-model="radio" size="medium">
			<uu-radio-button  label="上海"></uu-radio-button>
			<uu-radio-button  label="北京"></uu-radio-button>
			<uu-radio-button  label="深圳"></uu-radio-button>
			<uu-radio-button  label="广州"></uu-radio-button>
		</uu-radio-group>
		<uu-radio-group v-model="radio" disabled>
			<uu-radio-button  label="上海"></uu-radio-button>
			<uu-radio-button  label="北京"></uu-radio-button>
			<uu-radio-button  label="深圳"></uu-radio-button>
			<uu-radio-button  label="广州"></uu-radio-button>
		</uu-radio-group>
			<uu-radio-group v-model="radio" >
			<uu-radio-button  label="上海"></uu-radio-button>
			<uu-radio-button disabled  label="北京"></uu-radio-button>
			<uu-radio-button  label="深圳"></uu-radio-button>
			<uu-radio-button  label="广州"></uu-radio-button>
		</uu-radio-group> --> 
	</div>
</template>

<script>
import uuRadio from "./uu-radio.vue";
import uuRadioButton from "./uu-radio-button.vue";
import uuRadioGroup from "./uu-radio-group.vue";
export default {
	name: "UuUuiRadio",
	components: {
		uuRadio,
		uuRadioGroup,
		uuRadioButton,
	},
	data() {
		return {
			radio: "上海",
		};
	},

	mounted() {},

	methods: {
		xx(res){
			console.log(res);
		}
	},
};
</script>

<style lang="scss" scoped>
</style>