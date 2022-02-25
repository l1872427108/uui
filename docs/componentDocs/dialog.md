# Dialog 弹框

在保留当前页面状态的情况下，告知用户并承载相关操作。


### 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。


<uu-button type="primary" @click="dialogVisible = true">点击打开 Dialog</uu-button>

<uu-dialog title="提示" :visible.sync="dialogVisible"></uu-dialog>
<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
    }
  };
</script>



<!-- 
### 居中布局

标题和底部可水平居中

:::demo

<uu-button type="primary" @click="dialogVisible = true">点击打开 Dialog</uu-button>

<uu-dialog center title="提示" :visible.sync="dialogVisible">
    <template v-slot:footer>
        <span>
            <uu-button @click="dialogVisible = false">取 消</uu-button>
            <uu-button type="primary" @click="dialogVisible = false">确 定</uu-button>
        </span>
    </template>
</uu-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
    }
  };
</script>

::: -->