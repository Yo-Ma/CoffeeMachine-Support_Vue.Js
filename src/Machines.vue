<template>
    <Machine v-for="machine in machines"
             :key="machine.id"
             v-bind:machine="machine"
             v-if="!hideOffMachines || machine.isOn">
    </Machine>
</template>


<script>
    export default {
        data() {


        }
    }
</script>


<style>

</style>