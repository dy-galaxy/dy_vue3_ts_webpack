import axios from "./index";
import { RegisterParams, LoginParams } from "@/typings/index";

const baseUrl = "http://152.136.150.189:3000/vue/admin";

export const userRegister = (registerParams: RegisterParams) =>
    axios.post(baseUrl + "/user/register", registerParams);

export const userLogin = (LoginParams: LoginParams) =>
    axios.post(baseUrl + "/user/login", LoginParams);
