
<template>
  '<li :class="{ active: machine.isOn }">{{machine.name}}'
  '<br />'
  '<toggle-button :value="machine.isOn" @change="machine.isOn = !machine.isOn"/>'
  '</li>'
</template>


<script>
    export default {
      props: ['machine'],
      name: 'Machine',
      data() {


        }
    }
</script>


<style>

</style>
