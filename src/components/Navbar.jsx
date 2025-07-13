import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Typewriter } from 'react-simple-typewriter';

const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Contact'];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // ฟังก์ชัน scroll ไป section ที่คลิก และปิดเมนูมือถือ
  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: {xs: '80%', sm: '80%', md: '85%', lg: '70%', xl: '60%'},
        height: '60px',
        marginTop: '20px',
        backgroundColor: 'rgba(75, 80, 156, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1300,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        userSelect: 'none',
        px: 2,
      }}
    >
      {/* ข้อความ Typewriter */}
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: '#eee', marginLeft: '1rem' }}>
          <Typewriter
            words={['AI Developer', 'Software Developer', 'Full Stack Developer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </Typography>
      </Box>

      {/* เมนูใหญ่ Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', justifyContent: 'right' }}>
        {menuItems.map((item) => (
          <Typography
            key={item}
            onClick={() => scrollToSection(item)}
            sx={{
              cursor: 'pointer',
              fontWeight: 600,
              color: '#eee',
              padding: '0 25px',
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                color: '#fff',
                transform: 'translateY(-2px)',
                textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* Hamburger menu มือถือ */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'flex-end' }}>
        <IconButton aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenuOpen} sx={{ color: '#eee' }}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={() => scrollToSection(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

export default Navbar;
