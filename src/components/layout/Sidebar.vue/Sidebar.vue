
<script setup>
import { ref } from 'vue'

    const links = ref([
       { name: 'Typography', href: '/typography'},
       { name: 'Button', href: '/button'}
    ])
</script>

<template>
    <div class="sidebar">
        <RouterLink v-for="link in links" 
            class="sidebar__link"
            :key="link.name" 
            :to="link.href"> {{link.name}}
            
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .sidebar {
        left: 0;
        top: 62px;
        height: 100%;
        background: #fff;
        position: fixed;
        width: 250px;
        padding: 20px;
        transition: 0.2s;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.07);
        transform: translateX(0px);
        &__link {
            display: block;
            border-radius: 12px;
            padding: 10px;
            border: 2px solid #fff;
            transition: 0.2s;
            font-weight: bold;
            margin-bottom: 10px;
            &:hover{
                border-color: var(--primary-color)
            }
        }
    }
</style>
