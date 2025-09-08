---
layout: home

hero:
  name: "你好，我是David"
  text: "全栈开发工程师"
  tagline: "专注于web技术栈，热爱分享技术心得，探索前沿技术开发"
  image:
    src: /hero-image.svg
    alt: David
  actions:
    - theme: brand
      text: 开始阅读
      link: /blog/
    - theme: alt
      text: 了解更多
      link: /about/

features:
  - icon: 🚀
    title: 前端开发
    details: 精通Vue.js、React、TypeScript等现代前端技术栈，擅长构建高性能的用户界面
  - icon: ⚡
    title: 后端开发
    details: 熟练掌握Node.js、Python、数据库设计，具备完整的后端开发能力
  - icon: 🛠️
    title: 工程化
    details: 专注于前端工程化、自动化部署、性能优化等技术领域
  - icon: 📝
    title: 技术分享
    details: 热爱技术写作，定期分享开发经验和最佳实践
  - icon: 🎯
    title: 项目管理
    details: 具备敏捷开发经验，能够高效协调团队完成项目目标
  - icon: 🌟
    title: 持续学习
    details: 保持对新技术的敏感度，不断学习和探索前沿技术
---

<style>
.VPHome {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>

## 最新文章

<div class="article-list">

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">Linux</span>
    <span>📅 2024-01-20</span>
    <span>👀 新发布</span>
  </div>
  <h3><a href="/blog/linux-nginx-setup">Linux环境下Nginx源码编译安装配置指南</a></h3>
  <p>详细介绍如何在Linux环境下通过源码编译的方式安装和配置Nginx，包括依赖安装、编译配置、服务启动等完整流程。</p>
  <div class="article-tags">
    <span>Linux</span>
    <span>Nginx</span>
    <span>服务器配置</span>
    <span>运维</span>
  </div>
</div>

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">TypeScript</span>
    <span>📅 2024-01-12</span>
    <span>👀 2.7万</span>
  </div>
  <h3><a href="/blog/typescript-best-practices">TypeScript在项目中的最佳实践</a></h3>
  <p>从基础语法到高级特性，全面介绍TypeScript在实际项目中的应用技巧和最佳实践。</p>
  <div class="article-tags">
    <span>TypeScript</span>
    <span>最佳实践</span>
  </div>
</div>

<div class="article-card">
  <div class="article-meta">
    <span class="article-tag">Vue.js</span>
    <span>📅 2024-01-10</span>
    <span>👀 1.8万</span>
  </div>
  <h3><a href="/blog/vue3-vite-setup">Vue3 + Vite新项目搭建</a></h3>
  <p>详细介绍如何使用Vue3和Vite搭建现代化的前端项目，包括项目配置、开发环境搭建等。</p>
  <div class="article-tags">
    <span>Vue3</span>
    <span>Vite</span>
    <span>项目搭建</span>
  </div>
</div>

</div>

<style scoped>
.article-list {
  margin-top: 2rem;
}

.article-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #4285f4;
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
</style>