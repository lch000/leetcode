# Webpack 核心知识

## 基本概念

Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## 核心概念

1. **入口(Entry)**：指示 webpack 应该使用哪个模块作为构建其内部依赖图的开始。
2. **输出(Output)**：告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件。

3. **加载器(Loader)**：让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。

4. **插件(Plugins)**：用于执行范围更广的任务，从打包优化和压缩，到重新定义环境中的变量。

5. **模式(Mode)**：通过配置 `development`, `production` 或 `none` 来设置 webpack 相应环境的内置优化。

## 常用配置示例

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 入口
  entry: "./src/index.js",

  // 输出
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  // 模式
  mode: "production",

  // 模块
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  // 优化
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  // 开发服务器
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
  },
};
```

## 模块解析

Webpack 使用增强的解析规则来解析模块。它可以解析三种文件路径：

1. **绝对路径**：`import '/home/me/file'`
2. **相对路径**：`import './file'`
3. **模块路径**：`import 'module/lib/file'`

## Tree Shaking

Tree Shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)，它依赖于 ES2015 模块系统中的静态结构特性，例如 `import` 和 `export`。

## 代码分割

代码分割是 webpack 中最引人注目的特性之一。它允许你将代码分割成不同的包，然后可以按需加载或并行加载这些文件。

常用的代码分割方法：

1. **入口起点**：使用 `entry` 配置手动地分离代码
2. **动态导入**：通过模块中的内联函数调用来分离代码
3. **SplitChunksPlugin**：提取公共依赖项

## 懒加载

懒加载或按需加载是优化网页或应用程序的一种方式，这种方式能够减少页面初始加载时间、减少加载的代码量。

```javascript
button.addEventListener("click", () => {
  import(/* webpackChunkName: "print" */ "./print").then((module) => {
    const printMe = module.default;
    printMe();
  });
});
```

## 缓存

Webpack 可以通过使用 `[contenthash]` 等占位符来确保文件名在文件内容变化时更新，从而利用浏览器缓存。

## 性能优化

1. **减少解析**：

   - 使用 `include` 明确指定要解析的文件
   - 使用 `noParse` 忽略大型库

2. **减少插件数量**：选择性地应用插件

3. **使用 DllPlugin**：为更改不频繁的代码单独创建一个 bundle

4. **使用 thread-loader**：将耗时的 loader 操作并行化

5. **使用 cache-loader**：为耗时的 loader 操作启用缓存

## Webpack 5 新特性

1. **持久化缓存**：提高构建速度
2. **Tree Shaking 增强**：更好的检测未使用的导出
3. **模块联邦**：允许多个独立的构建组合在一起
4. **全新的资源模块类型**：替代 file-loader、url-loader 和 raw-loader
5. **Node.js polyfills 自动停用**：提升构建性能和兼容性

## 常见问题及解决方案

1. **构建速度慢**：

   - 使用 `speed-measure-webpack-plugin` 分析每个 loader 和插件花费的时间
   - 使用 `webpack-bundle-analyzer` 可视化包的大小

2. **包体积过大**：

   - 代码分割
   - 使用 `compression-webpack-plugin` 压缩资源文件
   - 删除未使用的代码（Tree Shaking）
   - 动态导入

3. **热更新不工作**：
   - 检查 devServer 配置
   - 确保模块正确导出
