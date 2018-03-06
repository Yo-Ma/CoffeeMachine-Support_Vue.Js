import Vue from 'vue';
import App from './App.vue';
import ToggleButton from 'vue-js-toggle-button';
import Machines from './Machines.vue';
import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';
import FormAddMachine from './FormAddMachine.vue';
import ButtonMachineIsOn from './ButtonMachineIsOn';

Vue.use(ToggleButton);

Vue.component('Machine', Machines);

Vue.component('ButtonMachineIsOn', ButtonMachineIsOn);

Vue.component('Listing', MachinesList);

Vue.component('Mapping', MachinesMap);

Vue.component('FormAddMachine', FormAddMachine);

new Vue({
            el: '#app',
            render: h => h(App)
        });
