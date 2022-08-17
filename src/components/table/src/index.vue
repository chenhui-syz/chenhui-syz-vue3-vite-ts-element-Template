<template>
  <el-table
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      ></el-table-column>
      <el-table-column
        v-else
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <!-- 首先利用表格自带的插槽拿到当前列的数据scope -->
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions?.label"
      :align="actionOptions?.align"
      :width="actionOptions?.width"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { TableOptions } from "./type";

let props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    require: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    require: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
});

// 过滤操作选项之后的配置
let tableOptions = computed(() =>
  props.options?.filter((item) => !item.action)
);

// 找出操作项的配置
let actionOptions = computed(() => props.options?.find((item) => item.action));

// 表格加载中效果
let isLoading = computed(() => props.data && !props.data.length);
</script>

<style lang="scss" scoped>
</style>