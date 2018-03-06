<template>
    <div id="app">
        <img src="./src/assets/coffee-bean.jpg">
        <h1>{{ msg }}</h1>
        <div>
            <h4>
                Cacher les machines éteintes
                <toggle-button :value="hideOffMachines" @change="hideOffMachines = !hideOffMachines"/>
            </h4>
            <h4>
                <ButtonMachineIsOn></ButtonMachineIsOn>
            </h4>
        </div>
        <hr>
        <ul>
            <!-- V-if peut contenir une règle avec un opérateur logique ou de comparaison -->
            <!-- https://www.w3schools.com/js/js_comparisons.asp -->
            <Machine v-for="machine in machines"
                     :key="machine.id"
                     v-bind:machine="machine"
                     v-if="!hideOffMachines || machine.isOn">
            </Machine>

        </ul>

        <!-- Formulaire d'ajout de machine -->
        <form @submit.prevent="addMachine" class="form">
            <input type="text" placeholder="Nom de la machine" v-model="buffer.name">
            <select name="status" v-model="buffer.isOn">
                <option v-bind:value="true">ON</option>
                <option v-bind:value="false">OFF</option>
            </select>
            <input type="submit" value="Ajouter">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                // Par défault, on affiche toutes les machines
                hideOffMachines: false,
                msg: 'Liste des machines',
                // Cet objet nous sert de tampon avant d'ajouter un nouvel objet à "machines"
                buffer: {
                    id: 3, name: 'Next machine name', isOn: true
                },
                machines: [
                    {id: 1, name: 'Machine 1', isOn: true},
                    {id: 2, name: 'Machine 2', isOn: false},
                    {id: 3, name: 'Machine 3', isOn: true}
                ]
            };
        },
        methods: {
            // Pousse un nouvel objet dans la collection machines
            addMachine: function (e) {
                this.buffer.id += 1;
                this.machines.push({
                                       id: this.buffer.id,
                                       name: this.buffer.name,
                                       isOn: this.buffer.isOn
                                   });
            }
        }
    };
</script>

<style scoped>
    #app {
        font-family             : 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing  : antialiased;
        -moz-osx-font-smoothing : grayscale;
        text-align              : center;
        color                   : #2c3e50;
        margin-top              : 60px;
    }

    img {
        width  : 200px;
        height : 200px;
    }

    h1, h2 {
        font-weight : normal;
    }

    ul {
        list-style-type : none;
        padding         : 0;
    }

    li {
        display : inline-block;
        margin  : 0 10px;
    }

    a {
        color : #42b983;
    }
</style>
