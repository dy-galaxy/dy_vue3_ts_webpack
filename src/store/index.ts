// 参考：https://vuex.vuejs.org/zh/guide/typescript-support.html#usestore-%E7%BB%84%E5%90%88%E5%BC%8F%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E
// import { InjectionKey } from "vue";
import { createStore } from "vuex";

import state from "./states";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";

const store = createStore({
    state: state,
    mutations: mutations,
    actions: actions,
    modules: modules,
});

export default store;
