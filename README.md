#

npm i vue vue-router vuex axios --save
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
npm i typescript ts-loader style-loader css-loader less-loader less url-loader --save-dev
npm i postcss-loader autoprefixer -D
npm install -D unplugin-vue-components unplugin-auto-import  //element-plus按需加载

postcss-loader：处理css时自动加前缀
autoprefixer：决定添加哪些浏览器前缀到css中

Vue3.0在script setup里定义变量时提示×××is declared but its value is never read.Vetur的解决办法:
1.VSCode安装最新的Volar插件
2.禁用以前使用的Vetur插件，然后重启IDE即可解决问题。
