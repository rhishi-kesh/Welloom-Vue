import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Registation from './pages/Registation.vue'
export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Registation,
        name: 'register'
    },
    {
        path: '/:pathMatch(.*)*',
        component: Home,
    }
];