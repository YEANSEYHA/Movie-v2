<template>
    <button v-on:click="onClick">Click me</button>
</template>

<script>
export default {
    name: 'Button',
    methods:{
        onClick(){
            console.log('Clicked')
            this.$emit('onClick')
        }
    }
}
</script>

<style>

</style>