// 参考：https://vuex.vuejs.org/zh/guide/typescript-support.html#usestore-%E7%BB%84%E5%90%88%E5%BC%8F%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

// 为 store state 声明类型
export interface State {
    token: string;
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        token: "",
    },
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key);
}
