<script setup>
import LayoutHeader from '@/components/layout/Header/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue/Sidebar.vue';
import { ref } from '@vue/reactivity';

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle"
    @click="toggleMenu">
      &#5125;
    </div>
    <LayoutHeader />
    <Sidebar :openSidebar="isOpenMenu"/>
    <div :class="['content', {content_full: !isOpenMenu}]">
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

    .sidebar-toggle {
      position: fixed;
      left: 0;
      width: 15px;
      background: var(--primary);
      height: 100%;
      top: 62px;
      z-index: 1;
      cursor: pointer;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max0-width: 1023px) {
      .content {
        margin-left: 0;
      }
    }
</style>
