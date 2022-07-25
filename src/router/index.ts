import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import routers from "./routes";
import userRoutes from "./userRoutes";

const routes = [...routers, ...userRoutes];

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
