# Button 按钮
##### 常用的操作按钮。
### 代码
```html
<uu-button type="default" plain round disabled />
```

## 基础用法
#### 基础的按钮用法
###
###
<uu-button type="default">默认按钮</uu-button>
<uu-button type="primary">主要按钮</uu-button>
<uu-button type="success">成功按钮</uu-button>
<uu-button type="info">信息按钮</uu-button>
<uu-button type="warn">警告按钮</uu-button>
<uu-button type="danger">危险按钮</uu-button>

#### 朴素的按钮用法
###
###
<uu-button type="default" plain>朴素按钮</uu-button>
<uu-button type="primary" plain>主要按钮</uu-button>
<uu-button type="success" plain>成功按钮</uu-button>
<uu-button type="info" plain>信息按钮</uu-button>
<uu-button type="warn" plain>警告按钮</uu-button>
<uu-button type="danger" plain>危险按钮</uu-button>

#### 圆角的按钮用法
###
###
<uu-button type="default" round>圆角按钮</uu-button>
<uu-button type="primary" round>主要按钮</uu-button>
<uu-button type="success" round>成功按钮</uu-button>
<uu-button type="info" round>信息按钮</uu-button>
<uu-button type="warn" round>警告按钮</uu-button>
<uu-button type="danger" round>危险按钮</uu-button>

#### 图标的按钮用法
###
<uu-button type="default" circle class="uui-icon-edit"></uu-button>
<uu-button type="primary" circle class="uui-icon-check"></uu-button>
<uu-button type="success" circle class="uui-icon-delete"></uu-button>
<uu-button type="info" circle class="uui-icon-remove"></uu-button>
<uu-button type="warn" circle class="uui-icon-setting"></uu-button>
<uu-button type="danger" circle class="uui-icon-success"></uu-button>



#### 禁用的按钮用法
###
###

<uu-button type="default" disabled>圆角按钮</uu-button>
<uu-button type="primary" disabled>主要按钮</uu-button>
<uu-button type="success" disabled>成功按钮</uu-button>
<uu-button type="info" disabled>信息按钮</uu-button>
<uu-button type="warn" disabled>警告按钮</uu-button>
<uu-button type="danger" disabled>危险按钮</uu-button>


### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | --- | --- | --- | 
| type | 按钮类型 | String | false | default |
| plain | 镂空 | Boolean | false | false |
| disabled | 禁用 | Boolean | false | false |
| circle | 圆 | Boolean | false | false |
| round | 圆角 | Boolean | false | false |
| disabled | 禁用 | Boolean | false | false

### Event
| 事件名称 |
| ----- | 
| click |