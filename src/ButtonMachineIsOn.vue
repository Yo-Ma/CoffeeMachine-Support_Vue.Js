
<template>
    <h4>
        Cacher les machines éteintes
        <toggle-button :value="testprop" v-on:change="hideMachines"/>
    </h4>
</template>


<script>
    export default {
      props: ['testprop'],
      name: 'ButtonMachineIsOn',
      data() {
        return {

        };
      },
      methods: {
        hideMachines: function(){
          this.$emit('hideMachinesON')
        }
      }
    };

</script>


<style scoped>

</style>
