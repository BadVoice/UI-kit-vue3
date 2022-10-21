<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
</script>

<template>
  <div class="container">
    <LayoutHeader />
    <div class="content">
      <RouterView />
    </div>
  </div>
    
</template>

<style lang="scss" scoped>
    @import "./styles/global.scss";

    .content {
      max-width: 1400px;
      margin-left: 250px;
      padding: 30px;
      transition: .2s;
      &_full {
        margin-left: 0;
      }
    }
</style>
