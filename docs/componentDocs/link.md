# link 文字链接

### 基础用法
###
<uu-link type="default">默认链接</uu-link>
<uu-link type="success">主要链接</uu-link>
<uu-link type="primary">成功链接</uu-link>
<uu-link type="danger">警告链接</uu-link>
<uu-link type="warning">危险链接</uu-link>
<uu-link type="info">信息链接</uu-link>

###
###
### 禁用状态
###
<uu-link type="default" disabled>默认链接</uu-link>
<uu-link type="success" disabled>主要链接</uu-link>
<uu-link type="primary" disabled>成功链接</uu-link>
<uu-link type="danger" disabled>警告链接</uu-link>
<uu-link type="warning" disabled>危险链接</uu-link>
<uu-link type="info" disabled>信息链接</uu-link>

###
###

### 图标
###
###

<uu-link type="default" icon="uui-icon-edit">编辑</uu-link>
<uu-link type="success" >查看</uu-link>

###
###

### 下划线
###

<uu-link type="success">主要链接</uu-link>
<uu-link :underline="false" type="primary">成功链接</uu-link>


###
###
### Attributes
###
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | 
| type | 按钮类型 | String | primary / success / warning / danger / info | default |
| disabled | 禁用 | Boolean | — | false |
| underline | 是否下划线 | Boolean | — | false |
| href | 原生href属性 | String | — | — |
| icon | 图标类名 | String | — | — |