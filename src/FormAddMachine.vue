
<template>
    <!-- Formulaire d'ajout de machine -->
    <form @submit.prevent="addMachine" class="form">
        <input type="text" placeholder="Nom de la machine" v-model="buffer.name">
        <select name="status" v-model="buffer.isOn">
            <option v-bind:value="true">ON</option>
            <option v-bind:value="false">OFF</option>
        </select>
        <input type="submit" value="Ajouter">
    </form>
</template>


<script>
    export default {
        data() {


        }
    }

</script>


<style>

</style>