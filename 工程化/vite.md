# Vite 核心知识

## 基本概念

Vite（法语意为"快速"）是一个面向现代浏览器的下一代前端构建工具，其核心理念是利用浏览器原生 ES 模块导入能力，实现开发环境的快速冷启动和即时热更新。

## 核心特点

1. **开发服务器启动迅速**：Vite 直接启动开发服务器，无需打包。

2. **按需编译**：仅在浏览器请求对应模块时进行转换和按需编译。

3. **高效热更新**：基于 ESM 的热更新比基于打包器的热更新快得多。

4. **生产环境优化**：使用 Rollup 预构建依赖并进行生产构建。

5. **开箱即用**：内置对 TypeScript、JSX、CSS 等的支持，无需配置。

## 基本用法

### 创建项目

```bash
# 使用 NPM
npm create vite@latest my-app -- --template react

# 使用 Yarn
yarn create vite my-app --template react

# 使用 PNPM
pnpm create vite my-app -- --template react
```

支持的模板包括：vanilla、vue、react、preact、lit、svelte 等。

### 项目启动

```bash
# 安装依赖
npm install

# 开发环境启动
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 配置文件

Vite 使用 `vite.config.js` 文件进行配置：

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  // 配置插件
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],

  // 服务器选项
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  // 构建选项
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },

  // 解析选项
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // CSS 相关
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
```

## 依赖预构建

Vite 将会在首次启动开发服务器时自动预构建依赖，这个过程包括：

1. **CommonJS/UMD 转 ESM**：将 CommonJS 或 UMD 格式的依赖转换为 ESM 格式。

2. **合并依赖模块**：将由许多内部模块组成的 ESM 依赖项合并为单个模块，减少网络请求。

3. **缓存**：预构建结果会被缓存在 `node_modules/.vite` 目录中。

## 静态资源处理

Vite 对静态资源提供了内置支持：

```javascript
// 导入作为 URL
import imgUrl from "./img.png";

// 导入为字符串
import text from "./text.txt?raw";

// 导入资源为 Worker
import Worker from "./worker.js?worker";

// 按需导入资源
const imgUrl = new URL("./img.png", import.meta.url).href;
```

## 插件系统

Vite 插件是 Rollup 插件接口的扩展，具有一些 Vite 特有的配置项：

```javascript
// 自定义插件示例
function myPlugin() {
  return {
    name: "my-plugin",

    // Vite 特有钩子
    config(config) {
      // 修改配置
      return {
        /* 修改的配置 */
      };
    },

    configResolved(resolvedConfig) {
      // 存储最终解析的配置
    },

    configureServer(server) {
      // 配置开发服务器
      server.middlewares.use((req, res, next) => {
        // 自定义中间件
      });
    },

    transformIndexHtml(html) {
      // 转换 index.html
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>Modified Title</title>`
      );
    },

    // 通用 Rollup 钩子
    resolveId(id) {
      // 解析 ID
    },

    load(id) {
      // 加载模块内容
    },

    transform(code, id) {
      // 转换模块内容
    },
  };
}
```

常用官方插件包括：

- `@vitejs/plugin-vue`: Vue 单文件组件支持
- `@vitejs/plugin-react`: React 快速刷新支持
- `@vitejs/plugin-legacy`: 为旧浏览器提供兼容性支持

## 环境变量

Vite 使用 dotenv 从环境目录中的下列文件加载环境变量：

```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

要在客户端代码中使用环境变量，需要以 `VITE_` 为前缀：

```javascript
console.log(import.meta.env.VITE_API_URL);
```

## 构建优化

1. **CSS 代码分割**：每个异步块都会自动提取其导入的 CSS。

2. **预加载指令生成**：自动生成 `<link rel="modulepreload">` 指令。

3. **异步块加载优化**：异步块会自动并行加载。

4. **多页面应用支持**：内置支持多页面应用程序构建。

## 与 Webpack 比较

| 特性           | Vite               | Webpack                    |
| -------------- | ------------------ | -------------------------- |
| 开发服务器启动 | 极快（无需打包）   | 较慢（需要打包）           |
| 热更新速度     | 极快（精确到模块） | 较慢（通常重新构建整个块） |
| 配置复杂度     | 简单（开箱即用）   | 复杂（需要详细配置）       |
| 生态系统       | 较新但快速增长     | 成熟丰富                   |
| 生产构建       | 使用 Rollup        | 自身实现                   |
| 兼容性         | 现代浏览器为主     | 全面（包括旧浏览器）       |

## 最佳实践

1. **使用预构建功能**：对第三方库进行预构建可以提高性能。

2. **按规范组织代码**：遵循 ESM 标准有助于 Vite 进行优化。

3. **利用按需加载**：使用动态导入进行代码分割。

4. **合理使用别名**：配置路径别名可以简化导入。

5. **使用现代浏览器 API**：Vite 默认面向现代浏览器，可以利用最新特性。

## 常见问题及解决方案

1. **HMR 不工作**：

   - 检查组件是否正确导出
   - 检查是否使用了不支持 HMR 的 API

2. **构建性能问题**：
   - 使用 `build.reportCompressedSize: false` 跳过压缩大小报告
   - 考虑禁用源映射或使用更简单的源映射
3. **依赖预构建问题**：

   - 使用 `optimizeDeps.include` 强制添加依赖到预构建
   - 清除缓存：删除 `node_modules/.vite` 目录

4. **SSR 问题**：
   - 使用 `build.ssr: true` 构建 SSR 库
   - 针对 Node.js 和浏览器环境编写条件代码
