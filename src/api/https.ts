import axios from "./index";
import { RegisterParams } from "@/typings/index";

const baseUrl = "http://152.136.150.189:3000/vue/admin";

export const userRegister = (registerParams: RegisterParams) =>
    axios.post(baseUrl + "/user/register", registerParams);
