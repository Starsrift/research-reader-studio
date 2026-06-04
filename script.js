const designs = [
  {
    title: "AI Product Console",
    category: "AI Tool",
    tags: ["AI Tool", "Dashboard", "Motion"],
    summary: "适合大模型产品控制台：信息密度高，主行动清晰，适合拆成指标卡、任务队列和模型状态组件。",
    stack: "React / Tailwind / Chart",
    accent: "#b9ddd6",
    bg: "#0e766f",
    ink: "#f7f5ef",
  },
  {
    title: "Open Source Landing",
    category: "SaaS",
    tags: ["SaaS", "Landing", "GitHub"],
    summary: "围绕开源项目介绍、价值主张、安装命令和社区贡献路径构建，适合做 GitHub 项目主页。",
    stack: "Astro / MDX / CSS",
    accent: "#f0c36b",
    bg: "#252823",
    ink: "#fffdf7",
  },
  {
    title: "Design Notes Gallery",
    category: "Portfolio",
    tags: ["Portfolio", "Gallery", "Cards"],
    summary: "小红书式浏览体验的工程版：卡片优先、标签筛选、快速收藏，适合作为设计学习笔记库。",
    stack: "HTML / CSS / JS",
    accent: "#f2b7ad",
    bg: "#d74f3f",
    ink: "#fffdf7",
  },
  {
    title: "Docs With Examples",
    category: "Docs",
    tags: ["Docs", "Code", "Layout"],
    summary: "把组件设计、实现说明、代码片段和设计原则放在同一个阅读流里，适合沉淀技术文档。",
    stack: "Nextra / MDX / Shiki",
    accent: "#b8c7ed",
    bg: "#39435f",
    ink: "#fffdf7",
  },
  {
    title: "Pricing Study Board",
    category: "SaaS",
    tags: ["SaaS", "Pricing", "UX"],
    summary: "专门拆解定价页：套餐差异、推荐方案、信任信息和 FAQ 的视觉层级。",
    stack: "Next.js / CSS Grid",
    accent: "#cde3ae",
    bg: "#2e8a57",
    ink: "#fffdf7",
  },
  {
    title: "Research Project Page",
    category: "Portfolio",
    tags: ["Portfolio", "Research", "Demo"],
    summary: "适合你的 AI 系统方向项目：论文摘要、实验结果、代码入口、Demo 视频和复现实验说明。",
    stack: "Vite / Vanilla JS",
    accent: "#d9c38c",
    bg: "#6f5d3f",
    ink: "#fffdf7",
  },
];

const cardGrid = document.querySelector("#cardGrid");
const filterButtons = document.querySelectorAll(".filter");

function renderCards(filter = "all") {
  const visibleDesigns = filter === "all" ? designs : designs.filter((item) => item.category === filter);

  cardGrid.innerHTML = visibleDesigns
    .map(
      (design) => `
        <article class="design-card">
          <div
            class="preview"
            style="--preview-bg: ${design.bg}; --preview-ink: ${design.ink}; --preview-accent: ${design.accent};"
          >
            <div class="preview-window">
              <div class="window-bar"><span></span><span></span><span></span></div>
              <div class="preview-title"></div>
              <div class="preview-lines"><span></span><span></span><span></span></div>
              <div class="preview-blocks"><span></span><span></span></div>
            </div>
          </div>
          <div class="card-body">
            <div class="meta-row">
              ${design.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${design.title}</h3>
            <p>${design.summary}</p>
            <div class="card-links">
              <a href="#notes">Read Notes</a>
              <a href="#weekend">${design.stack}</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCards(button.dataset.filter);
  });
});

renderCards();
