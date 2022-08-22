<template>
  <el-container class="page-main">
    <el-header class="header">
      <mode />
    </el-header>
    <el-main>
      <el-scrollbar>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElMain, ElScrollbar, ElTable, ElTableColumn } from 'element-plus'
import Mode from '../../mode/src/mode.vue'
import { usePageMain } from './usePageMain'
const { tableData } = usePageMain()
</script>
