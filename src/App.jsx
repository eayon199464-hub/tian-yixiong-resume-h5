import { useCallback, useEffect, useRef, useState } from "react";

const EXPERIENCES = [
  {
    year: "2017",
    range: "2017.08—2020.07",
    company: "OGILVY",
    companyCn: "奥美集团",
    role: "客户执行 / 资深客户执行",
    roleEn: "Account Executive / Senior Account Executive",
    headline: "从品牌传播进入汽车数字体验",
    headlineEn: "Entered automotive digital experience through brand communication",
    details: [
      "推进奔驰官网 OneWeb 生命周期运营、站点架构与新功能部署，并统筹 AMG 车型上市的双微、H5 与官网内容。",
      "编制经销商操作手册与审计体系文件，建立问题响应机制并支持经销商培训。",
      "对接 Audi Global 团队，参与奥迪官网、Microsoft Surface 等项目比稿，并协助 SEO/SEM 与 Social Listening。",
    ],
    detailsEn: [
      "Supported Mercedes-Benz OneWeb lifecycle operations, site architecture and feature releases, alongside AMG launch content across social, H5 and web.",
      "Created dealer operating manuals and audit documents, established an issue-response mechanism and supported dealer training.",
      "Collaborated with Audi Global, contributed to Audi web and Microsoft Surface pitches, and supported SEO/SEM and social listening.",
    ],
    facts: ["问题解决时效 -30%", "关键页面跳出率 -15%", "页面体验与性能 +18%"],
    factsEn: ["Issue resolution time -30%", "Key-page bounce rate -15%", "Page experience +18%"],
    tags: ["OneWeb", "Brand Experience", "Global Collaboration"],
  },
  {
    year: "2020",
    range: "2020—2021",
    company: "INTERONE",
    companyCn: "北京天一国际广告有限公司",
    role: "客户经理助理",
    roleEn: "Assistant Account Manager",
    headline: "把一次门店创意，打磨成完整的视觉体系",
    headlineEn: "Turned a retail concept into a complete visual system",
    details: [
      "带领创意团队打磨 BMW JOYCUBE 品牌体验店的创意内容与视觉表达，从概念方向、内容主题到视觉语言持续迭代。",
      "形成可用于门店及后续传播延展的完整创意视觉体系，并协同 Social 团队完成多轮 campaign 素材。",
      "参与多渠道用户行为监测和数字平台优化，完成体验改版与功能开发。",
    ],
    detailsEn: [
      "Led the creative team in refining content and visual expression for the BMW JOYCUBE brand experience store, from concept and themes to visual language.",
      "Built a coherent visual system for in-store use and future communication, while partnering with the social team on campaign assets.",
      "Contributed to cross-channel user-behavior monitoring, experience redesigns and feature delivery.",
    ],
    facts: ["6 套创意方案", "10+ 次社交媒体 campaign", "BMW 官网月均访问量 +11%"],
    factsEn: ["6 creative proposals", "10+ social campaigns", "BMW web monthly visits +11%"],
    tags: ["JOYCUBE", "Creative Direction", "Retail Experience"],
    awards: [
      "2026 深圳环球设计大奖“鲲鹏奖” · 数字设计类铜奖",
      "2022 MUSE Creative Awards · 体验与沉浸式现场体验类铂金奖",
      "ADC 第 101 届年度奖入围",
    ],
    awardsEn: [
      "2026 Shenzhen Global Design Award 'KPA' · Bronze, Digital Design",
      "2022 MUSE Creative Awards · Platinum, Experiential & Immersive",
      "ADC 101st Annual Awards · Shortlisted",
    ],
  },
  {
    year: "2021",
    range: "2021—2022",
    company: "BMW FS",
    companyCn: "宝马金融",
    role: "数字化助理经理",
    roleEn: "Digital Assistant Manager",
    headline: "让金融产品在多触点里更容易被理解",
    headlineEn: "Made financial products easier to understand across touchpoints",
    details: [
      "推进 BMW CBS 在官网、小程序和 Emall 三个触点上线，整合 4 款金融产品路径。",
      "规划宝马金融数字服务页架构并梳理 3 项核心业务逻辑，输出全链路体验方案。",
      "独立完成宝马金融产品视频 Story Line、脚本及拍摄执行，共完成 5 支视频。",
    ],
    detailsEn: [
      "Launched BMW CBS across website, mini program and Emall, integrating the journeys of four financial products.",
      "Planned the information architecture of BMW Financial Services pages and defined three core business flows across the end-to-end journey.",
      "Independently developed storylines and scripts and supported production for five BMW financial product videos.",
    ],
    facts: ["3 个数字触点", "用户操作流程 -30%", "客户满意度 +8pp"],
    factsEn: ["3 digital touchpoints", "User flow -30%", "Customer satisfaction +8pp"],
    tags: ["Digital Journey", "Financial Product", "Content Production"],
  },
  {
    year: "2022",
    range: "2022—2024",
    company: "DAIMLER TRUCK",
    companyCn: "福田戴姆勒汽车 · 奔驰事业部",
    role: "产品经理",
    roleEn: "Product Manager",
    headline: "从 0 到 1 建设厂家与经销商协同的 CRM",
    headlineEn: "Built a manufacturer-dealer CRM from zero to one",
    details: [
      "负责奔驰重卡 CRM 一至三期建设，搭建厂家管理端与经销商应用端，整合 DMS、官网等渠道。",
      "通过 20 余次深度访谈建立用户画像，走访 23 家重点经销商并形成需求报告。",
      "协调 28 项核心功能交付，设计订单预测模型与经销商行为监测看板，并推进培训落地。",
    ],
    detailsEn: [
      "Delivered phases one to three of the Mercedes-Benz heavy-truck CRM, covering OEM management and dealer applications integrated with DMS and web channels.",
      "Built user profiles through 20+ in-depth interviews and visited 23 key dealerships to produce a structured requirements report.",
      "Coordinated 28 core features, designed an order-forecast model and dealer behavior dashboard, and supported training rollout.",
    ],
    facts: ["23 家重点经销商", "28 项核心功能", "交付效率 +30%"],
    factsEn: ["23 key dealerships", "28 core capabilities", "Delivery efficiency +30%"],
    tags: ["CRM 0→1", "Dealer Digitalization", "User Research"],
  },
  {
    year: "2025",
    range: "2025—2026",
    company: "BYD",
    companyCn: "比亚迪股份有限公司",
    role: "海外产品经理",
    roleEn: "Overseas Product Manager",
    headline: "把 CRM、营销自动化与 AI 带入多国业务",
    headlineEn: "Connected CRM, marketing automation and AI across markets",
    details: [
      "面向墨西哥、巴西、阿根廷等拉美市场推进 CRM 产品迭代，覆盖线索、活动、客户档案与数据合规等能力。",
      "推动 Adobe Marketo 与 CRM 在 4 个国家完成集成，分阶段搭建客户标签自动化规则并优化线索分配机制。",
      "参与落地 beta 版 CRM 智能助手、文档 AI 识别与 AR 虚拟展车；借调期间负责 KOX 内容营销小程序。",
    ],
    detailsEn: [
      "Advanced CRM products for Latin American markets including Mexico, Brazil and Argentina, covering leads, campaigns, customer profiles and data compliance.",
      "Integrated Adobe Marketo with CRM across four countries, built phased customer-tag automation and improved lead allocation rules.",
      "Contributed to a beta CRM copilot, document AI recognition and an AR virtual showroom; also owned the KOX content-marketing mini program during a rotation.",
    ],
    facts: ["4 国 CRM 集成", "线索转化率 +7%", "KOX 用户 30 万+"],
    factsEn: ["CRM integrated in 4 countries", "Lead conversion +7%", "KOX users 300K+"],
    tags: ["LATAM CRM", "Marketo", "AI Product"],
  },
  {
    year: "2026",
    range: "2026.06—至今",
    company: "VOYAH",
    companyCn: "岚图汽车",
    role: "数字化产品经理",
    roleEn: "Digital Product Manager",
    headline: "让一线销售的日常作业更顺畅、更可落地",
    headlineEn: "Making frontline sales work more usable and executable",
    details: [
      "负责销售助手 App 大部分核心功能的需求分析、产品设计与持续迭代，围绕一线销售作业流程推进体验优化。",
      "负责销售助手相关培训内容、使用材料和问题收集，支持产品在销售团队中的理解与使用。",
      "负责虚拟号相关业务的需求梳理与产品方案设计，明确业务流程和规则，协同相关团队推进落地。",
    ],
    detailsEn: [
      "Own requirement analysis, product design and continuous iteration for most core features of the Sales Assistant App, improving frontline sales workflows.",
      "Develop training content and user materials and collect issues to support product understanding and adoption across sales teams.",
      "Define requirements, product flows and business rules for virtual-number services and coordinate delivery with relevant teams.",
    ],
    facts: ["销售助手 App", "培训与产品落地", "虚拟号业务"],
    factsEn: ["Sales Assistant App", "Training & adoption", "Virtual-number service"],
    tags: ["Sales Digitalization", "Product Delivery", "Enablement"],
  },
];

