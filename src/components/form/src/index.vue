<template>
  <div>form</div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { FormOptions } from "./types/types";
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
</style>