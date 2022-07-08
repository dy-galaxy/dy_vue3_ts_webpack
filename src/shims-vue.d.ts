/* eslint-disable */
// 如果不写, 在 main.ts中 import App from "./App.vue";会报错
declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}
