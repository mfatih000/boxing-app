import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Ana ekran
import Workout from '../views/Workout.vue';  // Dosya adıyla aynı olacak
import ComboAdd from '../views/ComboAdd.vue'; // Dosya adıyla aynı olacak


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workout',
    name: 'Workout',
    component: Workout
  },
  {
    path: '/combo-add',
    name: 'ComboAdd',
    component: ComboAdd
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