const UI = {
  cn: {
    identity: "田一雄 · 数字化产品经理",
    nav: ["职业路径", "能力结构", "联系"],
    motionOn: "动态 ON",
    motionOff: "动态 OFF",
    introEyebrow: "AUTOMOTIVE · DIGITAL · PRODUCT",
    introTitle: "把复杂业务，\n变成可被使用的产品。",
    introBody: "8 年以上汽车及品牌数字化经验，经历覆盖品牌体验、CRM、海外产品、销售数字化与 AI 场景探索。",
    selectHint: "点击年份，重组这段职业路径",
    contribution: "关键工作",
    evidence: "事实与结果",
    recognition: "创意荣誉",
    noAward: "这一章节的价值，来自产品交付本身。",
    next: "下一章节",
    pathEyebrow: "01 / CAREER INDEX",
    pathTitle: "不是跳跃的履历，\n是一条逐步收拢的路径。",
    capabilityEyebrow: "02 / CAPABILITY FIELD",
    capabilityTitle: "品牌感知 × 产品结构 × 业务落地",
    capabilityBody: "我擅长的不是单一工具，而是在复杂组织中把用户、业务和交付连接起来。",
    contactEyebrow: "03 / AVAILABLE FOR THE RIGHT ROLE",
    contactTitle: "下一段，做更有影响力的汽车数字产品。",
    download: "下载中文简历",
    email: "邮件联系",
  },
  en: {
    identity: "TIAN YIXIONG · DIGITAL PRODUCT",
    nav: ["PATH", "CAPABILITIES", "CONTACT"],
    motionOn: "MOTION ON",
    motionOff: "MOTION OFF",
    introEyebrow: "AUTOMOTIVE · DIGITAL · PRODUCT",
    introTitle: "Turning complex business\ninto products people can use.",
    introBody: "8+ years across automotive brand experience, CRM, overseas products, sales digitalization and AI exploration.",
    selectHint: "Select a year to reconstruct the journey",
    contribution: "CONTRIBUTION",
    evidence: "EVIDENCE",
    recognition: "RECOGNITION",
    noAward: "The value of this chapter comes from product delivery itself.",
    next: "NEXT CHAPTER",
    pathEyebrow: "01 / CAREER INDEX",
    pathTitle: "Not disconnected moves,\nbut a path coming into focus.",
    capabilityEyebrow: "02 / CAPABILITY FIELD",
    capabilityTitle: "Brand sense × product structure × delivery",
    capabilityBody: "My edge is not a single tool. It is connecting users, business and execution inside complex organizations.",
    contactEyebrow: "03 / AVAILABLE FOR THE RIGHT ROLE",
    contactTitle: "Next: building automotive digital products with greater impact.",
    download: "DOWNLOAD CV",
    email: "EMAIL ME",
  },
};

