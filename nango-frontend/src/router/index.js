import { createRouter, createWebHistory } from "vue-router"

// Páginas
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"
import Home from "../pages/Home.vue"
import Profile from "../pages/Profile.vue"
import Support from "../pages/Support.vue"

const routes = [
    { path: "/", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/home", name: "Home", component: Home },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/support", name: "Support", component: Support },
    { path: "/:pathMatch(.*)*", redirect: "/" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
