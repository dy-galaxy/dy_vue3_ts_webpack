<template>
    <div>
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
        </el-row>
    </div>
</template>
<script lang="ts">
import { useStore } from "@/store";
export default {
    setup() {
        const store = useStore();
        let token = store.state.token;
        console.log(token);
    },
};
</script>
