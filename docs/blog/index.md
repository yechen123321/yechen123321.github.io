# 博客文章

欢迎来到我的技术博客！这里分享我在前端开发、后端技术、工程化实践等方面的经验和思考。

## 最新文章

### 前端开发

<div class="article-grid">

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">前端框架</span>
    <span>📅 2024-01-15</span>
    <span>👀 3.1万</span>
  </div>
  <h3><a href="./frontend-frameworks">前端框架对比和选择指南</a></h3>
  <p>深度分析当前主流前端框架的特点、适用场景和选择标准，帮助开发者做出最佳技术选型决策。涵盖Vue.js、React、Angular等主流框架的详细对比。</p>
  <div class="article-tags">
    <span>Vue.js</span>
    <span>React</span>
    <span>Angular</span>
    <span>技术选型</span>
  </div>
</div>

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">TypeScript</span>
    <span>📅 2024-01-12</span>
    <span>👀 2.7万</span>
  </div>
  <h3><a href="./typescript-best-practices">TypeScript在项目中的最佳实践</a></h3>
  <p>从基础语法到高级特性，全面介绍TypeScript在实际项目中的应用技巧和最佳实践。包括类型定义、泛型使用、配置优化等内容。</p>
  <div class="article-tags">
    <span>TypeScript</span>
    <span>最佳实践</span>
    <span>类型系统</span>
  </div>
</div>

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">Vue.js</span>
    <span>📅 2024-01-10</span>
    <span>👀 1.8万</span>
  </div>
  <h3><a href="./vue3-vite-setup">Vue3 + Vite新项目搭建</a></h3>
  <p>详细介绍如何使用Vue3和Vite搭建现代化的前端项目，包括项目配置、开发环境搭建、插件配置等完整流程。</p>
  <div class="article-tags">
    <span>Vue3</span>
    <span>Vite</span>
    <span>项目搭建</span>
  </div>
</div>

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">CSS</span>
    <span>📅 2024-01-08</span>
    <span>👀 1.5万</span>
  </div>
  <h3><a href="./css-grid-flexbox">CSS Grid与Flexbox对比</a></h3>
  <p>深入对比CSS Grid和Flexbox的特点、使用场景和最佳实践，帮助开发者选择合适的布局方案。</p>
  <div class="article-tags">
    <span>CSS</span>
    <span>Grid</span>
    <span>Flexbox</span>
    <span>布局</span>
  </div>
</div>

</div>

### 后端技术

<div class="article-grid">

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">Node.js</span>
    <span>📅 2024-01-05</span>
    <span>👀 2.2万</span>
  </div>
  <h3><a href="./nodejs-optimization">Node.js性能优化实践</a></h3>
  <p>分享Node.js应用性能优化的实战经验，包括内存管理、异步处理、数据库优化等方面的技巧。</p>
  <div class="article-tags">
    <span>Node.js</span>
    <span>性能优化</span>
    <span>后端开发</span>
  </div>
</div>

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">设计模式</span>
    <span>📅 2024-01-03</span>
    <span>👀 1.9万</span>
  </div>
  <h3><a href="./design-patterns">设计模式在前端开发中的应用</a></h3>
  <p>探讨常用设计模式在前端开发中的实际应用，包括观察者模式、工厂模式、单例模式等。</p>
  <div class="article-tags">
    <span>设计模式</span>
    <span>架构设计</span>
    <span>代码质量</span>
  </div>
</div>

</div>

## 文章分类

- **前端开发** (12篇)
  - Vue.js (5篇)
  - React (3篇)
  - TypeScript (4篇)
- **后端技术** (8篇)
  - Node.js (4篇)
  - Python (2篇)
  - 数据库 (2篇)
- **工程化** (6篇)
  - 构建工具 (3篇)
  - 部署运维 (2篇)
  - 性能优化 (1篇)
- **技术思考** (4篇)

<style scoped>
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 2rem 0;
}

.article-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #4285f4;
  height: fit-content;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(66, 133, 244, 0.15);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
  flex-wrap: wrap;
}

.article-tag {
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.article-card h3 {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.article-card h3 a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.article-card h3 a:hover {
  color: #4285f4;
}

.article-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.article-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.article-tags span {
  background: rgba(66, 133, 244, 0.1);
  color: #4285f4;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
  
  .article-meta {
    font-size: 12px;
  }
}
</style>