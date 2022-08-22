<template>
  <div class="mode-container">
    <el-dropdown>
      <el-icon class="mode-icon">
        <moon v-show="isDark" />
        <sunny v-show="!isDark" />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLightMode">
            <el-icon>
              <sunny />
            </el-icon>
          </el-dropdown-item>
          <el-dropdown-item @click="handleDarkMode">
            <el-icon>
              <moon />
            </el-icon>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>阅读模式</span>
  </div>
</template>

<script lang="ts" setup>
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElIcon } from 'element-plus'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useMode } from './useMode'
const { isDark, handleDarkMode, handleLightMode } = useMode()
</script>
