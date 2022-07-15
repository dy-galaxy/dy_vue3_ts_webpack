const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const tsImportPluginFactory = require("ts-import-plugin"); //不加会报警告，并且不渲染页面 [Vue warn]: Failed to mount component: template or render function not defined. 错误解决方法

module.exports = {
    mode: process.env.NODE_ENV == "production" ? "production" : "development", //默认是开发模块
    // 入口文件
    entry: "./src/main.ts",
    // 输出文件名称，默认输出到根目录
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    devtool: "source-map",
    devServer: {
        hot: true, //热更新插件
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 80,
        // static: "0.0.0.0:9528",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        // 配置需要编译的文件扩展名
        //当你加载一个文件的时候,没有指定扩展名的时候，会自动寻找哪些扩展名
        extensions: [".js", ".tsx", ".ts", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                use: [
                    {
                        loader: "vue-loader",
                    },
                ],
            },
            {
                test: /\.ts(x)?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                before: [tsImportPluginFactory({})],
                            }),
                            compilerOptions: {
                                module: "es2015",
                            },
                        },
                    },
                ],
                exclude: /node_module/,
            },
            {
                test: /\.js(x)*$/,
                loader: "babel-loader",
            },
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /.(less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: ["url-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new VueLoaderPlugin(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        new webpack.DefinePlugin({
            //vue 3.x 增加了两个编译时配置：__VUE_OPTIONS_API__和__VUE_PROD_DEVTOOLS__，适当地配置它们能提高 tree shaking 的效果。
            //因为程序不允许使用未定义的变量，所以目前使用 vue 3.x 会报错。
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        }),
    ],
};
