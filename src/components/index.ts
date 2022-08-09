import { App } from "vue";
import chooseIcon from "./chooseIcon";
import form from "./form";

// 将组件都添加到这个数组中
const components = [chooseIcon, form];

export default {
  // 循环数组，进行组件的全局注册
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};