// 参考：https://vuex.vuejs.org/zh/guide/typescript-support.html
import { Store } from "vuex";

declare module "@vue/runtime-core" {
    // 声明自己的store state
    interface State {
        token: string;
    }

    // 为`this.$store`提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
