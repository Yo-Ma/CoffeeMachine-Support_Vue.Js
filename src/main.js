import Vue from 'vue';
import App from './App.vue';
import ToggleButton from 'vue-js-toggle-button';

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


new Vue({
            el: '#app',
            render: h => h(App)
        });
