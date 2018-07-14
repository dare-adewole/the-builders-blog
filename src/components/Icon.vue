<template>
    <i :class = "`mdi mdi-${name}`" :style="`font-size: ${size}px;color: ${color}`"></i>
</template>
<script>
    export default {
        name: 'icon',
        props: {
            name: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 18
            },
            color: {
                type: String,
                default: 'inherit'
            }
        }
    }
</script>
<style lang="scss" scoped>
    i {
        // vertical-align: middle;
    }
</style>


