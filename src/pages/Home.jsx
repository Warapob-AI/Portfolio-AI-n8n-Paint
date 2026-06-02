import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   ALL CSS — single injected <style> block
───────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@300;400;500;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:     #06091a;
    --bg2:    #090d22;
    --bg3:    #0c1128;
    --card:   #0e1230;
    --cyan:   #22d3ee;
    --cyan10: rgba(34,211,238,.1);
    --cyan20: rgba(34,211,238,.2);
    --orange: #fb923c;
    --purple: #a78bfa;
    --green:  #34d399;
    --text:   #f1f5f9;
    --muted:  #94a3b8;
    --dim:    #475569;
    --border: rgba(255,255,255,0.07);
    --font:   'Noto Sans Thai Looped', system-ui, sans-serif;
  }

  html { scroll-behavior: smooth; }
  body {
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 2px; }

  /* ── NAV ─────────────────────────────── */
  .pf-nav {
    position: fixed; inset: 0 0 auto;
    z-index: 999;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.1rem 6%;
    transition: background .35s, border-color .35s;
  }
  .pf-nav.solid {
    background: rgba(6,9,26,.88);
    backdrop-filter: blur(20px) saturate(1.4);
    border-bottom: 1px solid var(--border);
  }
  .nav-brand {
    font-size: 1.2rem; font-weight: 900; letter-spacing: -.02em;
    background: linear-gradient(130deg, var(--cyan), var(--purple));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    cursor: pointer; user-select: none;
  }
  .nav-links { display: flex; gap: 1.8rem; list-style: none; }
  .nav-links button {
    background: none; border: none; cursor: pointer;
    font: 500 .78rem/1 var(--font); letter-spacing: .1em;
    text-transform: uppercase; color: var(--muted);
    transition: color .2s;
    padding: .3rem 0;
  }
  .nav-links button:hover { color: var(--cyan); }

  /* ── HERO ─────────────────────────────── */
  .pf-hero {
    min-height: 100svh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 2rem;
    padding: 8rem 6% 5rem;
    position: relative; overflow: hidden;
  }
  .hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(34,211,238,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(34,211,238,.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hero-glow-r {
    position: absolute; top: -15%; right: -8%; width: 580px; height: 580px;
    border-radius: 50%; pointer-events: none; z-index: 0;
    background: radial-gradient(circle, rgba(34,211,238,.1) 0%, transparent 65%);
  }
  .hero-glow-l {
    position: absolute; bottom: -20%; left: -5%; width: 400px; height: 400px;
    border-radius: 50%; pointer-events: none; z-index: 0;
    background: radial-gradient(circle, rgba(167,139,250,.08) 0%, transparent 65%);
  }
  .hero-left { position: relative; z-index: 1; }
  .hero-right { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; }

  .hero-badge {
    display: inline-flex; align-items: center; gap: .55rem;
    padding: .38rem 1.1rem; margin-bottom: 1.8rem;
    background: rgba(34,211,238,.07);
    border: 1px solid rgba(34,211,238,.22);
    border-radius: 99px; font-size: .76rem; font-weight: 600; color: var(--cyan);
  }
  .badge-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--cyan);
    animation: bdot 2s ease-in-out infinite;
  }
  @keyframes bdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(1.6)} }

  .hero-name {
    font-size: clamp(2.6rem, 5.5vw, 4.4rem);
    font-weight: 900; line-height: 1.04; letter-spacing: -.03em;
    margin-bottom: .6rem;
  }
  .hero-name-accent {
    background: linear-gradient(125deg, var(--cyan) 20%, var(--purple) 80%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero-role { font-size: 1.05rem; color: var(--muted); font-weight: 400; margin-bottom: 1.5rem; }
  .hero-desc {
    font-size: .92rem; color: var(--muted); line-height: 1.85;
    max-width: 460px; margin-bottom: 2rem;
  }

  .hero-stats { display: flex; gap: 2.5rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
  .stat-val {
    display: block; font-size: 2rem; font-weight: 900; color: var(--cyan);
    line-height: 1; letter-spacing: -.03em;
  }
  .stat-lbl {
    display: block; font-size: .67rem; font-weight: 600; color: var(--muted);
    text-transform: uppercase; letter-spacing: .1em; margin-top: .35rem;
  }

  .hero-btns { display: flex; gap: .85rem; flex-wrap: wrap; }
  .btn {
    display: inline-flex; align-items: center; gap: .5rem;
    padding: .72rem 1.65rem; border-radius: 10px;
    font: 700 .87rem/1 var(--font); cursor: pointer;
    text-decoration: none; transition: all .2s ease;
  }
  .btn-fill { background: var(--cyan); color: #020617; border: none; }
  .btn-fill:hover {
    background: #67e8f9; transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(34,211,238,.3);
  }
  .btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--border); }
  .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }

  /* ── PHOTO RING ─────────────────────────── */
  .photo-wrap { position: relative; width: 310px; height: 310px; }
  .photo-ring {
    position: absolute; inset: 0; border-radius: 50%;
    background: conic-gradient(var(--cyan), var(--purple), var(--orange), var(--cyan));
    animation: ringrotate 7s linear infinite;
  }
  @keyframes ringrotate { to { transform: rotate(360deg); } }
  .photo-mask {
    position: absolute; inset: 4px; border-radius: 50%;
    overflow: hidden; background: var(--bg3);
  }
  .photo-mask img {
    width: 100%; height: 100%; object-fit: cover; object-position: center top;
  }
  .photo-chip {
    position: absolute; display: inline-flex; align-items: center; gap: .45rem;
    padding: .48rem 1rem; border-radius: 12px;
    font-size: .73rem; font-weight: 700; white-space: nowrap;
    animation: levitate 3.5s ease-in-out infinite;
  }
  @keyframes levitate { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
  .chip-a { top: -4%; right: 10%; background: rgba(34,211,238,.12); border: 1px solid rgba(34,211,238,.3); color: var(--cyan); animation-delay: 0s; }
  .chip-b { bottom: 2%; left: 0%; background: rgba(251,146,60,.12); border: 1px solid rgba(251,146,60,.3); color: var(--orange); animation-delay: 1.7s; }
  .chip-c { top: 44%; right: 0%; background: rgba(167,139,250,.12); border: 1px solid rgba(167,139,250,.3); color: var(--purple); animation-delay: .85s; }

  /* ── SECTION BASE ─────────────────────── */
  .pf-sec { padding: 6rem 6%; }
  .pf-sec.alt { background: var(--bg2); }

  .reveal {
    opacity: 0; transform: translateY(26px);
    transition: opacity .65s ease, transform .65s ease;
  }
  .reveal.shown { opacity: 1; transform: translateY(0); }

  .s-eye {
    display: inline-flex; align-items: center; gap: .5rem;
    font-size: .72rem; text-transform: uppercase; letter-spacing: .14em;
    color: var(--cyan); font-weight: 700; margin-bottom: .85rem;
  }
  .s-eye::before { content:''; width: 22px; height: 2px; background: var(--cyan); border-radius: 1px; }
  .s-h {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 800; letter-spacing: -.025em; margin-bottom: .75rem;
  }
  .s-sub {
    color: var(--muted); font-size: .9rem; line-height: 1.78;
    max-width: 550px; margin-bottom: 2.8rem;
  }
  .s-rule {
    width: 38px; height: 3px; border-radius: 2px;
    background: linear-gradient(to right, var(--cyan), var(--purple));
    margin: .7rem 0 2.6rem;
  }

  /* ── ABOUT ─────────────────────────────── */
  .about-cols { display: grid; grid-template-columns: 1.1fr 1fr; gap: 4rem; align-items: center; }
  .about-p { font-size: .9rem; color: var(--muted); line-height: 1.88; margin-bottom: .9rem; }
  .about-p strong { color: var(--text); font-weight: 700; }
  .about-img {
    width: auto; height: 350px; border-radius: 20px;
    object-fit: cover; object-position: center;
    border: 1px solid var(--border);
    filter: brightness(.88) contrast(1.05);
  }
  .edu-card {
    margin-top: 2rem; padding: 1.1rem 1.4rem;
    background: var(--card); border: 1px solid var(--border);
    border-left: 3px solid var(--cyan); border-radius: 10px;
    display: flex; align-items: center; gap: 1rem;
  }
  .edu-icon { font-size: 1.6rem; flex-shrink: 0; }
  .edu-school { font-size: .9rem; font-weight: 700; }
  .edu-detail { font-size: .78rem; color: var(--muted); margin-top: .2rem; }

  /* ── WHAT I DO ─────────────────────────── */
  .wid-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
  .wid-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 16px; padding: 1.8rem 1.5rem;
    transition: all .3s ease; position: relative; overflow: hidden;
  }
  .wid-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--cyan10) 0%, transparent 60%);
    opacity: 0; transition: opacity .3s;
  }
  .wid-card:hover::before { opacity: 1; }
  .wid-card:hover { transform: translateY(-5px); border-color: var(--cyan20); }
  .wid-icon { font-size: 2.2rem; margin-bottom: 1rem; }
  .wid-title { font-size: 1rem; font-weight: 800; margin-bottom: .5rem; }
  .wid-desc { font-size: .84rem; color: var(--muted); line-height: 1.7; }
  .wid-tags { display: flex; flex-wrap: wrap; gap: .38rem; margin-top: 1rem; }
  .wid-tag {
    padding: .22rem .6rem; border-radius: 5px; font-size: .7rem; font-weight: 600;
    background: var(--cyan10); color: var(--cyan);
  }

  /* ── SKILLS ─────────────────────────────── */
  .skill-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem 3rem; }
  .skill-grp-name { font-size: .72rem; text-transform: uppercase; letter-spacing: .12em; color: var(--dim); font-weight: 700; margin-bottom: .65rem; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: .5rem; }
  .stag {
    padding: .44rem .95rem; background: var(--card);
    border: 1px solid var(--border); border-radius: 8px;
    font-size: .82rem; font-weight: 500; color: var(--text);
    cursor: default; transition: all .18s ease;
  }
  .stag:hover {
    border-color: var(--cyan); color: var(--cyan);
    background: var(--cyan10); transform: translateY(-2px);
  }

  /* ── EXPERIENCE ─────────────────────────── */
  .tl { position: relative; padding-left: 1.6rem; }
  .tl::before {
    content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
    width: 2px;
    background: linear-gradient(to bottom, var(--cyan), rgba(167,139,250,.25));
  }
  .tl-item { position: relative; margin-bottom: 3.2rem; padding-left: 1.8rem; }
  .tl-dot {
    position: absolute; left: -2.23rem; top: .26rem;
    width: 13px; height: 13px; border-radius: 50%;
    border: 2px solid var(--cyan); background: var(--bg);
    transition: background .3s;
  }
  .tl-item:hover .tl-dot { background: var(--cyan); }
  .tl-period { font-size: .76rem; color: var(--cyan); font-weight: 700; letter-spacing: .06em; margin-bottom: .45rem; }
  .tl-co { font-size: 1.18rem; font-weight: 800; margin-bottom: .2rem; }
  .tl-role { font-size: .88rem; color: var(--muted); margin-bottom: 1rem; }
  .tl-role span { font-weight: 700; }
  .tl-ul { list-style: none; display: flex; flex-direction: column; gap: .52rem; }
  .tl-ul li {
    font-size: .86rem; color: var(--muted); line-height: 1.65;
    padding-left: 1.05rem; position: relative;
  }
  .tl-ul li::before { content: '▸'; position: absolute; left: 0; color: var(--orange); }
  .tl-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: .65rem; margin-top: 1.1rem; }
  .tl-img {
    width: 95%; height: 435px; object-fit: cover;
    border-radius: 9px; border: 1px solid var(--border);
    transition: transform .3s, border-color .3s;
  }
  .tl-img:hover { transform: scale(1.02); border-color: var(--cyan20); }

  .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
  .proj-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 18px; overflow: hidden; transition: all .32s ease;
    display: flex; flex-direction: column;
  }
  .proj-card:hover {
    transform: translateY(-7px);
    border-color: var(--cyan20);
    box-shadow: 0 24px 60px rgba(0,0,0,.4), 0 0 0 1px var(--cyan20);
  }

  .proj-thumbs { 
    display: flex; 
    flex-direction: column; 
    width: 100%;
    overflow: hidden; 
  }

  .proj-thumb {
    width: 100%; 
    height: auto;
    max-height: 250px;
    object-fit: cover;
    object-position: top center;
    border-bottom: 1px solid var(--border);
    transition: transform .45s ease;
  }
  .proj-card:hover .proj-thumb { transform: scale(1.02); }
  .proj-body { padding: 1.5rem; }
  .proj-stack { display: flex; flex-wrap: wrap; gap: .38rem; margin-bottom: 1rem; }
  .ptag {
    padding: .22rem .6rem; border-radius: 5px;
    font-size: .7rem; font-weight: 700;
    background: var(--cyan10); color: var(--cyan);
  }
  .proj-title { font-size: 1.18rem; font-weight: 800; margin-bottom: .2rem; }
  .proj-sub { font-size: .78rem; color: var(--muted); margin-bottom: .7rem; }
  .proj-desc { font-size: .87rem; color: var(--muted); line-height: 1.72; margin-bottom: .9rem; }
  .proj-ul { list-style: none; display: flex; flex-direction: column; gap: .4rem; }
  .proj-ul li {
    font-size: .81rem; color: var(--muted); padding-left: .9rem;
    position: relative; line-height: 1.5;
  }
  .proj-ul li::before { content: '→'; position: absolute; left: 0; color: var(--cyan); }

  /* ── CERTS ───────────────────────────── */
  /* ── CERTS (ปรับปรุงเป็นแบบ 2 Column แนวนอนคู่ขนาน) ── */
  .cert-grid { 
    display: flex; 
    flex-direction: column; 
    gap: 1.8rem; 
    width: 100%;
  }
  
  .cert-card {
    background: var(--card); 
    border: 1px solid var(--border);
    border-radius: 18px; 
    padding: 2rem;
    display: grid;
    grid-template-columns: 1.2fr 1.8fr; /* แบ่งเลย์เอาต์ ซ้าย: รูปภาพ / ขวา: ข้อความ */
    gap: 2.5rem;
    align-items: center;
    transition: all .32s ease;
    overflow: hidden;
  }
  
  .cert-card:hover { 
    border-color: var(--cyan20); 
    transform: translateY(-4px); 
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
  
  /* บล็อกหุ้มรูปภาพฝั่งซ้าย */
  .cert-left {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* ตัวรูปเกียรติบัตรใบใหญ่ */
  .cert-large-img {
    width: 100%;
    height: auto;
    max-height: 280px;
    object-fit: contain;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  
  /* บล็อกข้อความรายละเอียดฝั่งขวา */
  .cert-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .cert-name { 
    font-size: 1.4rem; /* ขยายขนาดหัวข้อข้อความให้เด่นชัดคู่กับรูปใบใหญ่ */
    font-weight: 800; 
    line-height: 1.4; 
    margin-bottom: 0.6rem; 
    color: var(--text);
  }
  
  .cert-org { 
    font-size: 0.95rem; 
    color: var(--muted); 
    line-height: 1.6; 
  }

  /* Responsive: สำหรับหน้าจอมือถือ/แท็บเล็ต จะยุบรวมกลับมาสแต็กแนวตั้ง */
  @media (max-width: 900px) {
    .cert-card {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1.5rem;
    }
    .cert-large-img {
      max-height: 200px;
    }
    .cert-name {
      font-size: 1.15rem;
    }
  }

  /* ── CONTACT ─────────────────────────── */
  .contact-wrap { max-width: 680px; margin: 0 auto; text-align: center; }
  .contact-desc { font-size: .92rem; color: var(--muted); line-height: 1.82; margin-top: 1rem; }
  .clinks { display: flex; flex-wrap: wrap; justify-content: center; gap: .9rem; margin-top: 2.6rem; }
  .clink {
    display: inline-flex; align-items: center; gap: .55rem;
    padding: .7rem 1.4rem; border-radius: 10px;
    background: var(--card); border: 1px solid var(--border);
    color: var(--text); text-decoration: none;
    font: 500 .84rem/1 var(--font); transition: all .2s;
  }
  .clink:hover {
    border-color: var(--cyan); color: var(--cyan);
    transform: translateY(-2px); background: var(--cyan10);
  }

  /* ── FOOTER ─────────────────────────── */
  .pf-footer {
    padding: 1.6rem 6%;
    border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    font-size: .78rem; color: var(--dim);
  }
  .footer-brand { color: var(--cyan); font-weight: 700; }

  /* ── RESPONSIVE ─────────────────────── */
  @media (max-width: 900px) {
    .pf-hero { grid-template-columns: 1fr; padding: 6rem 5% 4rem; text-align: center; }
    .hero-right { order: -1; }
    .hero-stats { justify-content: center; }
    .hero-btns { justify-content: center; }
    .hero-desc { margin: 0 auto 2rem; }
    .hero-badge { margin: 0 auto 1.8rem; }
    .chip-a, .chip-b, .chip-c { display: none; }
    .about-cols { grid-template-columns: 1fr; }
    .skill-cols { grid-template-columns: 1fr; }
    .wid-grid { grid-template-columns: 1fr; }
    .proj-grid { grid-template-columns: 1fr; }
    .pf-sec { padding: 4rem 5%; }
    .photo-wrap { width: 240px; height: 240px; }
    .nav-links { display: none; }
    .pf-footer { flex-direction: column; gap: .4rem; text-align: center; }
  }
  @media (max-width: 560px) {
    .hero-name { font-size: 2.2rem; }
    .hero-stats { gap: 1.6rem; }
    .cert-grid { grid-template-columns: 1fr; }
  }
`;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SKILLS = {
  "Front-End": ["Angular", "React.js", "TypeScript", "HTML5 / CSS3"],
  "Back-End": ["Java (Spring Boot)", "Nest.js", "Python (FastAPI)", "C#.NET MAUI"],
  "Database": ["Microsoft SQL Server", "PostgreSQL", "MongoDB"],
  "DevOps & Tools": ["Docker", "Git (Rebase / Cherry-pick)", "Jira", "Jasper PDF"],
  "AI & Automation": ["n8n Workflow", "AutoGen (Multi-Agent)", "LLM / Ollama", "Streamlit"],
};

const WHAT_I_DO = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    desc: "สร้างระบบ Enterprise ครบวงจร ตั้งแต่ UI ถึง Database ด้วย Angular, Nest.js, Java Spring Boot",
    tags: ["Angular", "React", "Java", "Nest.js"],
  },
  {
    icon: "🤖",
    title: "AI Developer",
    desc: "ออกแบบ Workflow อัตโนมัติและ Multi-Agent AI System ที่ทำให้งานซ้ำๆ กลายเป็น automated process จริงๆ",
    tags: ["n8n", "AutoGen", "LLM", "Python"],
  },
  {
    icon: "⚙️",
    title: "System Architecture",
    desc: "ออกแบบโครงสร้างระบบที่ scale ได้ เน้น OOP ที่ถูกต้อง Reusable Components และ Clean Code",
    tags: ["OOP", "Docker", "MSSQL", "PostgreSQL"],
  },
];

const EXPERIENCE = [
  {
    period: "มกราคม 2026 – พฤษภาคม 2026",
    company: "G-Able Public Company Limited",
    role: "Full Stack Developer Intern",
    tech: "Angular · Java Spring Boot · MSSQL",
    color: "#22d3ee",
    points: [
      "พัฒนา core modules สำหรับระบบ Reinsurance & Tax Management ขนาด Enterprise",
      "แก้ปัญหา Memory Leak ด้วย proper Unsubscribe และเพิ่ม Loader Page ป้องกัน multiple-click ขณะ processing",
      "ส่งมอบงานกว่า 170+ tasks ภายใน 4 เดือน ตรงตาม sprint schedule ทุก sprint",
      "ประสานงานกับทีม BA แปล requirements เป็น technical solutions ได้อย่างแม่นยำ",
      "ทำงานร่วมกับ QA briefing feature ใหม่เพื่อให้ทดสอบได้ครบถ้วน",
    ],
    imgs: [],
  },
  {
    period: "พฤษภาคม 2025 – สิงหาคม 2025",
    company: "Unicorn Tech Integration × Villa Market",
    role: "AI Developer Intern",
    tech: "n8n · Python · AutoGen · Streamlit",
    color: "#fb923c",
    points: [
      "สร้าง AI Video Generation Workflow ด้วย n8n — ผลิต 230 คลิปใน 25 นาที จากเดิม 20 คลิป/วัน = เพิ่มขึ้น 220 เท่า",
      "พัฒนา Internal LLM Chatbot ด้วย Python + Streamlit สำหรับค้นหาและจัดการข้อมูลพนักงานภายในองค์กร",
      "ใช้ AutoGen Framework บริหาร Multi-Agent AI System ขับเคลื่อน process workflow automation",
      "นำเสนอผลลัพธ์และ solution โดยตรงต่อทีมพัฒนาและผู้บริหารระดับสูงของ Villa Market",
    ],
    imgs: [
      "/images/n8n-experience-1.jpg",
      "/images/n8n-experience-2.jpg",
    ],
  },
];

const PROJECTS = [
  {
    title: "UWalletExpense",
    sub: "Website Money Management",
    stack: ["Angular", "Nest.js", "PostgreSQL"],
    desc: "ระบบจัดการการเงินส่วนตัวครบวงจร ติดตามรายรับ รายจ่าย หนี้สิน และพอร์ตลงทุนหุ้นรายเดือน",
    points: [
      "สร้าง configurable Angular Component Library ด้วย FormGroup + 12-column grid ลด frontend coding time",
      "ออกแบบ reusable database layer สำหรับ CRUD operations ทั้งหมด ด้วย strict OOP",
      "โครงสร้าง NestJS ที่ใช้ซ้ำได้ทำให้ full-stack development เร็วและ consistent ขึ้นอย่างมาก",
    ],
    imgs: ["/images/uwalletexpense_1.png", "/images/uwalletexpense_2.png"],
  },
  {
    title: "UDetectionNews",
    sub: "Fake News Detection — Thailand",
    stack: ["React", "Python", "FastAPI", "Ollama"],
    desc: "ระบบตรวจจับข่าวปลอมในประเทศไทยด้วย LLM + Search Engine วิเคราะห์และทำนายข่าวได้อย่างรวดเร็วและแม่นยำ",
    points: [
      "ทดสอบกับ dataset กว่า 10,000 ตัวอย่าง จาก Anti-Fake News Center Thailand",
      "Frontend React เชื่อมต่อ Python FastAPI + LLM (Ollama) ผ่าน search engine system",
      "ออกแบบ UX ให้ใช้งานง่าย ผลลัพธ์ชัดเจน รองรับการตรวจสอบข่าวแบบ real-time",
    ],
    imgs: ["/images/UDetectionNews_1.png", "/images/UDetectionNews_2.png"],
  },
];

const CERTS = [
  {
    name: "Internship Completion Certificate",
    org: "G-Able Public Company Limited",
    logo: "/images/G-Able-C.png",
  },
  {
    name: "🥉 3rd Place Winner",
    org: "Chat Novel Game Competition — buzzde × DEPA",
    logo: "/images/buz-1.png",
    highlight: true,
  },
  {
    name: "Foundations of Data Science",
    org: "Google Certificate (Coursera)",
    logo: "/images/google.png",
  },
  {
    name: "Introduction to Front-End Development",
    org: "Meta Certificate (Coursera)",
    logo: "/images/meta.png",
  },
	{
    name: "Introduction to Artificial Intelligence (AI)",
    org: "IBM Certificate (Coursera)",
    logo: "/images/IBM.png",
  },
  {
    name: "Basic Cybersecurity",
    org: "MOOC Certificate of Completion",
    logo: "/images/Certificate_1650706094_Warapob-1.png",
  },
];

/* ─────────────────────────────────────────────
   HELPER: Image with gray-box fallback
───────────────────────────────────────────── */
function Img({ src, alt, className, style }) {
  const fallback = (e) => {
    const name = src.split("/").pop();
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230e1230'/%3E%3Ctext x='50%25' y='50%25' fill='%23334155' font-size='11' font-family='sans-serif' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E`;
  };
  return <img src={src} alt={alt} className={className} style={style} onError={fallback} loading="lazy" />;
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [shown, setShown] = useState(new Set());

  useEffect(() => {
    // Font preconnects
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
      (entries) =>
        entries.forEach((e) =>
          e.isIntersecting && setShown((s) => new Set([...s, e.target.dataset.id]))
        ),
      { threshold: 0.1 }
    );
    setTimeout(() => {
      document.querySelectorAll("[data-id]").forEach((el) => io.observe(el));
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const go   = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const rv   = (id) => `reveal${shown.has(id) ? " shown" : ""}`;

  const NAV_ITEMS = [
    ["about", "about"],
    ["wid", "what I do"],
    ["skills", "skills"],
    ["experience", "experience"],
    ["projects", "projects"],
    ["contact", "contact"],
  ];

  return (
    <>
      {/* ── Global styles ── */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ════════════════════════════════
          NAV
      ════════════════════════════════ */}
      <nav className={`pf-nav${scrolled ? " solid" : ""}`}>
        <div className="nav-brand" onClick={() => go("hero")}>Warapob Kawinrum</div>
        <ul className="nav-links">
          {NAV_ITEMS.map(([id, label]) => (
            <li key={id}>
              <button onClick={() => go(id)}>{label}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section id="hero" className="pf-hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow-r" />
        <div className="hero-glow-l" />

        {/* Left: text */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Opportunities
          </div>

          <h1 className="hero-name">
            <span className="hero-name-accent">วราภพ ควินรัมย์</span>
          </h1>
          <p className="hero-role">Full-Stack Developer</p>
          <p className="hero-desc">
            นักพัฒนาจบใหม่เกียรตินิยมอันดับ 1 จาก Bangkok University ผ่านงาน
            Enterprise-scale ที่ G-Able และสร้าง AI Developer ที่เพิ่ม productivity
            ได้จริงถึง 220 เท่าที่ Villa Market
          </p>

          <div className="hero-stats">
            <div>
              <span className="stat-val">170+</span>
              <span className="stat-lbl">Tasks Delivered</span>
            </div>
            <div>
              <span className="stat-val">220×</span>
              <span className="stat-lbl">Productivity</span>
            </div>
            <div>
              <span className="stat-val">3.70</span>
              <span className="stat-lbl">GPA</span>
            </div>
          </div>

          <div className="hero-btns">
            <button className="btn btn-fill" onClick={() => go("projects")}>
              ดูผลงาน →
            </button>
            <button className="btn btn-ghost" onClick={() => go("contact")}>
              ติดต่อ
            </button>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-right">
          <div className="photo-wrap">
            <div className="photo-ring" />
            <div className="photo-mask">
              <Img src="/images/Profile.jpg" alt="Warapob Kawinrum" />
            </div>
          </div>
          <div className="photo-chip chip-a">⚡ G-Able · Full Stack Developer</div>
          <div className="photo-chip chip-b">🤖 n8n × Villa Market</div>
          <div className="photo-chip chip-c">🏆 First-Class Honors</div>
        </div>
      </section>

      {/* ════════════════════════════════
          ABOUT
      ════════════════════════════════ */}
      <section id="about" className="pf-sec alt">
        <div data-id="about" className={rv("about")}>
          <div className="s-eye">About me</div>
          <h2 className="s-h">Hands-on Developer</h2>
          <div className="s-rule" />
          <div className="about-cols">
            <div>
              <p className="about-p">
                ผมคือ{" "}
                <strong>วราภพ ควินรัมย์ (Warapob Kawinrum)</strong> — Full-Stack Developer
                และ AI Developer จบเกียรตินิยมอันดับ 1 สาขา Computer Science
                (Information Technology &amp; Innovation) จาก Bangkok University ด้วย GPA 3.70
              </p>
              <p className="about-p">
                มีประสบการณ์จริงจาก 2 internship ระดับ Enterprise — ที่{" "}
                <strong style={{ color: "#22d3ee" }}>G-Able</strong> พัฒนาระบบ
                Reinsurance &amp; Tax Management ขนาดใหญ่ ด้วย Angular + Java Spring Boot
                และที่ <strong style={{ color: "#fb923c" }}>Villa Market</strong> สร้าง AI
                Workflow ที่เพิ่ม productivity ได้ 220 เท่าภายใน 25 นาที
              </p>
              <p className="about-p">
                ความถนัดของผมอยู่ที่การออกแบบระบบเบื้องต้นได้ เขียน clean code, optimize และนำ AI
                มาแก้ปัญหาธุรกิจได้จริง — ไม่ใช่แค่ demo
              </p>
              <div className="edu-card">
                <div className="edu-icon">🎓</div>
                <div>
                  <div className="edu-school">Bangkok University — First-Class Honors</div>
                  <div className="edu-detail">
                    B.Sc. Computer Science (IT &amp; Innovation) · GPA 3.70 · 2022–2026
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="/images/Profile_2.jpg"
              alt="Warapob Kawinrum at event"
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHAT I DO
      ════════════════════════════════ */}
      <section id="wid" className="pf-sec">
        <div data-id="wid" className={rv("wid")}>
          <div className="s-eye">What I Do</div>
          <h2 className="s-h">Core Expertise</h2>
          <p className="s-sub">
            ผสมผสาน Full-Stack Development กับ AI Developer เพื่อสร้างผลลัพธ์ที่วัดได้จริง
          </p>
          <div className="wid-grid">
            {WHAT_I_DO.map((w) => (
              <div key={w.title} className="wid-card">
                <div className="wid-icon">{w.icon}</div>
                <div className="wid-title">{w.title}</div>
                <div className="wid-desc">{w.desc}</div>
                <div className="wid-tags">
                  {w.tags.map((t) => (
                    <span key={t} className="wid-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SKILLS
      ════════════════════════════════ */}
      <section id="skills" className="pf-sec alt">
        <div data-id="skills" className={rv("skills")}>
          <div className="s-eye">ทักษะ</div>
          <h2 className="s-h">Tech Stack</h2>
          <p className="s-sub">
            เทคโนโลยีที่ผมใช้ในงานจริงทั้งระดับ Production และ AI Developer
          </p>
          <div className="skill-cols">
            {Object.entries(SKILLS).map(([cat, tags]) => (
              <div key={cat}>
                <div className="skill-grp-name">{cat}</div>
                <div className="skill-tags">
                  {tags.map((t) => (
                    <span key={t} className="stag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          EXPERIENCE
      ════════════════════════════════ */}
      <section id="experience" className="pf-sec">
        <div data-id="experience" className={rv("experience")}>
          <div className="s-eye">Experience</div>
          <h2 className="s-h">Experience</h2>
          <div className="s-rule" />
          <div className="tl">
            {EXPERIENCE.map((ex, i) => (
              <div key={i} className="tl-item">
                <div className="tl-dot" style={{ borderColor: ex.color }} />
                <div className="tl-period">{ex.period}</div>
                <div className="tl-co">{ex.company}</div>
                <div className="tl-role">
                  {ex.role} —{" "}
                  <span style={{ color: ex.color }}>{ex.tech}</span>
                </div>
                <ul className="tl-ul">
                  {ex.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                {ex.imgs.length > 0 && (
                  <div className="tl-imgs">
                    {ex.imgs.map((src, j) => (
                      <Img
                        key={j}
                        src={src}
                        alt={`${ex.company} screenshot ${j + 1}`}
                        className="tl-img"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PROJECTS
      ════════════════════════════════ */}
      <section id="projects" className="pf-sec alt">
        <div data-id="projects" className={rv("projects")}>
          <div className="s-eye">ผลงาน</div>
          <h2 className="s-h">Senior Projects</h2>
          <p className="s-sub">
            โปรเจคที่พัฒนาด้วยตัวเองตั้งแต่ออกแบบ Architecture จนถึงระบบที่ใช้งานได้จริง
          </p>
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="proj-card">
                <div className="proj-thumbs">
                  {p.imgs.map((src, j) => (
                    <Img key={j} src={src} alt={`${p.title} screenshot`} className="proj-thumb" />
                  ))}
                </div>
                <div className="proj-body">
                  <div className="proj-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="ptag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-sub">{p.sub}</div>
                  <p className="proj-desc">{p.desc}</p>
                  <ul className="proj-ul">
                    {p.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CERTIFICATES
       ════════════════════════════════ */}
      <section id="certs" className="pf-sec">
        <div data-id="certs" className={rv("certs")}>
          <div className="s-eye">Successfully</div>
          <h2 className="s-h">Awards &amp; Certificates</h2>
          <div className="s-rule" />
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <div
                key={i}
                className="cert-card"
                style={c.highlight ? { borderColor: "rgba(251,146,60,.3)" } : {}}
              >
                <div className="cert-left">
                  {c.logo ? (
                    <Img src={c.logo} alt={c.name} className="cert-large-img" />
                  ) : (
                    <div
                      className="cert-ico"
                      style={{ background: "rgba(34,211,238,.1)", color: "#22d3ee", width: "80px", height: "80px", fontSize: "2.5rem" }}
                    >
                      {c.emoji}
                    </div>
                  )}
                </div>

                {/* ฝั่งขวา: ข้อความรายละเอียดความสำเร็จ */}
                <div className="cert-right">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT
      ════════════════════════════════ */}
      <section id="contact" className="pf-sec alt">
        <div data-id="contact" className={rv("contact")}>
          <div className="contact-wrap">
            <div className="s-eye" style={{ justifyContent: "center" }}>
              ติดต่อ
            </div>
            <h2 className="s-h" style={{ textAlign: "center" }}>
              มาทำงานด้วยกัน
            </h2>
            <p className="contact-desc">
              ผมกำลังมองหาโอกาสใหม่ — ทั้งงาน Full-Stack Development และ AI Developer
              หากคุณมีโปรเจคที่น่าสนใจหรืออยากพูดคุย ติดต่อมาได้เลย
            </p>
            <div className="clinks">
              <a className="clink" href="mailto:paintseason158@gmail.com">
                📧 paintseason158@gmail.com
              </a>
              <a className="clink" href="tel:0961519706">
                📱 096-151-9706
              </a>
              <a
                className="clink"
                href="https://github.com/Warapob-AI"
                target="_blank"
                rel="noreferrer"
              >
                🐙 GitHub: Warapob-AI
              </a>
              <a
                className="clink"
                href="https://www.linkedin.com/in/warapob-kawinrum-8b33b3357/"
                target="_blank"
                rel="noreferrer"
              >
                💼 LinkedIn
              </a>
              <a className="clink" href="#">
                💬 Line: warapobai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          FOOTER
      ════════════════════════════════ */}
      <footer className="pf-footer">
        <span>© 2026 Warapob Kawinrum</span>
        <span className="footer-brand">Full-Stack Development &amp; AI Developer</span>
      </footer>
    </>
  );
}