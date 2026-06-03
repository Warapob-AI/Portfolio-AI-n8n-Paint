import { useState, useEffect } from "react";
import "./Portfolio.scss";

const T = {
  th: {
    name: "วราภพ ควินรัมย์",
    nav: ["เกี่ยวกับผม", "สิ่งที่ผมทำ", "ทักษะและสกิล", "ประสบการณ์", "ผลงาน", "ติดต่อ"],
    badge: "พร้อมรับโอกาสใหม่",
    heroRole: "Full-Stack Developer",
    heroDesc: "นักพัฒนาจบใหม่เกียรตินิยมอันดับ 1 จาก Bangkok University ผ่านงาน Enterprise-scale ที่ G-Able และสร้าง AI Developer ที่เพิ่ม productivity ได้จริงถึง 220 เท่าที่ Villa Market",
    statLabels: ["งานที่ส่งมอบ", "ประสิทธิภาพ", "เกรดเฉลี่ย"],
    btnProjects: "ผลงาน →",
    btnContact: "ติดต่อ",
    chipA: "⚡ G-Able · Full Stack Developer",
    chipB: "🤖 n8n × Villa Market",
    chipC: "🏆 เกียรตินิยมอันดับ 1",

    aboutEye: "เกี่ยวกับผม",
    aboutH: "นักพัฒนาที่มีประสบการณ์จริง",
    aboutP1: <>ผมคือ <strong>วราภพ ควินรัมย์</strong> — Full-Stack Developer และ AI Developer จบเกียรตินิยมอันดับ 1 สาขาวิทยาการคอมพิวเตอร์ (คณะเทคโนโลยีสารสนเทศและนวัตกรรม) จากมหาวิทยาลัยกรุงเทพด้วย GPA 3.70</>,
    aboutP2: <>มีประสบการณ์ฝึกงานจริง 2 ที่ระดับ Enterprise — ที่ <strong style={{ color: "#22d3ee" }}>G-Able</strong> พัฒนาระบบประกันภัยและการจัดการระบบภาษีขนาดใหญ่ ด้วย Angular + Java Spring Boot และที่ <strong style={{ color: "#fb923c" }}>Villa Market</strong> สร้าง AI Workflow ที่เพิ่ม productivity ได้ 220 เท่าภายใน 25 นาที</>,
    aboutP3: "ความถนัดของผมอยู่ที่การออกแบบระบบเบื้องต้นได้ เขียน clean code, optimize และนำ AI มาแก้ปัญหาธุรกิจได้จริง — ไม่ใช่แค่ demo",
    eduSchool: "มหาวิทยาลัยกรุงเทพ — เกียรตินิยมอันดับ 1",
    eduDetail: "สาขาวิทยาการคอมพิวเตอร์ (คณะเทคโนโลยีสารสนเทศและนวัตกรรม) · GPA 3.70 · 2022–2026",

    widEye: "สิ่งที่ทำ",
    widH: "ความเชี่ยวชาญหลัก",
    widSub: "ผสมผสาน Full-Stack Development กับ AI Developer เพื่อสร้างผลลัพธ์ที่วัดได้จริง",

    skillsEye: "ทักษะ",
    skillsH: "ทักษะและสกิล",
    skillsSub: "เทคโนโลยีที่ผมใช้ในงานจริงทั้งระดับ Production และ AI Developer",

    expEye: "ประสบการณ์",
    expH: "ประสบการณ์",

    projEye: "ผลงาน",
    projH: "โครงงานวิจัยระดับปริญญาตรี",
    projSub: "โปรเจคที่พัฒนาด้วยตัวเองตั้งแต่ออกแบบ Architecture จนถึงระบบที่ใช้งานได้จริง",

    certsEye: "ความสำเร็จ",
    certsH: "รางวัล & ใบรับรอง",

    contactEye: "ติดต่อ",
    contactH: "มาทำงานด้วยกัน",
    contactDesc: "ผมกำลังมองหาโอกาสใหม่ — ทั้งงาน Full-Stack Development และ AI Developer หากคุณมีโปรเจคที่น่าสนใจหรืออยากพูดคุย ติดต่อมาได้เลย",

    footerRight: "Full-Stack Development & AI Developer",
    videoLabel: "เดโม · AI วีดีโอที่ถูกสร้างด้วย Workflow",
  },
  en: {
    name: "Warapob Kawinrum",
    nav: ["about", "what I do", "skills", "experience", "projects", "contact"],
    badge: "Available for Opportunities",
    heroRole: "Full-Stack Developer",
    heroDesc: "Fresh graduate with First-Class Honors from Bangkok University. Enterprise-scale experience at G-Able and built an AI workflow that boosted productivity 220× at Villa Market.",
    statLabels: ["Tasks Delivered", "Productivity", "GPA"],
    btnProjects: "Projects →",
    btnContact: "Contact",
    chipA: "⚡ G-Able · Full Stack Developer",
    chipB: "🤖 n8n × Villa Market",
    chipC: "🏆 First-Class Honors",

    aboutEye: "About me",
    aboutH: "Hands-on Developer",
    aboutP1: <>I'm <strong>Warapob Kawinrum</strong> — a Full-Stack Developer and AI Developer who graduated with First-Class Honors in Computer Science (IT &amp; Innovation) from Bangkok University with a GPA of 3.70.</>,
    aboutP2: <>I have real-world experience from 2 Enterprise-level internships — at <strong style={{ color: "#22d3ee" }}>G-Able</strong>, building a Reinsurance &amp; Tax Management system with Angular + Java Spring Boot, and at <strong style={{ color: "#fb923c" }}>Villa Market</strong>, creating an AI Workflow that boosted productivity 220× in under 25 minutes.</>,
    aboutP3: "My strength lies in designing systems from the ground up, writing clean code, optimizing performance, and applying AI to solve real business problems — not just demos.",
    eduSchool: "Bangkok University — First-Class Honors",
    eduDetail: "B.Sc. Computer Science (IT & Innovation) · GPA 3.70 · 2022–2026",

    widEye: "What I Do",
    widH: "Core Expertise",
    widSub: "Combining Full-Stack Development with AI to deliver measurable, real-world results.",

    skillsEye: "Skills",
    skillsH: "Tech Stack",
    skillsSub: "Technologies I actively use in production-level work and AI development.",

    expEye: "Experience",
    expH: "Experience",

    projEye: "Projects",
    projH: "Senior Projects",
    projSub: "Projects built end-to-end — from architecture design to fully working systems.",

    certsEye: "Achievements",
    certsH: "Awards & Certificates",

    contactEye: "Contact",
    contactH: "Let's Work Together",
    contactDesc: "I'm looking for new opportunities in Full-Stack Development and AI. If you have an interesting project or just want to chat, feel free to reach out.",

    footerRight: "Full-Stack Development & AI Developer",
    videoLabel: "Demo · AI Video Generation Workflow",
  },
};

