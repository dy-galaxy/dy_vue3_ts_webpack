import { SET_TOKEN } from "./mutationTypes";

let actions = {
    [SET_TOKEN]: async (context: any, token: string) => {
        await context.commit("SET_TOKEN", token);
    },
};

export default actions;
