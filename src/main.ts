import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { toLine } from "./utils/index";

// 全局引用自己封装的组件
import rcUI from './components/index'
// 如果是按需引入呢？那么在这里直接引用单个的组件就行了，同样也在下面use链式调用就可以了
// 如：
// import chooseIcon from './components/chooseIcon/index'

// 全局引用图标组件
import * as Icons from "@element-plus/icons";

// 用app变量去挂载更多的内容
const app = createApp(App);

// 全局注册图标，会牺牲一点性能
for (let i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}
// 链式调用
app.use(router).use(ElementPlus).use(rcUI);

app.mount("#app");
