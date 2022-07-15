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

router.beforeEach((to, from, next) => {
    var token = window.sessionStorage.getItem("token");
    console.log(!token);
    if (!token) {
        // if(to.path === register)
        if (to.path !== "/login" && to.path !== "/register") {
            next({ path: "/login" });
        } else {
            next();
        }
    } else if (token && (to.path === "/login" || to.path === "/register")) {
        next("/");
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    if (from.path !== "/login" && from.path !== "/" && to.path === "/login") {
        window.location.reload();
    }
});

export default router;
