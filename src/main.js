import Vue from 'vue';
import App from './App.vue';
import ToggleButton from 'vue-js-toggle-button';
import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';
import FormAddMachine from './FormAddMachine.vue';

Vue.use(ToggleButton);

// Si le template devient complexe, cette facon de créer un composant devient limitée !
Vue.component('Machine', {
    props: ['machine'],
    template: '<li :class="{ active: machine.isOn }">{{machine.name}}' +
    '<br />' +
    '<toggle-button :value="machine.isOn" ' +
    '@change="machine.isOn = !machine.isOn"/>' +
    '</li>'
});

Vue.component('ButtonMachineIsOn', {
    template: '<toggle-button :value="hideOffMachines" ' +
    '@change="hideOffMachines = !hideOffMachines"/>'
});

Vue.component('Listing', MachinesList);

Vue.component('Mapping', MachinesMap);

Vue.component('FormAddMachine', FormAddMachine);

new Vue({
            el: '#app',
            render: h => h(App)
        });
