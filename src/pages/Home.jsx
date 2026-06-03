import { useState, useEffect } from "react";

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
  body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 2px; }

  .lang-toggle {
    display: flex; align-items: center;
    background: rgba(255,255,255,.05);
    border: 1px solid var(--border);
    border-radius: 99px;
    padding: 3px;
    gap: 2px;
  }
  .lang-btn {
    background: none; border: none; cursor: pointer;
    font: 700 .72rem/1 var(--font); letter-spacing: .08em;
    color: var(--muted);
    padding: .32rem .75rem;
    border-radius: 99px;
    transition: all .2s;
  }
  .lang-btn.active {
    background: var(--cyan);
    color: #020617;
  }
  .lang-btn:not(.active):hover { color: var(--cyan); }

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
  .nav-right { display: flex; align-items: center; gap: 2rem; }
  .nav-links { display: flex; gap: 1.8rem; list-style: none; }
  .nav-links button {
    background: none; border: none; cursor: pointer;
    font: 500 .78rem/1 var(--font); letter-spacing: .1em;
    text-transform: uppercase; color: var(--muted);
    transition: color .2s; padding: .3rem 0;
  }
  .nav-links button:hover { color: var(--cyan); }

  .pf-hero {
    min-height: 100svh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 2rem;
    padding: 8rem 6% 5rem;
    position: relative; overflow: hidden;
  }
  .hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image: linear-gradient(rgba(34,211,238,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hero-glow-r { position: absolute; top: -15%; right: -8%; width: 580px; height: 580px; border-radius: 50%; pointer-events: none; z-index: 0; background: radial-gradient(circle, rgba(34,211,238,.1) 0%, transparent 65%); }
  .hero-glow-l { position: absolute; bottom: -20%; left: -5%; width: 400px; height: 400px; border-radius: 50%; pointer-events: none; z-index: 0; background: radial-gradient(circle, rgba(167,139,250,.08) 0%, transparent 65%); }
  .hero-left { position: relative; z-index: 1; }
  .hero-right { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; }

  .hero-badge {
    display: inline-flex; align-items: center; gap: .55rem;
    padding: .38rem 1.1rem; margin-bottom: 1.8rem;
    background: rgba(34,211,238,.07); border: 1px solid rgba(34,211,238,.22);
    border-radius: 99px; font-size: .76rem; font-weight: 600; color: var(--cyan);
  }
  .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); animation: bdot 2s ease-in-out infinite; }
  @keyframes bdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(1.6)} }

  .hero-name { font-size: clamp(2.4rem, 5.5vw, 3rem); font-weight: 900; line-height: 1.04; letter-spacing: -.03em; margin-bottom: .9rem; }
  .hero-name-accent { background: linear-gradient(125deg, var(--cyan) 20%, var(--purple) 80%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .hero-role { font-size: 1.05rem; color: var(--muted); font-weight: 400; margin-bottom: 1.5rem; }
  .hero-desc { font-size: .92rem; color: var(--muted); line-height: 1.85; max-width: 460px; margin-bottom: 2rem; }

  .hero-stats { display: flex; gap: 2.5rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
  .stat-val { display: block; font-size: 2rem; font-weight: 900; color: var(--cyan); line-height: 1; letter-spacing: -.03em; }
  .stat-lbl { display: block; font-size: .67rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .1em; margin-top: .35rem; }

  .hero-btns { display: flex; gap: .85rem; flex-wrap: wrap; }
  .btn { display: inline-flex; align-items: center; gap: .5rem; padding: .72rem 1.65rem; border-radius: 10px; font: 700 .87rem/1 var(--font); cursor: pointer; text-decoration: none; transition: all .2s ease; }
  .btn-fill { background: var(--cyan); color: #020617; border: none; }
  .btn-fill:hover { background: #67e8f9; transform: translateY(-2px); box-shadow: 0 10px 32px rgba(34,211,238,.3); }
  .btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--border); }
  .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }

  .photo-wrap { position: relative; width: 310px; height: 310px; }
  .photo-ring { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(var(--cyan), var(--purple), var(--orange), var(--cyan)); animation: ringrotate 7s linear infinite; }
  @keyframes ringrotate { to { transform: rotate(360deg); } }
  .photo-mask { position: absolute; inset: 4px; border-radius: 50%; overflow: hidden; background: var(--bg3); }
  .photo-mask img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
  .photo-chip { position: absolute; display: inline-flex; align-items: center; gap: .45rem; padding: .48rem 1rem; border-radius: 12px; font-size: .73rem; font-weight: 700; white-space: nowrap; animation: levitate 3.5s ease-in-out infinite; }
  @keyframes levitate { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
  .chip-a { top: -4%; right: 10%; background: rgba(34,211,238,.12); border: 1px solid rgba(34,211,238,.3); color: var(--cyan); animation-delay: 0s; }
  .chip-b { bottom: 2%; left: 10%; background: rgba(251,146,60,.12); border: 1px solid rgba(251,146,60,.3); color: var(--orange); animation-delay: 1.7s; }
  .chip-c { top: 44%; right: 0%; background: rgba(167,139,250,.12); border: 1px solid rgba(167,139,250,.3); color: var(--purple); animation-delay: .85s; }

  .pf-sec { padding: 6rem 6%; }
  .pf-sec.alt { background: var(--bg2); }
  .reveal { opacity: 0; transform: translateY(26px); transition: opacity .65s ease, transform .65s ease; }
  .reveal.shown { opacity: 1; transform: translateY(0); }

  .s-eye { display: inline-flex; align-items: center; gap: .5rem; font-size: .72rem; text-transform: uppercase; letter-spacing: .14em; color: var(--cyan); font-weight: 700; margin-bottom: .85rem; }
  .s-eye::before { content:''; width: 22px; height: 2px; background: var(--cyan); border-radius: 1px; }
  .s-h { font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -.025em; margin-bottom: .75rem; }
  .s-sub { color: var(--muted); font-size: .9rem; line-height: 1.78; max-width: 550px; margin-bottom: 2.8rem; }
  .s-rule { width: 38px; height: 3px; border-radius: 2px; background: linear-gradient(to right, var(--cyan), var(--purple)); margin: .7rem 0 2.6rem; }

  .about-cols { display: grid; grid-template-columns: 1.1fr 1fr; gap: 4rem; }
  .about-p { font-size: .9rem; color: var(--muted); line-height: 1.88; margin-bottom: .9rem; }
  .about-p strong { color: var(--text); font-weight: 700; }
  .about-img { width: 100%; border-radius: 20px; object-fit: cover; object-position: center; border: 1px solid var(--border); filter: brightness(.88) contrast(1.05); }
  .edu-card { margin-top: 2rem; padding: 1.1rem 1.4rem; background: var(--card); border: 1px solid var(--border); border-left: 3px solid var(--cyan); border-radius: 10px; display: flex; align-items: center; gap: 1rem; }
  .edu-icon { font-size: 1.6rem; flex-shrink: 0; }
  .edu-school { font-size: .9rem; font-weight: 700; }
  .edu-detail { font-size: .78rem; color: var(--muted); margin-top: .2rem; }

  .wid-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
  .wid-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.8rem 1.5rem; transition: all .3s ease; position: relative; overflow: hidden; }
  .wid-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, var(--cyan10) 0%, transparent 60%); opacity: 0; transition: opacity .3s; }
  .wid-card:hover::before { opacity: 1; }
  .wid-card:hover { transform: translateY(-5px); border-color: var(--cyan20); }
  .wid-icon { font-size: 2.2rem; margin-bottom: 1rem; }
  .wid-title { font-size: 1rem; font-weight: 800; margin-bottom: .5rem; }
  .wid-desc { font-size: .84rem; color: var(--muted); line-height: 1.7; }
  .wid-tags { display: flex; flex-wrap: wrap; gap: .38rem; margin-top: 1rem; }
  .wid-tag { padding: .22rem .6rem; border-radius: 5px; font-size: .7rem; font-weight: 600; background: var(--cyan10); color: var(--cyan); }

  .skill-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem 3rem; }
  .skill-grp-name { font-size: .72rem; text-transform: uppercase; letter-spacing: .12em; color: var(--dim); font-weight: 700; margin-bottom: .65rem; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: .5rem; }
  .stag { padding: .44rem .95rem; background: var(--card); border: 1px solid var(--border); border-radius: 8px; font-size: .82rem; font-weight: 500; color: var(--text); cursor: default; transition: all .18s ease; }
  .stag:hover { border-color: var(--cyan); color: var(--cyan); background: var(--cyan10); transform: translateY(-2px); }

  .tl { position: relative; padding-left: 1.6rem; }
  .tl::before { content: ''; position: absolute; left: 0; top: 6px; bottom: 6px; width: 2px; background: linear-gradient(to bottom, var(--cyan), rgba(167,139,250,.25)); }
  .tl-item { position: relative; margin-bottom: 3.2rem; padding-left: 1.8rem; }
  .tl-dot { position: absolute; left: -2.23rem; top: .26rem; width: 13px; height: 13px; border-radius: 50%; border: 2px solid var(--cyan); background: var(--bg); transition: background .3s; }
  .tl-item:hover .tl-dot { background: var(--cyan); }
  .tl-period { font-size: .76rem; color: var(--cyan); font-weight: 700; letter-spacing: .06em; margin-bottom: .45rem; }
  .tl-co { font-size: 1.18rem; font-weight: 800; margin-bottom: .2rem; }
  .tl-role { font-size: .88rem; color: var(--muted); margin-bottom: 1rem; }
  .tl-role span { font-weight: 700; }
  .tl-ul { list-style: none; display: flex; flex-direction: column; gap: .52rem; }
  .tl-ul li { font-size: .86rem; color: var(--muted); line-height: 1.65; padding-left: 1.05rem; position: relative; }
  .tl-ul li::before { content: '▸'; position: absolute; left: 0; color: var(--orange); }
  .tl-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: .65rem; margin-top: 1.1rem; align-items: start; }
  .tl-img { border-radius: 9px; border: 1px solid var(--border); display: block; transition: transform .3s, border-color .3s; }
  .tl-img:hover { transform: scale(1.02); border-color: var(--cyan20); }

  .tl-video-wrap { margin-top: 1.1rem; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); position: relative; background: #000; width: 40%; transition: border-color .3s; }
  .tl-video-wrap:hover { border-color: var(--cyan20); }
  .tl-video { width: 100%; height: auto; display: block; border-radius: 12px; }
  .tl-video-label { display: inline-flex; align-items: center; gap: .4rem; margin-top: .65rem; font-size: .74rem; color: var(--muted); font-weight: 600; letter-spacing: .06em; }
  .tl-video-label::before { content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 6px var(--orange); animation: bdot 2s ease-in-out infinite; }

  .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
  .proj-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; overflow: hidden; transition: all .32s ease; display: flex; flex-direction: column; }
  .proj-card:hover { transform: translateY(-7px); border-color: var(--cyan20); box-shadow: 0 24px 60px rgba(0,0,0,.4), 0 0 0 1px var(--cyan20); }
  .proj-thumbs { display: flex; flex-direction: column; width: 100%; overflow: hidden; }
  .proj-thumb { width: 100%; object-fit: cover; object-position: top center; border-bottom: 1px solid var(--border); display: block; transition: transform .45s ease; }
  .proj-card:hover .proj-thumb { transform: scale(1.02); }
  .proj-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
  .proj-stack { display: flex; flex-wrap: wrap; gap: .38rem; margin-bottom: 1rem; }
  .ptag { padding: .22rem .6rem; border-radius: 5px; font-size: .7rem; font-weight: 700; background: var(--cyan10); color: var(--cyan); }
  .proj-title { font-size: 1.18rem; font-weight: 800; margin-bottom: .2rem; }
  .proj-sub { font-size: .78rem; color: var(--muted); margin-bottom: .7rem; }
  .proj-desc { font-size: .87rem; color: var(--muted); line-height: 1.72; margin-bottom: .9rem; }
  .proj-ul { list-style: none; display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1.4rem; flex: 1; }
  .proj-ul li { font-size: .81rem; color: var(--muted); padding-left: .9rem; position: relative; line-height: 1.5; }
  .proj-ul li::before { content: '→'; position: absolute; left: 0; color: var(--cyan); }
  .proj-links { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); }
  .proj-gh-link { display: inline-flex; align-items: center; gap: .45rem; padding: .52rem 1.05rem; border-radius: 8px; background: rgba(255,255,255,.04); border: 1px solid var(--border); color: var(--muted); font: 600 .78rem/1 var(--font); text-decoration: none; transition: all .2s ease; white-space: nowrap; }
  .proj-gh-link svg { width: 14px; height: 14px; flex-shrink: 0; fill: currentColor; }
  .proj-gh-link:hover { border-color: var(--cyan); color: var(--cyan); background: var(--cyan10); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(34,211,238,.15); }

  .cert-grid { display: flex; flex-direction: column; gap: 1.8rem; width: 100%; }
  .cert-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 2rem; display: grid; grid-template-columns: 1.2fr 1.8fr; gap: 2.5rem; align-items: center; transition: all .32s ease; overflow: hidden; }
  .cert-card:hover { border-color: var(--cyan20); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
  .cert-left { width: 100%; display: flex; justify-content: center; align-items: center; }
  .cert-large-img { object-fit: contain; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 8px 24px rgba(0,0,0,0.2); display: block; }
  .cert-right { display: flex; flex-direction: column; justify-content: center; }
  .cert-name { font-size: 1.4rem; font-weight: 800; line-height: 1.4; margin-bottom: 0.6rem; color: var(--text); }
  .cert-org { font-size: 0.95rem; color: var(--muted); line-height: 1.6; }
  @media (max-width: 900px) {
    .cert-card { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
    .cert-name { font-size: 1.15rem; }
  }

  .contact-wrap { max-width: 680px; margin: 0 auto; text-align: center; }
  .contact-desc { font-size: .92rem; color: var(--muted); line-height: 1.82; margin-top: 1rem; }
  .clinks { display: flex; flex-wrap: wrap; justify-content: center; gap: .9rem; margin-top: 2.6rem; }
  .clink { display: inline-flex; align-items: center; gap: .55rem; padding: .7rem 1.4rem; border-radius: 10px; background: var(--card); border: 1px solid var(--border); color: var(--text); text-decoration: none; font: 500 .84rem/1 var(--font); transition: all .2s; }
  .clink:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); background: var(--cyan10); }

  .pf-footer { padding: 1.6rem 6%; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-size: .78rem; color: var(--dim); }
  .footer-brand { color: var(--cyan); font-weight: 700; }

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
      sub: "Website จัดการการเงิน",
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
            <Img src="/images/Profile_2.jpg" alt={t.name} className="about-img" style={{ height: "auto", width: "50%" }} />
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