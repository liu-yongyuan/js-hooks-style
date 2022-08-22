<template>
  <el-container class="layout-container-demo">
    <page-aside />
    <page-main />
  </el-container>
</template>

<script lang="ts" setup>
import { ElContainer } from 'element-plus'
import PageAside from './components/aside/src/page-aside.vue'
import PageMain from './components/main/src/page-main.vue'
</script>