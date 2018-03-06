<template>
  <!-- Formulaire d'ajout de machine -->
  <form @submit.prevent="addMachine" class="form">
    <input type="text" placeholder="Nom de la machine" v-model="buffer.name">
    <select name="status" v-model="buffer.isOn">
      <option v-bind:value="true"> ON</option>
      <option v-bind:value="false"> OFF</option>
    </select>
    <input type="submit" value="Ajouter">
  </form>


</template>


<script>
  export default {
    props: ['listMachines'],
    name: 'FormAddMachine',
    data() {
      return {
        buffer: {
          id: 3, name: 'Next machine name', isOn: true
        }
      };
    },
    methods: {
      // Pousse un nouvel objet dans la collection machines
      addMachine: function (e) {
        this.buffer.id += 1;
        this.listMachines.push({
                                 id: this.buffer.id,
                                 name: this.buffer.name,
                                 isOn: this.buffer.isOn
                               });
      }
    }
  };

</script>


<style>

</style>
