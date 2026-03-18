import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Registation from './pages/Registation.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import PasswordReset from './pages/PasswordReset.vue'
import OTPVerify from './pages/OTPVerify.vue'
import UserDashboard from './pages/UserDashboard.vue'
import DynamicPage from './pages/DynamicPage.vue'

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
        path: '/otp-verify',
        component: OTPVerify,
        name: 'otp-verify'
    },
    {
        path: '/dashboard',
        component: UserDashboard,
        name: 'dashboard'
    },
    {
        path: '/dynamic/:page',
        component: DynamicPage,
        name: 'dynamic-page'
    },
    {
        path: '/:pathMatch(.*)*',
        component: Home,
    }
];