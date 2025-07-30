---
title: Vue3 + Vite新项目搭建
date: 2024-01-10
tags: [Vue3, Vite, 项目搭建]
description: 详细介绍如何使用Vue3和Vite搭建现代化的前端项目，包括项目配置、开发环境搭建等
---

# Vue3 + Vite新项目搭建

<div class="article-header">
  <div class="article-meta">
    <span class="article-tag">Vue.js</span>
    <span>📅 2024年1月10日</span>
    <span>👀 1.8万次阅读</span>
    <span>⏱️ 12分钟阅读</span>
  </div>
</div>

Vue 3配合Vite构建工具，为现代前端开发提供了极佳的开发体验。本文将详细介绍如何从零开始搭建一个完整的Vue3 + Vite项目。

## 环境准备

### 系统要求

- Node.js 版本 >= 16.0.0
- npm 版本 >= 7.0.0 或 yarn >= 1.22.0
- 现代浏览器支持

### 检查环境

```bash
# 检查Node.js版本
node --version

# 检查npm版本
npm --version

# 如果版本过低，建议使用nvm管理Node.js版本
# Windows用户可以使用nvm-windows
# macOS/Linux用户可以使用nvm
```

## 项目初始化

### 使用Vite创建项目

```bash
# 使用npm
npm create vue@latest my-vue-project

# 使用yarn
yarn create vue my-vue-project

# 使用pnpm
pnpm create vue my-vue-project
```

### 配置选项说明

创建项目时，会出现以下配置选项：

```
✔ Project name: … my-vue-project
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

**推荐配置：**
- TypeScript: ✅ Yes（强类型支持）
- JSX Support: ❌ No（除非需要JSX语法）
- Vue Router: ✅ Yes（单页应用必备）
- Pinia: ✅ Yes（现代状态管理）
- Vitest: ✅ Yes（单元测试）
- E2E Testing: ❌ No（可后续添加）
- ESLint: ✅ Yes（代码质量）
- Prettier: ✅ Yes（代码格式化）

### 安装依赖

```bash
cd my-vue-project
npm install
```

## 项目结构解析

```
my-vue-project/
├── public/                 # 静态资源目录
│   └── favicon.ico
├── src/                    # 源代码目录
│   ├── assets/            # 资源文件
│   ├── components/        # 组件目录
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia状态管理
│   ├── views/             # 页面组件
│   ├── App.vue            # 根组件
│   └── main.ts            # 入口文件
├── tests/                 # 测试文件
├── .eslintrc.cjs          # ESLint配置
├── .prettierrc.json       # Prettier配置
├── index.html             # HTML模板
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript配置
├── vite.config.ts         # Vite配置
└── vitest.config.ts       # Vitest配置
```

## 核心配置文件详解

### Vite配置 (vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@views': resolve(__dirname, 'src/views'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
```

### TypeScript配置 (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@views/*": ["src/views/*"],
      "@utils/*": ["src/utils/*"],
      "@assets/*": ["src/assets/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 开发环境配置

### ESLint配置优化

```javascript
// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'prefer-const': 'error',
    'no-var': 'error'
  }
}
```

### Prettier配置

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80,
  "endOfLine": "lf",
  "vueIndentScriptAndStyle": true
}
```

## 常用插件安装

### UI组件库

```bash
# Element Plus
npm install element-plus
npm install @element-plus/icons-vue

# Ant Design Vue
npm install ant-design-vue

# Naive UI
npm install naive-ui
```

### 工具库

```bash
# 工具函数库
npm install lodash-es
npm install @types/lodash-es -D

# 日期处理
npm install dayjs

# HTTP请求
npm install axios

# 图标库
npm install @iconify/vue
```

### 开发工具

```bash
# 自动导入
npm install unplugin-auto-import -D
npm install unplugin-vue-components -D

# CSS预处理器
npm install sass -D

# 环境变量类型支持
npm install @types/node -D
```

## 项目配置优化

### 自动导入配置

```typescript
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      resolvers: [ElementPlusResolver()],
      dts: true
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true
    })
  ]
})
```

### 环境变量配置

```bash
# .env.development
VITE_APP_TITLE=开发环境
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_ENV=development

# .env.production
VITE_APP_TITLE=生产环境
VITE_API_BASE_URL=https://api.example.com
VITE_APP_ENV=production
```

```typescript
// src/types/env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## 核心功能实现

### 路由配置

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title || '页面'} - ${import.meta.env.VITE_APP_TITLE}`
  next()
})

export default router
```

### 状态管理

```typescript
// src/stores/user.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref<User | null>(null)
  const token = ref<string>('')
  
  // 计算属性
  const isLoggedIn = computed(() => !!token.value)
  const userName = computed(() => user.value?.name || '游客')
  
  // 方法
  function setUser(userData: User) {
    user.value = userData
  }
  
  function setToken(tokenValue: string) {
    token.value = tokenValue
    localStorage.setItem('token', tokenValue)
  }
  
  function logout() {
    user.value = null
    token.value = ''
    localStorage.removeItem('token')
  }
  
  // 初始化
  function init() {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      token.value = savedToken
    }
  }
  
  return {
    user,
    token,
    isLoggedIn,
    userName,
    setUser,
    setToken,
    logout,
    init
  }
})

interface User {
  id: number
  name: string
  email: string
}
```

### HTTP请求封装

```typescript
// src/utils/request.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useUserStore } from '@/stores/user'

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, data, message } = response.data
    
    if (code === 200) {
      return data
    } else {
      console.error('API Error:', message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    if (error.response?.status === 401) {
      const userStore = useUserStore()
      userStore.logout()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default service
```

## 开发脚本配置

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "test:unit": "vitest",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/",
    "type-check": "vue-tsc --noEmit"
  }
}
```

## 性能优化建议

### 1. 代码分割

```typescript
// 路由懒加载
const routes = [
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
]

// 组件懒加载
const LazyComponent = defineAsyncComponent(() => import('@/components/Heavy.vue'))
```

### 2. 构建优化

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['element-plus']
        }
      }
    }
  }
})
```

### 3. 开发体验优化

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: false // 关闭错误遮罩
    }
  },
  esbuild: {
    drop: ['console', 'debugger'] // 生产环境移除console
  }
})
```

## 常见问题解决

### 1. 路径别名不生效

确保同时配置了`vite.config.ts`和`tsconfig.json`中的路径映射。

### 2. 组件自动导入失败

检查`unplugin-auto-import`和`unplugin-vue-components`的配置是否正确。

### 3. 环境变量获取不到

确保环境变量以`VITE_`开头，并且在`env.d.ts`中声明了类型。

## 总结

Vue3 + Vite的组合为现代前端开发提供了：

- **极快的启动速度** - Vite的冷启动速度比Webpack快10-100倍
- **热更新体验** - 修改代码后几乎瞬间看到效果
- **现代化工具链** - 原生ES模块、TypeScript支持
- **优秀的开发体验** - 丰富的插件生态、完善的工具支持

通过本文的配置，你可以快速搭建一个功能完整、开发体验优秀的Vue3项目。记住，好的项目结构和配置是成功的一半！

---

**相关文章推荐：**
- [前端框架对比和选择指南](/blog/frontend-frameworks)
- [TypeScript在项目中的最佳实践](/blog/typescript-best-practices)
- [Vue3 Composition API深度解析](/blog/vue3-composition-api)

<style scoped>
.article-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;
  flex-wrap: wrap;
}

.article-tag {
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

code {
  background: rgba(66, 133, 244, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

pre {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  border-left: 4px solid #4285f4;
}

pre code {
  background: transparent;
  padding: 0;
}
</style>