import { useCallback, useEffect, useRef, useState } from "react";

const EXPERIENCES = [
  {
    year: "2017",
    range: "2017.08—2020.07",
    company: "OGILVY",
    displayTitle: "MERCEDES ONEWEB",
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
    displayTitle: "BMW JOYCUBE",
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
    displayTitle: "BMW CBS",
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
    displayTitle: "DEALER CRM",
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
    displayTitle: "LATAM CRM",
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
    displayTitle: "SALES ASSISTANT",
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
    introEyebrow: "高级数字化产品经理",
    introTitle: "田一雄 / TIAN YIXIONG",
    introBody: "SENIOR DIGITAL PRODUCT MANAGER",
    selectHint: "点击金属或年份，触发实时折射与职业章节重组",
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
    introEyebrow: "SENIOR DIGITAL PRODUCT MANAGER",
    introTitle: "TIAN YIXIONG / 田一雄",
    introBody: "AUTOMOTIVE DIGITAL PRODUCT · CRM · CX · AI",
    selectHint: "Click the metal or a year to refract and reconstruct the journey",
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

function LiquidMetalCanvas({ pulse, reducedMotion, scene }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(scene);
  const pulseRef = useRef({ x: 0.33, y: 0.55, startedAt: -10000 });

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    if (!pulse || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    pulseRef.current = {
      x: Math.max(0, Math.min(1, pulse.x / rect.width)),
      y: Math.max(0, Math.min(1, 1 - pulse.y / rect.height)),
      startedAt: performance.now(),
    };
  }, [pulse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) {
      canvas?.classList.add("is-fallback");
      return undefined;
    }

    const vertexSource = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform vec2 uResolution;
      uniform vec2 uImageSize;
      uniform vec2 uPointer;
      uniform vec2 uClick;
      uniform float uTime;
      uniform float uImpulse;
      uniform float uScene;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }

      void main() {
        vec2 uv = vUv;
        float canvasAspect = uResolution.x / uResolution.y;
        float imageAspect = uImageSize.x / uImageSize.y;
        vec2 imageUv = uv;
        if (canvasAspect < imageAspect) {
          imageUv.x = (uv.x - 0.5) * (canvasAspect / imageAspect) + 0.5;
        } else {
          imageUv.y = (uv.y - 0.5) * (imageAspect / canvasAspect) + 0.5;
        }

        float scenePhase = uScene * 0.73;
        float n1 = noise(imageUv * 5.0 + vec2(uTime * 0.075, -uTime * 0.05 + scenePhase));
        float n2 = noise(imageUv * 10.0 + vec2(-uTime * 0.11, uTime * 0.065));
        vec2 flow = vec2(
          sin(imageUv.y * 14.0 + uTime * 0.8 + scenePhase),
          cos(imageUv.x * 11.0 - uTime * 0.72 + scenePhase)
        ) * (0.004 + n1 * 0.006);
        flow += vec2(n1 - 0.5, n2 - 0.5) * 0.012;

        vec2 clickDelta = uv - uClick;
        float clickDistance = length(clickDelta);
        float ring = sin(clickDistance * 72.0 - uImpulse * 23.0);
        float envelope = exp(-clickDistance * 5.2) * uImpulse;
        vec2 clickDirection = clickDelta / max(clickDistance, 0.018);
        vec2 refraction = clickDirection * ring * envelope * 0.034;

        vec2 pointerBend = (uPointer - 0.5) * 0.012 * (0.35 + n2);
        vec2 sampleUv = imageUv + flow + refraction + pointerBend;
        vec4 metal = texture2D(uTexture, sampleUv);

        float ridge = sin((imageUv.x + imageUv.y) * 22.0 - uTime * 1.15 + n1 * 4.0);
        float highlight = smoothstep(0.48, 1.0, ridge) * metal.a;
        float pulseLight = smoothstep(0.22, 0.0, abs(clickDistance - uImpulse * 0.48)) * uImpulse;
        metal.rgb = clamp(metal.rgb * (0.92 + n2 * 0.17) + highlight * 0.13 + pulseLight * vec3(0.12, 0.16, 0.22), 0.0, 1.0);
        metal.a *= smoothstep(0.0, 0.04, metal.a);
        gl_FragColor = metal;
      }
    `;

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      return shader;
    };

    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "uResolution"),
      imageSize: gl.getUniformLocation(program, "uImageSize"),
      pointer: gl.getUniformLocation(program, "uPointer"),
      click: gl.getUniformLocation(program, "uClick"),
      time: gl.getUniformLocation(program, "uTime"),
      impulse: gl.getUniformLocation(program, "uImpulse"),
      scene: gl.getUniformLocation(program, "uScene"),
    };

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const image = new Image();
    let imageReady = false;
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      imageReady = true;
    };
    image.src = "./assets/chrome-ribbon.png";

    let pointer = { x: 0.5, y: 0.5 };
    const onPointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = {
        x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, 1 - (event.clientY - rect.top) / rect.height)),
      };
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let frame;
    let lastFrame = 0;
    const render = (now) => {
      frame = requestAnimationFrame(render);
      if (reducedMotion && now - lastFrame < 240) return;
      lastFrame = now;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      if (!imageReady) return;
      const elapsed = Math.max(0, (now - pulseRef.current.startedAt) / 1000);
      const impulse = reducedMotion ? 0 : Math.exp(-elapsed * 1.45) * Math.min(1, elapsed * 7.5);
      gl.uniform2f(uniforms.resolution, width, height);
      gl.uniform2f(uniforms.imageSize, image.naturalWidth, image.naturalHeight);
      gl.uniform2f(uniforms.pointer, pointer.x, pointer.y);
      gl.uniform2f(uniforms.click, pulseRef.current.x, pulseRef.current.y);
      gl.uniform1f(uniforms.time, reducedMotion ? 0 : now / 1000);
      gl.uniform1f(uniforms.impulse, impulse);
      gl.uniform1f(uniforms.scene, sceneRef.current);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [reducedMotion]);

  return (
    <div className="metal-field" aria-hidden="true">
      <canvas ref={canvasRef} />
      <img className="metal-fallback" src="./assets/chrome-ribbon.png" alt="" />
    </div>
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
        <a className="identity" href="#top" aria-label="返回顶部">{copy.identity}</a>
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
          <span>田</span><span>一</span><span>雄</span>
        </div>

        <LiquidMetalCanvas pulse={pulse} reducedMotion={reducedMotion} scene={selectedIndex} />

        {pulse && <span key={pulse.id} className="click-pulse" style={{ left: pulse.x, top: pulse.y }} />}

        <div className="hero-intro">
          <h1>{copy.introTitle}</h1>
          <p className="eyebrow">{copy.introEyebrow}</p>
          <p className="hero-summary">{copy.introBody}</p>
        </div>

        <p className="interaction-hint"><span />{copy.selectHint}</p>
        <div className="shader-status" aria-hidden="true">
          <span>LIVE SHADER</span><span>REFRACTION 01</span><span>31.2304° N / 121.4737° E</span>
        </div>
        <div className="scroll-cue" aria-hidden="true">SCROLL TO EXPLORE</div>

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

        <article className={`experience-panel ${item.awards ? "has-awards" : "no-awards"}`} key={`${selectedIndex}-${language}`}>
          <div className="panel-index">0{selectedIndex + 1}</div>
          <div className="panel-heading">
            <p>{item.range} / {item.company}</p>
            <h2>{item.displayTitle}</h2>
            <span>{language === "cn" ? item.headline : item.headlineEn}</span>
          </div>
          <div className="panel-role">
            <p>{language === "cn" ? "角色定位 / ROLE" : "ROLE / 角色定位"}</p>
            <h3>{language === "cn" ? item.role : item.roleEn}<br /><small>{language === "cn" ? item.roleEn : item.companyCn}</small></h3>
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
