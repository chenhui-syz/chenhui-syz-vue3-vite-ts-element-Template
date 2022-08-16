<template>
  <div>
    <!-- v-bind="$attrs" 给当前组件注入属性，包括title，width -->
    <el-dialog v-model="dialogVisible" v-bind="$attrs"> </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

let dialogVisible = ref<boolean>(props.visible);

// 对传递过来的属性进行监听

</script>

<style lang="scss" scoped></style>
