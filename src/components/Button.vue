<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: 'Button'
        },
        color: {
            type: String,
            default: 'primary'
        },
        rounded: {
            type: Boolean,
            required: false
        }, 
        disabled: {
            type: Boolean,
            required: false
        }
    })
</script>


<template>
    <button 
        :class="['btn', `btn_${color}`, {'btn_rounded': rounded}]"
        :disabled="disabled"
        >
        {{label}}
    </button>
</template>


<style lang="scss" scoped>
    .btn {
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 0 20px;
        height: 40px;
        color: #fff;
        border-radius: 7px;
        border: none;
        cursor: pointer;
        font-size: 15px;
        transition: .2s;
        &_primary {
            background: var(--primary);
            border: 1px solid var(--primary);
            &:enabled:hover{
                background: var(--primary-hover);
            }
        }
        &_second {
            background: var(--second);
            border: 1px solid var(--second);
            &:enabled:hover{
                background: var(--second-hover);
            }
        }
        &_success {
            background: var(--success);
            border: 1px solid var(--success);
            &:enabled:hover{
                background: var(--success-hover);
            }
        }
        &_info {
            background: var(--info);
            border: 1px solid var(--info);
            &:enabled:hover{
                background: var(--info-hover);
            }
        }
        &_warning {
            background: var(--warning);
            border: 1px solid var(--warning);
            &:enabled:hover{
                background: var(--warning-hover);
            }
        }
        &_danger {
            background: var(--danger);
            border: 1px solid var(--danger);
            &:enabled:hover{
                background: var(--danger-hover);
            }
        }
        &_rounded {
            border-radius: 15px;
        }
        &:disabled {
            opacity: .6;
            cursor: default;
            &:hover{
                opacity: .6;
            }
        }
    }
    
</style>