const translations = {
  zh: {
    "nav.home": "首页",
    "nav.research": "研究",
    "nav.results": "成果",
    "nav.people": "团队",
    "nav.news": "新闻",
    "nav.join": "加入我们",
    "hero.eyebrow": "EQUIVA LAB · RESEARCH GROUP",
    "hero.title": "研究变化之中的<br /><span>不变性</span>",
    "hero.intro": "探索不同观测、模态与环境背后的等价表征。",
    "hero.cta": "探索我们的研究",
    "hero.invariant": "INVARIANT",
    "hero.visualCaption": "Different observations. Equivalent form.",
    "hero.scroll": "SCROLL TO EXPLORE",
    "section.about": "ABOUT",
    "about.title": "从不同的观测中，<br />识别<span>共同的结构。</span>",
    "about.p1": "同一个对象，会因视角、尺度、模态和环境而呈现不同形态。表象在迁移，规律却可能共享。",
    "about.p2": "Equiva Lab 试图识别这些变化背后的稳定结构，并把它们转化为可理解、可迁移、可验证的表征与方法。",
    "section.research": "RESEARCH",
    "research.title": "我们的<span>研究方向</span>",
    "research.intro": "我们围绕表征、变化与结构展开基础研究，并关注这些原则如何让智能系统在开放环境中保持可靠。",
    "research.r1.title": "变化下的不变学习",
    "research.r1.desc": "识别跨环境保持稳定的机制，让模型在分布迁移与未知条件下依然成立。",
    "research.r2.title": "等价表征与对齐",
    "research.r2.desc": "寻找不同模态、视角和坐标系之间可转换、可比较的共同表示。",
    "research.r3.title": "结构化世界建模",
    "research.r3.desc": "从复杂观测中恢复可组合的关系、动力学与因果结构。",
    "section.ideas": "RESULTS",
    "ideas.title": "研究<span>成果</span>",
    "ideas.intro": "精选近期发表成果，完整作者与出处请见成果档案。",
    "ideas.papers": "查看全部论文与出版物",
    "section.people": "PEOPLE",
    "people.title": "不同背景，<br />共同<span>探索。</span>",
    "people.body": "我们相信，重要的问题往往生长在学科边界。团队欢迎来自机器学习、数学、认知科学与复杂系统等不同背景的研究者。",
    "people.cta": "认识团队",
    "contact.eyebrow": "WORK WITH US",
    "contact.title": "和我们一起，<br /><span>探索不变性</span>",
    "contact.note": "2026 招新考核现已公布。我们也长期欢迎围绕共同问题的研究交流。",
    "contact.cta": "查看招新考核"
  },
  en: {
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.results": "Results",
    "nav.people": "Team",
    "nav.news": "News",
    "nav.join": "Join Us",
    "hero.eyebrow": "EQUIVA LAB · RESEARCH GROUP",
    "hero.title": "Studying invariance<br /><span>through change.</span>",
    "hero.intro": "Exploring equivalent representations across observations, modalities, and environments.",
    "hero.cta": "Explore our research",
    "hero.invariant": "INVARIANT",
    "hero.visualCaption": "Different observations. Equivalent form.",
    "hero.scroll": "SCROLL TO EXPLORE",
    "section.about": "ABOUT",
    "about.title": "Across different observations,<br />we identify <span>shared structure.</span>",
    "about.p1": "The same object takes different forms across viewpoints, scales, modalities, and environments. Appearances shift; structures may be shared.",
    "about.p2": "Equiva Lab identifies stable structures beneath these changes and turns them into representations and methods that are interpretable, transferable, and testable.",
    "section.research": "RESEARCH",
    "research.title": "Our <span>research</span>",
    "research.intro": "Our fundamental research revolves around representation, change, and structure—and how these principles can keep intelligent systems reliable in open environments.",
    "research.r1.title": "Invariant Learning under Change",
    "research.r1.desc": "Identify mechanisms that remain stable across environments, enabling models to hold under distribution shifts and unknown conditions.",
    "research.r2.title": "Representation & Alignment",
    "research.r2.desc": "Find common representations that are transformable and comparable across modalities, viewpoints, and coordinate systems.",
    "research.r3.title": "Structured World Models",
    "research.r3.desc": "Recover compositional relationships, dynamics, and causal structure from complex observations.",
    "section.ideas": "RESULTS",
    "ideas.title": "Research <span>results</span>",
    "ideas.intro": "Selected recent publications. See the archive for complete authorship and publication details.",
    "ideas.papers": "View all publications",
    "section.people": "PEOPLE",
    "people.title": "Different backgrounds.<br />Shared <span>exploration.</span>",
    "people.body": "We believe important questions often grow at disciplinary boundaries. We welcome researchers from machine learning, mathematics, cognitive science, complex systems, and beyond.",
    "people.cta": "Meet the team",
    "contact.eyebrow": "WORK WITH US",
    "contact.title": "Join us to<br /><span>explore invariance.</span>",
    "contact.note": "The 2026 recruitment assessment is now available. We also welcome ongoing research conversations around shared questions.",
    "contact.cta": "View recruitment"
  }
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...nav.querySelectorAll("a")];
const languageToggle = document.querySelector("[data-language-toggle]");
let currentLanguage = "zh";
try {
  currentLanguage = localStorage.getItem("equiva-language") || "zh";
} catch {
  currentLanguage = "zh";
}

