<template>
  <div>
    <rc-form :options="options"></rc-form>
  </div>
</template>

<script lang="ts" setup>
// 全局注册了之后，这里就不用再引用组件了，在页面中直接使用就行了
// import RcChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ref } from "vue";
import { FormOptions } from "../../components/form/src/types/types";
let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      //         {
      //     required:true,
      //     message:'用户名不能为空',
      //     trigger:'blur'
      // },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
