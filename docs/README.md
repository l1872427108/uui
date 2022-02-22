# 安装
### npm 安装
```base
npm i uu-uui --save
```

### 引用组建库
在 main.js 中引用组建库

```javascript
// 全部引入
import 'uu-uui/dist/uu-ui.css';
import uUI from 'uu-uui';
Vue.use(uUI);

// 按需引入
import 'uu-uui/dist/uuButton.css';
import { uuButton } from 'uu-uui';
Vue.use(uuButton);
```