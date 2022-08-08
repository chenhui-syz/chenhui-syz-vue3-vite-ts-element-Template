import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { toLine } from "./utils/index";

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
app.use(router).use(ElementPlus);

app.mount("#app");
