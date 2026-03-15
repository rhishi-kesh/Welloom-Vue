import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Registation from './pages/Registation.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import PasswordReset from './pages/PasswordReset.vue'
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
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'forgot-password'
    },
    {
        path: '/password-reset',
        component: PasswordReset,
        name: 'password-reset'
    },
    {
        path: '/:pathMatch(.*)*',
        component: Home,
    }
];