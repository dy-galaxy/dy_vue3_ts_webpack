import { SET_TOKEN, GET_TOKEN, DEL_TOKEN } from "./mutationTypes";

const mutations = {
    [SET_TOKEN]: (state: any, token: string) => {
        state.token = token;
        window.sessionStorage.setItem("token", token);
    },

    [DEL_TOKEN]: (state: any) => {
        state.token = null;
        window.sessionStorage.removeItem("token");
    },
};

export default mutations;
