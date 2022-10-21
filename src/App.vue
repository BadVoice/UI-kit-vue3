<script setup>
import LayoutHeader from '@/components/layout/Header/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue/Sidebar.vue';

</script>

<template>
  <div class="container">
    <LayoutHeader />
    <Sidebar />
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