const CAPABILITIES = [
  ["AUTOMOTIVE DIGITAL PRODUCT", "汽车数字化产品"],
  ["CRM & LEAD MANAGEMENT", "CRM 与线索管理"],
  ["SALES DIGITALIZATION", "销售数字化"],
  ["CUSTOMER EXPERIENCE", "客户体验"],
  ["USER RESEARCH", "用户研究"],
  ["BRAND EXPERIENCE", "品牌体验与创意体系"],
  ["OVERSEAS COLLABORATION", "海外产品协作"],
  ["AI WORKFLOW", "AI 产品与工作流"],
];

function MagneticLink({ children, className = "", ...props }) {
  const ref = useRef(null);
  const move = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${(event.clientX - rect.left - rect.width / 2) * 0.12}px`);
    node.style.setProperty("--my", `${(event.clientY - rect.top - rect.height / 2) * 0.12}px`);
  };
  const reset = () => {
    ref.current?.style.setProperty("--mx", "0px");
    ref.current?.style.setProperty("--my", "0px");
  };
  return (
    <a ref={ref} className={`magnetic ${className}`} onPointerMove={move} onPointerLeave={reset} {...props}>
      <span>{children}</span>
    </a>
  );
}

export function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [language, setLanguage] = useState("cn");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pulse, setPulse] = useState(null);
  const stageRef = useRef(null);
  const copy = UI[language];
  const item = EXPERIENCES[selectedIndex];

  const selectExperience = useCallback(
    (index, point) => {
      const target = (index + EXPERIENCES.length) % EXPERIENCES.length;
      const update = () => setSelectedIndex(target);
      if (!reducedMotion && document.startViewTransition) {
        document.startViewTransition(update);
      } else {
        update();
      }
      if (point) {
        setPulse({ x: point.x, y: point.y, id: Date.now() });
        window.setTimeout(() => setPulse(null), 720);
      }
    },
    [reducedMotion],
  );

  useEffect(() => {
    const onKey = (event) => {
      if (["ArrowRight", "ArrowDown"].includes(event.key)) selectExperience(selectedIndex + 1);
      if (["ArrowLeft", "ArrowUp"].includes(event.key)) selectExperience(selectedIndex - 1);
      if (/^[1-6]$/.test(event.key)) selectExperience(Number(event.key) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectExperience, selectedIndex]);

  useEffect(() => {
    const onPointer = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--pointer-x", x.toFixed(3));
      document.documentElement.style.setProperty("--pointer-y", y.toFixed(3));
    };
    const onScroll = () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.5);
      document.documentElement.style.setProperty("--page-scroll", progress.toFixed(3));
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.18 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleStageClick = (event) => {
    if (event.target.closest("button, a")) return;
    const rect = stageRef.current.getBoundingClientRect();
    const direction = event.clientX > rect.left + rect.width / 2 ? 1 : -1;
    selectExperience(selectedIndex + direction, { x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <main className={`${reducedMotion ? "reduce-motion" : ""} language-${language}`}>
      <header className="topbar">
        <a className="identity" href="#top" aria-label="返回顶部">
          {copy.identity}
        </a>
        <nav aria-label="页面导航">
          <a href="#path">{copy.nav[0]}</a>
          <a href="#capabilities">{copy.nav[1]}</a>
          <a href="#contact">{copy.nav[2]}</a>
        </nav>
        <div className="top-actions">
          <button type="button" onClick={() => setLanguage(language === "cn" ? "en" : "cn")} aria-label="切换语言">
            {language === "cn" ? "EN" : "中"}
          </button>
          <button type="button" onClick={() => setReducedMotion((value) => !value)} aria-pressed={reducedMotion}>
            {reducedMotion ? copy.motionOff : copy.motionOn}
          </button>
        </div>
      </header>

      <section
        id="top"
        ref={stageRef}
        className="hero-stage"
        data-scene={selectedIndex}
        onClick={handleStageClick}
        aria-label="可交互职业路径"
      >
        <div className="vertical-name" aria-hidden="true">
          <span>TIAN YIXIONG</span>
        </div>

        <div className="metal-field" aria-hidden="true">
          <img className="metal metal-back" src="./assets/chrome-ribbon.png" alt="" />
          <img className="metal metal-front" src="./assets/chrome-ribbon.png" alt="" />
        </div>

        {pulse && <span key={pulse.id} className="click-pulse" style={{ left: pulse.x, top: pulse.y }} />}

        <div className="hero-intro">
          <p className="eyebrow">{copy.introEyebrow}</p>
          <h1>{copy.introTitle}</h1>
          <p className="hero-summary">{copy.introBody}</p>
          <p className="interaction-hint"><span />{copy.selectHint}</p>
        </div>

        <div className="timeline" role="tablist" aria-label="职业年份">
          {EXPERIENCES.map((experience, index) => (
            <button
              key={experience.year}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              className={selectedIndex === index ? "active" : ""}
              onClick={(event) => {
                const stage = stageRef.current.getBoundingClientRect();
                selectExperience(index, { x: event.clientX - stage.left, y: event.clientY - stage.top });
              }}
            >
              <span className="year-dot" />
              <span className="year-label">{experience.year}</span>
              <span className="year-company">{experience.company}</span>
            </button>
          ))}
        </div>

        <article className="experience-panel" key={`${selectedIndex}-${language}`}>
          <div className="panel-index">0{selectedIndex + 1}</div>
          <div className="panel-heading">
            <p>{item.range}</p>
            <h2>{item.company}</h2>
            <span>{language === "cn" ? item.companyCn : item.roleEn}</span>
          </div>
          <div className="panel-role">
            <p>{language === "cn" ? item.role : item.roleEn}</p>
            <h3>{language === "cn" ? item.headline : item.headlineEn}</h3>
          </div>
          <div className="panel-grid">
            <div>
              <h4>{copy.contribution}</h4>
              <ol>
                {(language === "cn" ? item.details : item.detailsEn).map((detail) => <li key={detail}>{detail}</li>)}
              </ol>
            </div>
            <div>
              <h4>{copy.evidence}</h4>
              <ul className="fact-list">
                {(language === "cn" ? item.facts : item.factsEn).map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div>
              <h4>{copy.recognition}</h4>
              {item.awards ? (
                <ul className="award-list">
                  {(language === "cn" ? item.awards : item.awardsEn).map((award) => <li key={award}>{award}</li>)}
                </ul>
              ) : <p className="no-award">{copy.noAward}</p>}
            </div>
          </div>
          <button className="next-chapter" type="button" onClick={() => selectExperience(selectedIndex + 1)}>
            <span>{copy.next}</span><strong>↘</strong>
          </button>
        </article>
      </section>

      <section id="path" className="editorial-section career-index" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">{copy.pathEyebrow}</p>
          <h2>{copy.pathTitle}</h2>
        </div>
        <div className="career-list">
          {EXPERIENCES.map((experience, index) => (
            <button key={experience.company} type="button" onClick={() => { selectExperience(index); window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }); }}>
              <span>0{index + 1}</span>
              <strong>{experience.company}</strong>
              <em>{experience.range}</em>
              <p>{language === "cn" ? experience.headline : experience.headlineEn}</p>
              <b>↗</b>
            </button>
          ))}
        </div>
      </section>

      <section id="capabilities" className="editorial-section capability-section" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">{copy.capabilityEyebrow}</p>
          <h2>{copy.capabilityTitle}</h2>
          <p className="section-summary">{copy.capabilityBody}</p>
        </div>
        <div className="capability-field">
          {CAPABILITIES.map(([en, cn], index) => (
            <div key={en} style={{ "--i": index }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{language === "cn" ? cn : en}</strong>
              <em>{language === "cn" ? en : cn}</em>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" data-reveal>
        <p className="eyebrow">{copy.contactEyebrow}</p>
        <h2>{copy.contactTitle}</h2>
        <div className="contact-actions">
          <MagneticLink href="mailto:tyx553269537@163.com">{copy.email}</MagneticLink>
          <MagneticLink className="outline" href="./田一雄_高级数字化产品经理_中文简历.docx" download>{copy.download}</MagneticLink>
        </div>
        <div className="footer-meta">
          <span>TYX / 2026</span>
          <span>133 8331 0003</span>
          <span>tyx553269537@163.com</span>
        </div>
      </footer>
    </main>
  );
}