function createIcon(name, className = "icon") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  svg.setAttribute("class", className);
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  use.setAttribute("href", `assets/icons.svg#${name}`);
  svg.append(use);
  return svg;
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "打开菜单");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const willOpen = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "关闭菜单" : "打开菜单");
  document.body.classList.toggle("menu-open", willOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

let activeNavFrame = 0;

function updateActiveNavigation() {
  const marker = window.scrollY + window.innerHeight * 0.38;
  const currentPage = document.body.dataset.page || "home";
  let activeLink = navLinks.find((link) => link.dataset.pageLink === currentPage) || null;

  if (currentPage === "home") {
    const sectionMap = [
      ["research", "#research"],
      ["results", "#ideas"],
      ["team", "#people"],
      ["news", ".home-news"],
      ["join", "#contact"]
    ];
    sectionMap.forEach(([page, selector]) => {
      const section = document.querySelector(selector);
      const link = navLinks.find((item) => item.dataset.pageLink === page);
      if (link && section && section.offsetTop <= marker) activeLink = link;
    });
  }

  navLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });

  activeNavFrame = 0;
}

window.addEventListener(
  "scroll",
  () => {
    if (!activeNavFrame) activeNavFrame = requestAnimationFrame(updateActiveNavigation);
  },
  { passive: true }
);
updateActiveNavigation();

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.textContent = translations[currentLanguage][key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (translations[currentLanguage][key]) element.innerHTML = translations[currentLanguage][key];
  });

  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    element.textContent = element.dataset[currentLanguage];
  });

  const labels = languageToggle.querySelectorAll("span");
  labels[0].classList.toggle("is-active", currentLanguage === "zh");
  labels[1].classList.toggle("is-active", currentLanguage === "en");
  languageToggle.setAttribute("aria-label", currentLanguage === "zh" ? "Switch to English" : "切换到中文");
  try {
    localStorage.setItem("equiva-language", currentLanguage);
  } catch {
    // Language switching still works when storage is unavailable.
  }
}

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

function renderSiteFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-main">
      <div class="footer-identity">
        <a class="brand footer-brand" href="index.html">
          <svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12.25"></circle><path d="M9 12.25h14M9 19.75h14"></path></svg>
          <span>Equiva Lab</span>
        </a>
        <p data-zh="研究变化之中的不变性，以及不同观测背后的等价表征。" data-en="Studying invariance through change and equivalent representations across observations.">研究变化之中的不变性，以及不同观测背后的等价表征。</p>
      </div>
      <div class="footer-links">
        <div><span class="footer-section-title"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="assets/icons.svg#flask"></use></svg><i data-zh="研究" data-en="Research">研究</i></span><a href="index.html#research" data-zh="研究方向" data-en="Directions">研究方向</a><a href="results.html" data-zh="研究成果" data-en="Results">研究成果</a></div>
        <div><span class="footer-section-title"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="assets/icons.svg#users"></use></svg><i data-zh="实验室" data-en="Lab">实验室</i></span><a href="team.html" data-zh="团队" data-en="Team">团队</a><a href="news.html" data-zh="新闻" data-en="News">新闻</a></div>
        <div><span class="footer-section-title"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="assets/icons.svg#user-plus"></use></svg><i data-zh="加入" data-en="Join">加入</i></span><a href="join.html" data-zh="加入我们" data-en="Join us">加入我们</a><a href="join.html#assessment" data-zh="招新考核" data-en="Recruitment">招新考核</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>INVARIANCE · EQUIVALENCE · REPRESENTATION</p>
      <p>© <span data-year></span> Equiva Lab</p>
    </div>`;
}

function renderHomeResults() {
  const list = document.querySelector("[data-home-results]");
  if (!list) return;

  const results = Array.isArray(window.EQUIVA_RESULTS) ? window.EQUIVA_RESULTS.slice(0, 3) : [];
  list.replaceChildren();

  results.forEach((result, index) => {
    const primaryLink = result.links?.[0]?.url || "results.html";
    const item = document.createElement("a");
    item.className = "home-result-item";
    item.href = primaryLink;
    item.setAttribute("aria-label", result.titleEn || result.titleZh || "Publication");
    if (/^https?:/.test(primaryLink)) {
      item.target = "_blank";
      item.rel = "noopener noreferrer";
    }

    const meta = document.createElement("div");
    meta.className = "home-result-meta";
    const ordinal = document.createElement("span");
    ordinal.textContent = String(index + 1).padStart(2, "0");
    const type = document.createElement("span");
    type.textContent = result.type || "PUBLICATION";
    meta.append(ordinal, type);

    const copy = document.createElement("div");
    copy.className = "home-result-copy";
    const title = document.createElement("h3");
    title.textContent = result.titleEn || result.titleZh || "";
    const details = document.createElement("div");
    details.className = "home-result-details";
    const venue = document.createElement("span");
    venue.textContent = result.venue || "";
    details.append(venue);

    if (result.award) {
      const distinction = document.createElement("span");
      distinction.className = "home-result-distinction";
      distinction.append(createIcon("award"));
      const distinctionText = document.createElement("i");
      distinctionText.textContent = result.award;
      distinction.append(distinctionText);
      details.append(distinction);
    }

    copy.append(title, details);
    const arrow = document.createElement("span");
    arrow.className = "home-result-arrow";
    arrow.append(createIcon("arrow-up-right"));
    item.append(meta, copy, arrow);
    list.append(item);
  });
}

function renderResultsArchive() {
  const list = document.querySelector("[data-results-list]");
  if (!list) return;

  const results = Array.isArray(window.EQUIVA_RESULTS) ? window.EQUIVA_RESULTS : [];
  const empty = document.querySelector("[data-results-empty]");
  empty?.toggleAttribute("hidden", results.length > 0);
  list.replaceChildren();

  if (!results.length) return;

  const orderedResults = [...results].sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
  const years = [...new Set(orderedResults.map((result) => result.year || "—"))];

  years.forEach((groupYear) => {
    const yearResults = orderedResults.filter((result) => (result.year || "—") === groupYear);
    const group = document.createElement("section");
    group.className = "result-year-group reveal";
    group.id = `publications-${groupYear}`;

    const yearHeader = document.createElement("header");
    yearHeader.className = "result-year-head";
    const yearHeaderInner = document.createElement("div");
    yearHeaderInner.className = "result-year-head-inner";
    const yearKicker = document.createElement("span");
    yearKicker.textContent = `YEAR / ${groupYear}`;
    const yearTitle = document.createElement("h3");
    yearTitle.textContent = groupYear;
    const yearCount = document.createElement("p");
    yearCount.dataset.zh = `${yearResults.length} 项成果`;
    yearCount.dataset.en = `${yearResults.length} ${yearResults.length === 1 ? "publication" : "publications"}`;
    yearCount.textContent = currentLanguage === "zh" ? yearCount.dataset.zh : yearCount.dataset.en;
    yearHeaderInner.append(yearKicker, yearTitle, yearCount);
    yearHeader.append(yearHeaderInner);

    const yearList = document.createElement("div");
    yearList.className = "result-year-list";

    yearResults.forEach((result, index) => {
      const article = document.createElement("article");
      article.className = `result-entry${result.award ? " has-distinction" : ""}`;

      const meta = document.createElement("div");
      meta.className = "result-entry-meta";
      const ordinal = document.createElement("span");
      ordinal.textContent = String(index + 1).padStart(2, "0");
      const type = document.createElement("span");
      type.textContent = result.type || "PUBLICATION";
      meta.append(ordinal, type);

      const content = document.createElement("div");
      content.className = "result-entry-content";
      const title = document.createElement("h3");
      title.dataset.zh = result.titleZh || result.titleEn || "";
      title.dataset.en = result.titleEn || result.titleZh || "";
      title.textContent = currentLanguage === "zh" ? title.dataset.zh : title.dataset.en;
      const authors = document.createElement("p");
      authors.className = "result-entry-authors";
      authors.textContent = result.authors || "";
      const venue = document.createElement("div");
      venue.className = "result-entry-venue";
      const venueText = document.createElement("span");
      venueText.textContent = result.venue || "";
      venue.append(venueText);

      if (result.award) {
        const distinction = document.createElement("span");
        distinction.className = "result-distinction";
        distinction.append(createIcon("award"));
        const distinctionText = document.createElement("i");
        distinctionText.textContent = result.award;
        distinction.append(distinctionText);
        venue.append(distinction);
      }

      content.append(title, authors, venue);

      const links = document.createElement("div");
      links.className = "result-entry-links";
      (result.links || []).forEach((item) => {
        const anchor = document.createElement("a");
        anchor.href = item.url;
        const label = document.createElement("span");
        label.dataset.zh = item.labelZh || item.label || "查看";
        label.dataset.en = item.labelEn || item.label || "View";
        label.textContent = currentLanguage === "zh" ? label.dataset.zh : label.dataset.en;
        anchor.append(label, createIcon("arrow-up-right"));
        if (/^https?:/.test(item.url)) {
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
        }
        links.append(anchor);
      });

      article.append(meta, content, links);
      yearList.append(article);
    });

    group.append(yearHeader, yearList);
    list.append(group);
  });
}

renderSiteFooter();
renderHomeResults();
renderResultsArchive();
applyLanguage(currentLanguage);

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6%" }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("load", () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) requestAnimationFrame(() => target.scrollIntoView());
});

const canvas = document.getElementById("equivalence-canvas");
if (canvas) {
const context = canvas.getContext("2d");
const heroVisual = canvas.closest(".hero-visual");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let canvasWidth = 0;
let canvasHeight = 0;
let pointerX = 0;
let pointerY = 0;
let frame = 0;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  canvasWidth = rect.width;
  canvasHeight = rect.height;
}

function drawObservation(cx, cy, radius, phase, mirror = false) {
  context.beginPath();
  const points = 72;

  for (let i = 0; i <= points; i += 1) {
    const angle = (i / points) * Math.PI * 2;
    const wave = Math.sin(angle * 3 + phase) * radius * 0.14 + Math.cos(angle * 5 - phase * 0.7) * radius * 0.06;
    const skew = 1 + Math.sin(phase * 0.35) * 0.13;
    const x = cx + Math.cos(angle) * (radius + wave) * (mirror ? 0.78 : skew);
    const y = cy + Math.sin(angle) * (radius + wave) * (mirror ? skew : 0.8);
    if (i === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }

  context.closePath();
  context.strokeStyle = "rgba(23, 24, 22, 0.48)";
  context.lineWidth = 1;
  context.stroke();
}

function drawNodes(cx, cy, radius, phase, offset) {
  for (let i = 0; i < 7; i += 1) {
    const angle = (i / 7) * Math.PI * 2 + phase * 0.1 + offset;
    const r = radius * (0.68 + 0.2 * Math.sin(phase + i * 1.7));
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r * 0.78;
    context.beginPath();
    context.arc(x, y, i === 0 ? 3.2 : 2.1, 0, Math.PI * 2);
    context.fillStyle = i === 0 ? "#171816" : "rgba(23, 24, 22, 0.42)";
    context.fill();
  }
}

function drawFrame(time = 0) {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  const t = prefersReducedMotion.matches ? 2.4 : time * 0.00055;
  const centerY = canvasHeight * 0.5 + pointerY * 8;
  const leftX = canvasWidth * 0.22 + pointerX * 7;
  const rightX = canvasWidth * 0.78 - pointerX * 7;
  const radius = Math.min(canvasWidth * 0.15, canvasHeight * 0.18);

  context.save();
  context.setLineDash([2, 7]);
  context.lineWidth = 1;
  context.strokeStyle = "rgba(23, 24, 22, 0.12)";
  for (let i = -2; i <= 2; i += 1) {
    const y1 = centerY + i * 28 + Math.sin(t + i) * 10;
    const y2 = centerY + i * 24 + Math.cos(t * 0.7 + i) * 8;
    context.beginPath();
    context.moveTo(leftX + radius * 0.7, y1);
    context.bezierCurveTo(canvasWidth * 0.4, y1, canvasWidth * 0.6, y2, rightX - radius * 0.7, y2);
    context.stroke();
  }
  context.restore();

  drawObservation(leftX, centerY, radius, t);
  drawObservation(rightX, centerY, radius, t + 1.75, true);
  drawNodes(leftX, centerY, radius, t, 0);
  drawNodes(rightX, centerY, radius, -t, 0.45);

  context.save();
  context.translate(leftX, centerY);
  context.rotate(t * 0.08);
  context.strokeStyle = "rgba(23, 24, 22, 0.14)";
  context.strokeRect(-radius * 1.1, -radius * 1.1, radius * 2.2, radius * 2.2);
  context.restore();

  context.save();
  context.translate(rightX, centerY);
  context.rotate(-t * 0.06 + 0.2);
  context.strokeStyle = "rgba(23, 24, 22, 0.14)";
  context.beginPath();
  for (let i = 0; i < 6; i += 1) {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle) * radius * 1.15;
    const y = Math.sin(angle) * radius * 1.15;
    if (i === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
  context.stroke();
  context.restore();

  if (!prefersReducedMotion.matches) frame = requestAnimationFrame(drawFrame);
}

canvas.addEventListener("pointermove", (event) => {
  const rect = canvas.getBoundingClientRect();
  pointerX = (event.clientX - rect.left) / rect.width - 0.5;
  pointerY = (event.clientY - rect.top) / rect.height - 0.5;
});

canvas.addEventListener("pointerleave", () => {
  pointerX = 0;
  pointerY = 0;
});

heroVisual.addEventListener("pointermove", (event) => {
  const rect = heroVisual.getBoundingClientRect();
  const x = Math.max(45, Math.min(96, ((event.clientX - rect.left) / rect.width) * 100));
  const y = Math.max(4, Math.min(96, ((event.clientY - rect.top) / rect.height) * 100));
  heroVisual.style.setProperty("--mx", `${x}%`);
  heroVisual.style.setProperty("--my", `${y}%`);
});

heroVisual.addEventListener("pointerleave", () => {
  heroVisual.style.removeProperty("--mx");
  heroVisual.style.removeProperty("--my");
});

window.addEventListener("resize", () => {
  resizeCanvas();
  if (prefersReducedMotion.matches) drawFrame();
});
resizeCanvas();
cancelAnimationFrame(frame);
drawFrame();
}
