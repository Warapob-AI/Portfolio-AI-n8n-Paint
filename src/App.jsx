import React, { useRef } from 'react';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skill from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans Thai", sans-serif',
  },
});

function App() {
  // สำหรับ scroll ไป section ต่าง ๆ
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* พื้นหลังฟองอากาศ */}
      <div className="background" style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {[...Array(26)].map((_, i) => <span key={i}></span>)}
      </div>

      <CssBaseline />

      {/* Home (มีปุ่มที่เรียก scrollToAbout) */}
      <div id="home"><Home onStartClick={scrollToAbout} /></div>
      <div id="about"><About onStartClick={scrollToAbout} /></div>
      <div id="skills"><Skill /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
    </ThemeProvider>
  );
}

export default App;