const SKILLS = {
  "Front-End": ["Angular", "React.js", "TypeScript", "HTML5 / CSS3"],
  "Back-End": ["Java (Spring Boot)", "Nest.js", "Python (FastAPI)", "C#.NET MAUI"],
  "Database": ["Microsoft SQL Server", "PostgreSQL", "MongoDB"],
  "DevOps & Tools": ["Docker", "Git (Rebase / Cherry-pick)", "Jira", "Jasper PDF"],
  "AI & Automation": ["n8n Workflow", "AutoGen (Multi-Agent)", "LLM / Ollama", "Streamlit"],
};

const WHAT_I_DO = {
  th: [
    { icon: "💻", title: "Full-Stack Development", desc: "สร้างระบบ Enterprise ครบวงจร ตั้งแต่ UI ถึง Database ด้วย Angular, Nest.js, Java Spring Boot", tags: ["Angular", "React", "Java", "Nest.js"] },
    { icon: "🤖", title: "AI Developer", desc: "ออกแบบ Workflow อัตโนมัติและ Multi-Agent AI System ที่ทำให้งานซ้ำๆ กลายเป็น automated process จริงๆ", tags: ["n8n", "AutoGen", "LLM", "Python"] },
    { icon: "⚙️", title: "System Architecture", desc: "ออกแบบโครงสร้างระบบที่ scale ได้ เน้น OOP ที่ถูกต้อง Reusable Components และ Clean Code", tags: ["OOP", "Docker", "MSSQL", "PostgreSQL"] },
  ],
  en: [
    { icon: "💻", title: "Full-Stack Development", desc: "Building end-to-end Enterprise systems from UI to database using Angular, Nest.js, and Java Spring Boot.", tags: ["Angular", "React", "Java", "Nest.js"] },
    { icon: "🤖", title: "AI Developer", desc: "Designing automated workflows and Multi-Agent AI Systems that turn repetitive tasks into real automated processes.", tags: ["n8n", "AutoGen", "LLM", "Python"] },
    { icon: "⚙️", title: "System Architecture", desc: "Designing scalable system structures with correct OOP principles, reusable components, and clean code.", tags: ["OOP", "Docker", "MSSQL", "PostgreSQL"] },
  ],
};

