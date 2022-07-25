import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home/index.vue"),
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

export default routes;
