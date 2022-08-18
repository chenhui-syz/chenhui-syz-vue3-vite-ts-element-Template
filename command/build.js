// 打包配置
// 打包因为都是用的node，所以这里都是使用commonjs规范
const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@/vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const { default: defaultConfig } = require("wangeditor/dist/config");

// 打包入口文件夹
// packages文件为打包入口文件夹，将components文件夹下的组件代码手动复制进这个文件夹中
// hooks，style，utils三个文件夹都复制进package文件夹中
// packages文件夹中关于hooks和utils文件的引用路径记得改一下，否则打包之后会报错
const entryDir = path.resolve(__dirname, "../package");

// 出口文件夹
// 这个文件夹不需要手动建，一会打包的时候会自动生成
const outDir = path.resolve(__dirname, "../lib");

// vite基础配置
const baseConfig = defaultConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

// rollup配置
const rollOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 全量打包构建的方法
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "index.ts"),
        // 打包后的名字
        name: "rc-element-plus-components",
        fileName: "rc-element-plus-components",
        // 输出内容格式
        formats: ["es", "umd"],
      },
      outDir,
    },
  });
};

// 打包成库
const buildLib = async () => {
  await buildAll();
};

buildLib();

// 写好这个打包逻辑后，去package.json配置打包脚本 npm run lib
// 配置好脚本后因为项目是用的ts，所以还要在packages文件夹新增个ts的类型声明