const EXPERIENCE = {
  th: [
    {
      period: "ม.ค. 2569 – พ.ค. 2569",
      company: "G-Able Public Company Limited",
      role: "Full Stack Developer (ฝึกงาน)",
      tech: "Angular · Java Spring Boot · MSSQL",
      color: "#22d3ee",
      points: [
        "พัฒนา core modules สำหรับระบบ Reinsurance & Tax Management ขนาด Enterprise ด้วย Angular + Java Spring Boot และ Microsoft SQL Server ซึ่งได้เรียนรู้เกี่ยวกับระบบประกันภัยและการจัดการภาษีในอุตสาหกรรมประกันภัยอย่างเข้มงวด",
        "เขียนโค้ดด้วย best practices โดยเฉพาะ Object-Oriented Programming ขั้นสูงในภาษา Java และ Angular",
        "แก้ปัญหา Memory Leak ด้วย proper Unsubscribe และเพิ่ม Loader Page ป้องกัน user multiple-click ขณะ processing",
        "ส่งมอบงานกว่า 170+ tasks ภายใน 4 เดือน ตรงตาม sprint schedule ทุก sprint",
        "ประสานงานกับทีม BA แปล requirements เป็น technical solutions และซัพพอร์ต UAT testing",
        "ทำงานร่วมกับ QA briefing feature ใหม่เพื่อให้ทดสอบได้ครบถ้วน",
        "เรียนรู้การใช้ Git Rebase และ Cherry-pick เพื่อให้ commit history สะอาดและแก้ไข merge conflicts",
      ],
      imgs: [],
    },
    {
      period: "พ.ค. 2568 – ส.ค. 2568",
      company: "Unicorn Tech Integration × Villa Market",
      role: "AI Developer (ฝึกงาน)",
      tech: "n8n · Python · AutoGen · Streamlit",
      color: "#22d3ee",
      points: [
        "สร้าง AI Video Generation Workflow ด้วย n8n — ผลิต 230 คลิปใน 25 นาที จากเดิม 20 คลิป/วัน = เพิ่มขึ้น 220 เท่า",
        "พัฒนา Internal LLM Chatbot ด้วย Python + Streamlit สำหรับค้นหาและจัดการข้อมูลพนักงาน",
        "ใช้ AutoGen Framework บริหาร Multi-Agent AI System ขับเคลื่อน process workflow automation",
        "นำเสนอผลลัพธ์โดยตรงต่อ CTO ของ Villa Market ซึ่งให้ feedback ว่า solution ตอบโจทย์และมีประสิทธิภาพสูง",
      ],
      imgs: [
        { src: "/images/n8n-experience-video.jpg", style: { width: "90%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/n8n-experience-ocr.jpg", style: { width: "90%", height: "auto", objectFit: "cover", objectPosition: "center" } },
      ],
      video: "/images/n8n-experience-video.mp4",
    },
    {
      period: "มิ.ย. 2566 – ม.ค. 2568",
      company: "Buzzde × depa Game Accelerator Program Batch 3",
      role: "Game Developer / Story Writer",
      tech: "Unity · YAML · Visual Novel",
      color: "#22d3ee",
      points: [
        "เข้าร่วมโครงการ depa Game Accelerator Program Batch 3 — Story kickstart with Buzzde และได้รับเกียรติบัตร",
        "พัฒนาเกม Visual Novel 'สวรรค์รักแห่งฟูฟู' ตั้งแต่ออกแบบ story จนถึง implement ด้วย YAML scripting และ Addressables",
        "ส่งงานแต่ละตอนพร้อม changelog ชัดเจน เช่น story.yaml, ep4.yaml, ep8.yaml และ bg assets",
        "โครงการได้รับทุนสนับสนุนจาก depa จำนวน 80,000 บาท",
      ],
      imgs: [
        { src: "/images/buz-1.png", style: { width: "70%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/buz-2.png", style: { width: "70%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/pat-dab.jpg", style: { width: "70%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/pat-dab-2.jpg", style: { width: "50%", height: "auto", objectFit: "cover", objectPosition: "center" } },
      ],
    },
  ],
  en: [
    {
      period: "Jan 2026 – May 2026",
      company: "G-Able Public Company Limited",
      role: "Full Stack Developer Intern",
      tech: "Angular · Java Spring Boot · MSSQL",
      color: "#22d3ee",
      points: [
        "Developed core modules for an Enterprise-scale Reinsurance & Tax Management system using Angular + Java Spring Boot and Microsoft SQL Server.",
        "Applied advanced Object-Oriented Programming best practices in both Java and Angular.",
        "Fixed Memory Leak issues through proper Unsubscribe patterns and added a Loader Page to prevent multiple-click during processing.",
        "Delivered 170+ tasks within 4 months, consistently meeting every sprint schedule.",
        "Collaborated with the BA team to translate requirements into technical solutions and supported UAT testing.",
        "Briefed QA on new features to ensure thorough test coverage.",
        "Learned and applied Git Rebase and Cherry-pick to maintain clean commit history and resolve merge conflicts.",
      ],
      imgs: [],
    },
    {
      period: "May 2025 – Aug 2025",
      company: "Unicorn Tech Integration × Villa Market",
      role: "AI Developer Intern",
      tech: "n8n · Python · AutoGen · Streamlit",
      color: "#22d3ee",
      points: [
        "Built an AI Video Generation Workflow with n8n — produced 230 clips in 25 minutes vs. 20 clips/day previously = 220× productivity increase.",
        "Developed an Internal LLM Chatbot with Python + Streamlit for searching and managing employee data.",
        "Used the AutoGen Framework to manage a Multi-Agent AI System driving process workflow automation.",
        "Presented results directly to Villa Market's CTO, who confirmed the solution was highly effective and explored further use cases.",
      ],
      imgs: [
        { src: "/images/n8n-experience-video.jpg", style: { width: "90%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/n8n-experience-ocr.jpg", style: { width: "90%", height: "auto", objectFit: "cover", objectPosition: "center" } },
      ],
      video: "/images/video-1.mp4",
    },
    {
      period: "Jun 2023 – Jan 2025",
      company: "Buzzde × depa Game Accelerator Program Batch 3",
      role: "Game Developer / Story Writer",
      tech: "Unity · YAML · Visual Novel",
      color: "#22d3ee",
      points: [
        "Joined the depa Game Accelerator Program Batch 3 — Story kickstart with Buzzde and received an official certificate.",
        "Developed the visual novel game 'Sawankrak Haeng FuFu' from story design to implementation using YAML scripting and the Addressables system.",
        "Delivered each episode with clear changelogs (e.g. story.yaml, ep4.yaml, ep8.yaml, bg assets).",
        "The project received ฿80,000 in funding from depa.",
      ],
      imgs: [
        { src: "/images/buz-1.png", style: { width: "70%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/buz-2.png", style: { width: "70%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/pat-dab.jpg", style: { width: "70%", height: "auto", objectFit: "cover", objectPosition: "center" } },
        { src: "/images/pat-dab-2.jpg", style: { width: "50%", height: "auto", objectFit: "cover", objectPosition: "center" } },
      ],
    },
  ],
};

const PROJECTS = {
  th: [
    {
      title: "UWalletExpense",
      sub: "เว็บไซต์จัดการการเงิน",
      stack: ["Angular", "Nest.js", "PostgreSQL"],
      desc: "ระบบจัดการการเงินส่วนตัวครบวงจร ติดตามรายรับ รายจ่าย หนี้สิน และพอร์ตลงทุนหุ้นรายเดือน",
      points: [
        "สร้าง configurable Angular Component Library ด้วย FormGroup + 12-column grid ลด frontend coding time",
        "ออกแบบ reusable database layer สำหรับ CRUD operations ทั้งหมด ด้วย strict OOP",
        "โครงสร้าง NestJS ที่ใช้ซ้ำได้ทำให้ full-stack development เร็วและ consistent ขึ้นอย่างมาก",
      ],
      imgs: [
        { src: "/images/uwalletexpense_1.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/uwalletexpense_2.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/uwalletexpense_3.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
      ],
      links: [
        { label: "UI (Frontend)", url: "https://github.com/Warapob-AI/UI-UWalletExpense" },
        { label: "Service (Backend)", url: "https://github.com/Warapob-AI/Service-UWalletExpense" },
      ],
    },
    {
      title: "UDetectionNews",
      sub: "ตรวจจับข่าวปลอม — ประเทศไทย",
      stack: ["React", "Python", "Ollama"],
      desc: "ระบบตรวจจับข่าวปลอมในประเทศไทยด้วย LLM + Search Engine วิเคราะห์และทำนายข่าวได้อย่างรวดเร็วและแม่นยำ",
      points: [
        "ทดสอบกับ dataset กว่า 10,000 ตัวอย่าง จาก Anti-Fake News Center Thailand",
        "Frontend React เชื่อมต่อ Python FastAPI + LLM (Ollama) ผ่าน search engine system",
        "ออกแบบ UX ให้ใช้งานง่าย ผลลัพธ์ชัดเจน รองรับการตรวจสอบข่าวแบบ real-time",
      ],
      imgs: [
        { src: "/images/UDetectionNews_1.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/UDetectionNews_3.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/UDetectionNews_2.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
      ],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Warapob-AI/Fake-News-Detection-Machine-Learning-and-LLM" },
      ],
    },
  ],
  en: [
    {
      title: "UWalletExpense",
      sub: "Personal Finance Management Website",
      stack: ["Angular", "Nest.js", "PostgreSQL"],
      desc: "A full-featured personal finance system for tracking income, expenses, debts, and monthly stock portfolio.",
      points: [
        "Built a configurable Angular Component Library with FormGroup + 12-column grid, reducing frontend coding time.",
        "Designed a reusable database layer for all CRUD operations using strict OOP.",
        "Reusable NestJS architecture made full-stack development significantly faster and more consistent.",
      ],
      imgs: [
        { src: "/images/uwalletexpense_1.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/uwalletexpense_2.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/uwalletexpense_3.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
      ],
      links: [
        { label: "UI (Frontend)", url: "https://github.com/Warapob-AI/UI-UWalletExpense" },
        { label: "Service (Backend)", url: "https://github.com/Warapob-AI/Service-UWalletExpense" },
      ],
    },
    {
      title: "UDetectionNews",
      sub: "Fake News Detection — Thailand",
      stack: ["React", "Python", "Ollama"],
      desc: "A fake news detection system for Thailand powered by LLM + Search Engine, analyzing and predicting news quickly and accurately.",
      points: [
        "Tested on a dataset of 10,000+ samples from Anti-Fake News Center Thailand.",
        "React frontend connected to Python FastAPI + LLM (Ollama) via a search engine system.",
        "Designed an easy-to-use UX with clear results, supporting real-time news verification.",
      ],
      imgs: [
        { src: "/images/UDetectionNews_1.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/UDetectionNews_3.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
        { src: "/images/UDetectionNews_2.png", style: { height: "250px", objectFit: "cover", objectPosition: "top center" } },
      ],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Warapob-AI/Fake-News-Detection-Machine-Learning-and-LLM" },
      ],
    },
  ],
};

const CERTS = {
  th: [
    { name: "ใบรับรองการฝึกงาน", org: "G-Able Public Company Limited", logo: "/images/G-Able-C.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "🥉 รางวัลที่ 3", org: "Chat Novel Game Competition — buzzde × DEPA", logo: "/images/buz-1.png", highlight: true, imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "พื้นฐานเกี่ยวกับ Data Science", org: "Google Certificate (Coursera)", logo: "/images/google.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "ความรู้เบื้องต้นเกี่ยวกับ Front-End Development", org: "Meta Certificate (Coursera)", logo: "/images/meta.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "ความรู้เบื้องต้นเกี่ยวกับ Artificial Intelligence (AI)", org: "IBM Certificate (Coursera)", logo: "/images/IBM.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "ความรู้เบื้องต้นเกี่ยวกับความปลอดภัยทางไซเบอร์", org: "MOOC Certificate of Completion", logo: "/images/Certificate_1650706094_Warapob-1.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
  ],
  en: [
    { name: "Internship Completion Certificate", org: "G-Able Public Company Limited", logo: "/images/G-Able-C.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "🥉 3rd Place Winner", org: "Chat Novel Game Competition — buzzde × DEPA", logo: "/images/buz-1.png", highlight: true, imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "Foundations of Data Science", org: "Google Certificate (Coursera)", logo: "/images/google.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "Introduction to Front-End Development", org: "Meta Certificate (Coursera)", logo: "/images/meta.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "Introduction to Artificial Intelligence (AI)", org: "IBM Certificate (Coursera)", logo: "/images/IBM.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
    { name: "Basic Cybersecurity", org: "MOOC Certificate of Completion", logo: "/images/Certificate_1650706094_Warapob-1.png", imgStyle: { width: "100%", maxHeight: "280px", objectFit: "contain" } },
  ],
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

function Img({ src, alt, className, style }) {
  const fallback = (e) => {
    const name = src.split("/").pop();
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230e1230'/%3E%3Ctext x='50%25' y='50%25' fill='%23334155' font-size='11' font-family='sans-serif' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E`;
  };
  return <img src={src} alt={alt} className={className} style={style} onError={fallback} loading="lazy" />;
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [shown, setShown] = useState(new Set());
  const [lang, setLang] = useState("th");

  const t = T[lang];
  const experience = EXPERIENCE[lang];
  const projects = PROJECTS[lang];
  const certs = CERTS[lang];
  const whatIDo = WHAT_I_DO[lang];

  useEffect(() => {
    [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ].forEach(({ rel, href, crossOrigin }) => {
      const l = document.createElement("link");
      l.rel = rel; l.href = href;
      if (crossOrigin) l.crossOrigin = crossOrigin;
      document.head.appendChild(l);
    });

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown((s) => new Set([...s, e.target.dataset.id]))),
      { threshold: 0.1 }
    );
    setTimeout(() => { document.querySelectorAll("[data-id]").forEach((el) => io.observe(el)); }, 100);

    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const rv = (id) => `reveal${shown.has(id) ? " shown" : ""}`;

  const NAV_IDS = ["about", "wid", "skills", "experience", "projects", "contact"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className={`pf-nav${scrolled ? " solid" : ""}`}>
        <div className="nav-brand" onClick={() => go("hero")}>{t.name}</div>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_IDS.map((id, i) => (
              <li key={id}><button onClick={() => go(id)}>{t.nav[i]}</button></li>
            ))}
          </ul>
          <div className="lang-toggle">
            <button className={`lang-btn${lang === "th" ? " active" : ""}`} onClick={() => setLang("th")}>TH</button>
            <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pf-hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow-r" />
        <div className="hero-glow-l" />
        <div className="hero-left">
          <div className="hero-badge"><span className="badge-dot" />{t.badge}</div>
          <h1 className="hero-name"><span className="hero-name-accent">{t.name}</span></h1>
          <p className="hero-role">{t.heroRole}</p>
          <p className="hero-desc">{t.heroDesc}</p>
          <div className="hero-stats">
            <div><span className="stat-val">170+</span><span className="stat-lbl">{t.statLabels[0]}</span></div>
            <div><span className="stat-val">220×</span><span className="stat-lbl">{t.statLabels[1]}</span></div>
            <div><span className="stat-val">3.70</span><span className="stat-lbl">{t.statLabels[2]}</span></div>
          </div>
          <div className="hero-btns">
            <button className="btn btn-fill" onClick={() => go("projects")}>{t.btnProjects}</button>
            <button className="btn btn-ghost" onClick={() => go("contact")}>{t.btnContact}</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-wrap">
            <div className="photo-ring" />
            <div className="photo-mask"><Img src="/images/Profile.jpg" alt={t.name} /></div>
          </div>
          <div className="photo-chip chip-a">{t.chipA}</div>
          <div className="photo-chip chip-b">{t.chipB}</div>
          <div className="photo-chip chip-c">{t.chipC}</div>
        </div>
      </section>

      <section id="about" className="pf-sec alt">
        <div data-id="about" className={rv("about")}>
          <div className="s-eye">{t.aboutEye}</div>
          <h2 className="s-h">{t.aboutH}</h2>
          <div className="s-rule" />
          <div className="about-cols">
            <div>
              <p className="about-p">{t.aboutP1}</p>
              <p className="about-p">{t.aboutP2}</p>
              <p className="about-p">{t.aboutP3}</p>
              <div className="edu-card">
                <div className="edu-icon">🎓</div>
                <div>
                  <div className="edu-school">{t.eduSchool}</div>
                  <div className="edu-detail">{t.eduDetail}</div>
                </div>
              </div>
            </div>
            <Img src="/images/Profile_2.jpg" alt={t.name} className="about-img" style={{ height: "auto", width: "80%" }} />
          </div>
        </div>
      </section>

      <section id="wid" className="pf-sec">
        <div data-id="wid" className={rv("wid")}>
          <div className="s-eye">{t.widEye}</div>
          <h2 className="s-h">{t.widH}</h2>
          <p className="s-sub">{t.widSub}</p>
          <div className="wid-grid">
            {whatIDo.map((w) => (
              <div key={w.title} className="wid-card">
                <div className="wid-icon">{w.icon}</div>
                <div className="wid-title">{w.title}</div>
                <div className="wid-desc">{w.desc}</div>
                <div className="wid-tags">{w.tags.map((tg) => <span key={tg} className="wid-tag">{tg}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="pf-sec alt">
        <div data-id="skills" className={rv("skills")}>
          <div className="s-eye">{t.skillsEye}</div>
          <h2 className="s-h">{t.skillsH}</h2>
          <p className="s-sub">{t.skillsSub}</p>
          <div className="skill-cols">
            {Object.entries(SKILLS).map(([cat, tags]) => (
              <div key={cat}>
                <div className="skill-grp-name">{cat}</div>
                <div className="skill-tags">{tags.map((tg) => <span key={tg} className="stag">{tg}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="pf-sec">
        <div data-id="experience" className={rv("experience")}>
          <div className="s-eye">{t.expEye}</div>
          <h2 className="s-h">{t.expH}</h2>
          <div className="s-rule" />
          <div className="tl">
            {experience.map((ex, i) => (
              <div key={i} className="tl-item">
                <div className="tl-dot" style={{ borderColor: ex.color }} />
                <div className="tl-period">{ex.period}</div>
                <div className="tl-co">{ex.company}</div>
                <div className="tl-role">{ex.role} — <span style={{ color: ex.color }}>{ex.tech}</span></div>
                <ul className="tl-ul">{ex.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
                {ex.imgs && ex.imgs.length > 0 && (
                  <div className="tl-imgs">
                    {ex.imgs.map((img, j) => (
                      <Img key={j} src={img.src} alt={`${ex.company} screenshot ${j + 1}`} className="tl-img" style={img.style} />
                    ))}
                  </div>
                )}
                {ex.video && (
                  <div>
                    <div className="tl-video-wrap">
                      <video className="tl-video" src={ex.video} controls playsInline preload="metadata" />
                    </div>
                    <div className="tl-video-label">{t.videoLabel}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="pf-sec alt">
        <div data-id="projects" className={rv("projects")}>
          <div className="s-eye">{t.projEye}</div>
          <h2 className="s-h">{t.projH}</h2>
          <p className="s-sub">{t.projSub}</p>
          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={i} className="proj-card">
                <div className="proj-thumbs">
                  {p.imgs.map((img, j) => (
                    <Img key={j} src={img.src} alt={`${p.title} screenshot`} className="proj-thumb" style={img.style} />
                  ))}
                </div>
                <div className="proj-body">
                  <div className="proj-stack">{p.stack.map((s) => <span key={s} className="ptag">{s}</span>)}</div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-sub">{p.sub}</div>
                  <p className="proj-desc">{p.desc}</p>
                  <ul className="proj-ul">{p.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
                  {p.links && p.links.length > 0 && (
                    <div className="proj-links">
                      {p.links.map((lnk, j) => (
                        <a key={j} className="proj-gh-link" href={lnk.url} target="_blank" rel="noreferrer">
                          <GithubIcon />{lnk.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certs" className="pf-sec">
        <div data-id="certs" className={rv("certs")}>
          <div className="s-eye">{t.certsEye}</div>
          <h2 className="s-h">{t.certsH}</h2>
          <div className="s-rule" />
          <div className="cert-grid">
            {certs.map((c, i) => (
              <div key={i} className="cert-card" style={c.highlight ? { borderColor: "rgba(251,146,60,.3)" } : {}}>
                <div className="cert-left">
                  {c.logo
                    ? <Img src={c.logo} alt={c.name} className="cert-large-img" style={c.imgStyle} />
                    : <div className="cert-ico" style={{ background: "rgba(34,211,238,.1)", color: "#22d3ee", width: "80px", height: "80px", fontSize: "2.5rem" }}>{c.emoji}</div>
                  }
                </div>
                <div className="cert-right">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pf-sec alt">
        <div data-id="contact" className={rv("contact")}>
          <div className="contact-wrap">
            <div className="s-eye" style={{ justifyContent: "center" }}>{t.contactEye}</div>
            <h2 className="s-h" style={{ textAlign: "center" }}>{t.contactH}</h2>
            <p className="contact-desc">{t.contactDesc}</p>
            <div className="clinks">
              <a className="clink" href="mailto:paintseason158@gmail.com">📧 paintseason158@gmail.com</a>
              <a className="clink" href="tel:0961519706">📱 096-151-9706</a>
              <a className="clink" href="https://github.com/Warapob-AI" target="_blank" rel="noreferrer">🐙 GitHub: Warapob-AI</a>
              <a className="clink" href="https://www.linkedin.com/in/warapob-kawinrum-8b33b3357/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
              <a className="clink" href="#">💬 Line: warapobai</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="pf-footer">
        <span>© 2026 {t.name}</span>
        <span className="footer-brand">{t.footerRight}</span>
      </footer>
    </>
  );
}