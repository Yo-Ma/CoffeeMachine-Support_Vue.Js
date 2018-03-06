
<template>
    <h4>
        Cacher les machines éteintes
        <toggle-button :value="hideOffMachines" @change="hideOffMachines = !hideOffMachines"/>
    </h4>
</template>


<script>
    export default {
      name: 'ButtonMachineIsOn',
      props: ['testprop']
    }

</script>


<style scoped>

</style>
