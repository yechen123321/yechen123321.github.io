import { defineConfig } from "vitepress";

export default defineConfig({
  title: "David的博客",
  description: "全栈开发工程师，专注于web技术栈，热爱分享技术心得",
  lang: "zh-CN",
  base: "/",
  ignoreDeadLinks: true,
  markdown: {
    html: true,
  },
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blog/" },
      { text: "项目", link: "/projects/" },
      { text: "生活点滴", link: "/life/" },
      { text: "关于", link: "/about/" },
      { text: "联系", link: "/contact/" },
    ],
    sidebar: {
      "/blog/": [
        {
          text: "最新文章",
          items: [
            {
              text: "前端框架对比和选择指南",
              link: "/blog/frontend-frameworks",
            },
            {
              text: "TypeScript在项目中的最佳实践",
              link: "/blog/typescript-best-practices",
            },
            { text: "Vue3 + Vite新项目搭建", link: "/blog/vue3-vite-setup" },
            { text: "CSS Grid与Flexbox对比", link: "/blog/css-grid-flexbox" },
            { text: "Node.js性能优化实践", link: "/blog/nodejs-optimization" },
            {
              text: "设计模式在前端开发中的应用",
              link: "/blog/design-patterns",
            },
          ],
        },
      ],
      "/projects/": [
        {
          text: "项目展示",
          items: [
            { text: "个人博客系统", link: "/projects/blog-system" },
            { text: "在线代码编辑器", link: "/projects/code-editor" },
            { text: "任务管理应用", link: "/projects/task-manager" },
          ],
        },
      ],
      "/life/": [
        {
          text: "生活点滴",
          items: [
            { text: "山间徒步之旅", link: "/life/travel-mountain" },
            { text: "《深度工作》读后感", link: "/life/book-thinking" },
            { text: "爵士乐的魅力", link: "/life/music-jazz" },
            { text: "新年料理尝试", link: "/life/cooking-adventure" },
            { text: "合肥博物馆参观记", link: "/life/hefei-museum" },
            { text: "陶喆演唱会现场体验", link: "/life/david-tao-concert" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com" },
      { icon: "twitter", link: "https://twitter.com" },
    ],
    footer: {
      message: `
        <div class="custom-footer">
          <div class="footer-section">
            <div class="footer-logo">
              <span class="logo-icon">DV</span>
              <span class="logo-text">David的博客</span>
            </div>
            <p class="footer-description">分享前端开发、全栈技术和编程思考，让我们一起探索技术的无限可能。</p>
          </div>
          <div class="footer-section">
            <h4>快速链接</h4>
            <ul class="footer-links">
              <li><a href="/about/">关于我</a></li>
              <li><a href="/projects/">项目展示</a></li>
              <li><a href="/about/#技能专长">技术栈</a></li>
              <li><a href="/contact/">联系方式</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>法律信息</h4>
            <ul class="footer-links">
              <li><a href="#">隐私政策</a></li>
              <li><a href="#">使用条款</a></li>
              <li><a href="#">Cookie政策</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 David的博客. 保留所有权利.</p>
        </div>
      `,
      copyright: "",
    },
    search: {
      provider: "local",
    },
  },
});
