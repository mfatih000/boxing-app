import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import $ from 'jquery'; // jQuery'yi import et
import 'bootstrap'; // Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './registerServiceWorker'

// window.$ = $; // jQuery'yi global olarak tanımla

const app = createApp(App);
app.use(router);
app.mount('#app');
