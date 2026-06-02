import React, { useRef } from 'react';
import './App.css';

import Home from './pages/Home.jsx';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  // สำหรับ scroll ไป section ต่าง ๆ
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div id="home"><Home onStartClick={scrollToAbout} /></div>
  );
}

export default App;
