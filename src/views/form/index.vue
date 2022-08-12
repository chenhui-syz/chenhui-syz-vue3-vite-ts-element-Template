<template>
  <div>
    <rc-form
      :options="options"
      label-width="100px"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @on-success="handleSuccess"
      @before-remove="beforeRemove"
    >
      <template #uploadArea>
        <el-button size="default" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="font-size: 12px; color: #999; padding-left: 10px">
          jpg/png files with a size less than 500kb
        </div>
      </template>
      <!-- 这里拿到作用域插槽传递过来的表单实例form -->
      <!-- 这里拿到作用域插槽传递过来的表单的值model -->
      <!-- 默认为scope -->
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm(scope)">重置</el-button>
      </template>
    </rc-form>
  </div>
</template>

<script lang="ts" setup>
// 全局注册了之后，这里就不用再引用组件了，在页面中直接使用就行了
// import RcChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { FormOptions } from "../../components/form/src/types/types";

interface Scope {
  form: any;
  model: any;
}

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    placeholder: "请填写职位",
    prop: "username",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blue",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "hobby",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "famale",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
  },
  {
    type: "upload",
    label: "上传资料",
    prop: "pic",
    uploadAttrs: {
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: true,
      limit: 3,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: "不能为空",
    //     trigger: "blur",
    //   },
    // ],
  },
  // 富文本编辑器
  {
    type: "editor",
    value: "",
    prop: "desc",
    label: "描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
];

const handlePreview = (val: any) => {
  console.log("点击预览");
  // file: any, fileList: any
};
const handleRemove = (file: any) => {
  console.log("点击删除");
  console.log("🚀 ~ file: index.vue ~ line 188 ~ file", file);
};

const beforeRemove = (val: any) => {
  // files: any, fileList: any
  console.log("删除之前进行触发");
};
const handleSuccess = (val: any) => {
  // reponse: any, file: any, fileList: any
  console.log("上传成功");
};

const submitForm = (scope: Scope) => {
  scope.form.validate((valid: any) => {
    // 表单验证通过
    if (valid) {
      console.log(scope.model);
      ElMessage.success("提交成功");
    } else {
      // 未通过验证
      ElMessage.warning("表单验证不通过");
    }
  });
};
const resetForm = (scope: Scope) => {
  scope.form.resetFields();
};
</script>

<style lang="scss" scoped></style>
