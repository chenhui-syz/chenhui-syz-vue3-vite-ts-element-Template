<template>
  <div>
    <el-button @click="visible = true"></el-button>
    <!-- 组件内打算修改该属性，就用v-model:传递过去 -->
    <rc-modal-form v-model:visible="visible"></rc-modal-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
