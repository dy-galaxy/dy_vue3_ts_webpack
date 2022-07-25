<template>
    <div class="register">
        <el-form :model="ruleForm" ref="formRef" :rules="rules">
            <el-form-item label="username" prop="username">
                <el-input v-model="ruleForm.username" />
            </el-form-item>
            <el-form-item label="password" prop="password">
                <el-input
                    v-model="ruleForm.password"
                    type="password"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(formRef)"
                    >提交</el-button
                >
                <el-button @click="resetForm(formRef)" class="resetButton"
                    >重置</el-button
                >
                <el-button type="primary" @click="onTc">自动</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// import { useStore } from "vuex";
import type { FormInstance } from "element-plus";

import router from "@/router";
import store from "@/store";
import { userLogin } from "@/api/https";
import { LoginParams } from "@/typings";

// const store = useStore();

const formRef = ref<FormInstance>();

const ruleForm: LoginParams = reactive({
    username: "",
    password: "",
});

const rules = reactive({
    username: [
        {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
        },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
    password: [
        {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
        },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid) => {
        if (valid) {
            let { data: res } = await userLogin(ruleForm);
            // store.commit("SET_TOKEN", res.token);
            store.dispatch("SET_TOKEN", res.token);
            console.log(res.code);
            if (res.code === 0) {
                router.push({
                    path: "/",
                });
            }
        } else {
            console.log("error submit");
            return false;
        }
    });
};
const onTc = () => {
    ruleForm.username = "admin";
    ruleForm.password = "admin";
};
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
<style lang="less" scoped>
.register {
    height: 100%;
}
.el-form {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.resetButton {
    margin: 0 26%;
}
</style>
