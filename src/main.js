import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

// Create the router instance
const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

const app = createApp(App)
app.use(router)
app.mount('#app')
