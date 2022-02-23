# Switch 开关
### 代码
```html
<uu-switch v-model="active" />
```

### 基础用法
###
###
<uu-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" />
### 
```vue
<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```


### 文字描述
###
###
<uu-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></uu-switch>
###
<uu-switch style="display: block" v-model="value2" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
</uu-switch>

###

```vue
<el-switch
  v-model="value1"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```


### Attributes
| 参数     |    说明 |    类型 |    是否必要 |    默认值 |
| --- | --- | --- | --- | --- | 
| value/v-model | 绑定值 | boolean / string / number | — | — |
| active-text | switch 打开时的文字描述 | string | — | — |
| inactive-text | switch 关闭时的文字描述 | string | — | — |
| active-color | switch 打开时的背景色 | string | — | — |
| inactive-color | switch 关闭时的背景色 | string | — | — |
| name | switch 对应的 name 属性 | string | — | — |

### Event
| 事件名称 | 说明 | 回调参数 |
| ----- |  ----- | ---- |
| change | switch 状态发生变化时的回调函数 |  新状态的值 |