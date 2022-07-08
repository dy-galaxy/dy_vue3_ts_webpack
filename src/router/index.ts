import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home/index.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About/index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(
                /* webpackChunkName: "register" */ "@/views/Register/index.vue"
            ),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
