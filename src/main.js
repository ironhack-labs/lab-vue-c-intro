import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue';
import InfoCards from './components/InfoCards.vue';

import './assets/main.css'

const app = createApp(App);

app.mount('#app');

app.component('NavBar', NavBar)
   .component('InfoCards', InfoCards);
