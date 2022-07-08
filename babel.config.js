// babel.config.js
module.exports = {
    // @babel/preset-env: 根据指定的执行环境提供语法装换
    presets: [["@babel/preset-env"], "@babel/preset-typescript"],
    plugins: [["@vue/babel-plugin-jsx"]],
};
