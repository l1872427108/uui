# radio 单选框
### 基础用法
###
<uu-radio v-model="radio" label="1" >备选项</uu-radio>
<uu-radio v-model="radio" label="2" >备选项</uu-radio>

###
### 禁用
###
<uu-radio disabled v-model="radio" label="1" >备选项</uu-radio>
<uu-radio disabled v-model="radio" label="2" >备选项</uu-radio>

###

### 单选框组
###
 <uu-radio-group v-model="radio">			
  <uu-radio :label="2">备选项</uu-radio>
  <uu-radio :label="6">备选项</uu-radio>
  <uu-radio :label="9">备选项</uu-radio>
 </uu-radio-group>

###
### 按钮样式

<uu-radio-group v-model="radio">
    <uu-radio-button  label="上海"></uu-radio-button>
    <uu-radio-button  label="北京"></uu-radio-button>
    <uu-radio-button  label="深圳"></uu-radio-button>
    <uu-radio-button  label="广州"></uu-radio-button>
</uu-radio-group>
----
<uu-radio-group v-model="radio" size="medium">
    <uu-radio-button  label="上海"></uu-radio-button>
    <uu-radio-button  label="北京"></uu-radio-button>
    <uu-radio-button  label="深圳"></uu-radio-button>
    <uu-radio-button  label="广州"></uu-radio-button>
</uu-radio-group>
---
<uu-radio-group v-model="radio" size="small">
    <uu-radio-button  label="上海"></uu-radio-button>
    <uu-radio-button disabled label="北京"></uu-radio-button>
    <uu-radio-button  label="深圳"></uu-radio-button>
    <uu-radio-button  label="广州"></uu-radio-button>
</uu-radio-group>
---
<uu-radio-group v-model="radio" disabled size="mini">
    <uu-radio-button  label="上海"></uu-radio-button>
    <uu-radio-button  label="北京"></uu-radio-button>
    <uu-radio-button  label="深圳"></uu-radio-button>
    <uu-radio-button  label="广州"></uu-radio-button>
</uu-radio-group>
---

###
### 带有边框

###
<uu-radio-group v-model="radio">
  <uu-radio border :label="2">备选项</uu-radio>
   <uu-radio border :label="6">备选项</uu-radio>
   <uu-radio border :label="9">备选项</uu-radio>
</uu-radio-group>

###
### Radio Attributes

###
| 参数          | 说明                                | 类型                      | 可选值                | 默认值 |
| ------------- | ----------------------------------- | ------------------------- | --------------------- | ------ |
| value/v-model | 绑定值                              | string / number / boolean | -                     | -      |
| disabled      | 禁用                                | Boolean                   | -                     | false  |
| label         | Radio 的 value                      | string / number / boolean | -                     | false  |
| border        | 是否显示边框                        | Boolean                   | -                     | false  |
| size          | Radio 的尺寸,仅在 border 为真时有效 | String                    | medium / small / mini | -      |
| name          | 原生的 name 属性                    | String                    | -                     | -      |

###
### Radio Events

###
| 事件名称 | 说明                   | 回调参数            |
| -------- | ---------------------- | ------------------- |
| change   | 绑定值变化时触发的事件 | 选中 Radio label 值 |

###
### Radio-group Attributes

###
| 参数          | 说明                                    | 类型                      | 可选值 | 默认值  |
| ------------- | --------------------------------------- | ------------------------- | ------ | ------- |
| value/v-model | 绑定值                                  | string / number / boolean | -      | -       |
| disabled      | 禁用                                    | Boolean                   | -      | false   |
| size          | Radio 的尺寸,仅在 border 为真时有效     | String                    | -      | -       |
| text-color    | 按钮形式的 Radio 激活时的文本颜色       | String                    | -      | #ffffff |
| fill          | 按钮形式的 Radio 激活时的填充色的边框色 | String                    | -      | #409EFF |

###
### Radio-group Events

###
| 事件名称 | 说明                   | 回调参数            |
| -------- | ---------------------- | ------------------- |
| change   | 绑定值变化时触发的事件 | 选中 Radio label 值 |


###
### Radio-button Attributes

| 参数     | 说明           | 类型            | 可选值 | 默认值 |
| -------- | -------------- | --------------- | ------ | ------ | ----- |
| label    | Radio 的 value | string / number | —      | —      |
| disabled | 是否禁用       | boolean         |        | —      | false |
| name     | 原生 name 属性 | string          | —      | —      |
