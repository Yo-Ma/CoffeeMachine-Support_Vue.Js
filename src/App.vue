<template>
    <div id="app">
        <img src="./assets/coffee-bean.jpg">
        <h1>{{ msg }}</h1>
        <div>
            <ButtonMachineIsOn v-bind:testprop="hideOffMachines"
                               v-on:hideMachinesON="changeStatus()">
            </ButtonMachineIsOn>
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
        <FormAddMachine v-bind:list-machines="machines"> </FormAddMachine>
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
                machines: [
                    {id: 1, name: 'Machine 1', isOn: true},
                    {id: 2, name: 'Machine 2', isOn: false},
                    {id: 3, name: 'Machine 3', isOn: true}
                ]
            };
        },
        methods: {
            onMachinesListClick: function() {
              window.alert('La liste des machines est en cours de chargement...')
            },
            onMapClick: function () {
              window.alert('La carte de géolocalisation est en cours de chargement...')
            },
            changeStatus: function() {
              this.hideOffMachines = !this.hideOffMachines
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
