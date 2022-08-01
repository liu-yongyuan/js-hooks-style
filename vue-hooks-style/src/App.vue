<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  {{ count }}
  <el-button @click.prevent.stop="count++">Click add count</el-button>
</template>
