<template>
    <h1 class="heading-1">Button</h1>

    <h2 class="heading-2">Colors</h2>
    <div class="line">
        <Button label="Primary" color="primary" />
        <Button label="Secondary" color="second" />
        <Button label="Success" color="success" />
        <Button label="Info" color="info" />
        <Button label="Warning" color="warning" />
        <Button label="Danger" color="danger" />
    </div>

    <h2 class="heading-2">Disabled</h2>
    <div class="line">
        <Button label="Primary" color="primary" :disabled="true"/>
        <Button label="Secondary" color="second" :disabled="true"/>
    </div>

    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <Button label="Primary" color="primary" :rounded="true" />
        <Button label="Secondary" color="second" :rounded="true" />
        <Button label="Success" color="success" :rounded="true" />
        <Button label="Info" color="info" :rounded="true" />
        <Button label="Warning" color="warning" :rounded="true" />
        <Button label="Danger" color="danger" :rounded="true" />
    </div>

    
    
    
    
</template>

<script setup>
    import Button from '@/components/Button.vue'
</script>

<style lang="scss" scoped>
    .line {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
</style>