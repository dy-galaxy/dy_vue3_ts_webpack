import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class $axios {
    private readonly baseUrl: string;
    private readonly timeout: number;
    constructor(baseUrl: string = "") {
        // this.baseUrl = baseUrl;
        this.baseUrl =
            // "http://152.136.150.189:3000/vue/admin";
            process.env.NODE_ENV !== "production" ? baseUrl : "/";
        this.timeout = 3000;
        // console.log(this.baseUrl);
    }
    setInterceptor(instance: AxiosInstance) {
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            const token = window.sessionStorage.getItem("token");
            if (token) {
                (config.headers = config.headers || {}).token = token;
            }
            return config;
        });
        instance.interceptors.response.use(
            (res: any) => {
                if (res.status === 200) {
                    return Promise.resolve(res.data);
                } else {
                    return Promise.reject(res);
                }
            },
            (err) => {
                return Promise.reject(err);
            }
        );
    }
    mergeOptions(options: any) {
        // console.log("mergeOption" + this.baseUrl);
        return {
            baseUrl: this.baseUrl,
            timeout: this.timeout,
            ...options,
        };
    }
    request(options: any) {
        const instance = axios.create();
        const opts = this.mergeOptions(options);
        this.setInterceptor(instance);
        console.log("request" + JSON.stringify(options));
        return instance(opts);
    }
    get(url: string, config: any = {}) {
        return this.request({
            method: "get",
            url: url,
            ...config,
        });
    }
    post(url: string, data: any) {
        // console.log("post:" + url);
        return this.request({
            method: "post",
            url: url,
            data,
        });
    }
}
// let a = new $axios
export default new $axios();
