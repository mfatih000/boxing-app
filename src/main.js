import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

// Sadece prefix ve iconName olanları ekle
Object.values(solidIcons).filter(icon => icon.prefix && icon.iconName).forEach(icon => library.add(icon));

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
