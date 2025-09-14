import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Button, Container } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import Profile from '../assets/images/Profile.jpg';
import './Home.css';

export default function Home({ onStartClick }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);
    const handleScroll = () => {
        scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
        
        <Box
            sx={{
                minHeight: 'auto',
                width: '100%',
                my: '10rem',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                p: 2,
                overflow: 'hidden',
                textAlign: 'center',
            }}
        >
            <Navbar />


            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                <Box
                    component="img"
                    src={Profile}
                    alt="Profile"
                    className="neon-border"
                    data-aos="fade-up"
                    sx={{
                        width: '100%',
                        maxWidth: { xs: '180px', sm: '200px', md: '240px', lg: '280px' },
                        height: 'auto',
                        borderRadius: '150px',
                        border: '2px solid #b833ff', // สีม่วงเน้น
                        mb: {xs: 2, sm: 4},
                        mt: {xs: 9, sm: 0}
                    }}
                />
                <Typography
                    variant="h3"
                    fontWeight={700}
                    fontSize='2.5rem'
                    gutterBottom
                    data-aos="fade-up"
                >
                    Warapob Kawinrum
                </Typography>

                <Typography
                    variant="h6"
                    fontWeight={400}
                    gutterBottom
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    โปรแกรมเมอร์ที่ฝันทำอาชีพ Cybersecurity
                </Typography>

                <Typography
                    variant="h6"
                    fontWeight={300}
                    fontSize="15px"
                    sx={{ pt: 1, lineHeight: '1.8rem' }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    สวัสดีครับ! ผมชื่อ วราภพ ควินรัมย์ หรือเรียกผมว่า "เพ้นท์" ก็ได้ครับ ตอนนี้ผมเป็นนักศึกษาชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ 
                    นี่คือเว็บไซต์ Portfolio ส่วนตัวของผม ที่ใช้แสดงทักษะและโปรเจกต์ต่าง ๆ
                    <br />
                    เป้าหมายในสายอาชีพของผมคือ การเป็นนักพัฒนาระบบรักษาความปลอดภัย (Cybersecurity), นักพัฒนาซอฟต์แวร์ (Software Developer) หรือ Full Stack Developer
                    ผมมีความชื่นชอบในการตรวจจับระบบหรือแฮกเกอร์ข้อมูล ที่สามารถใช้แก้ไขปัญหาจริงในโลก และเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่องแบบไม่หยุดพัก!

                   
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        width: '10rem',
                        height: '2.8rem',
                        mt: {xs: 1, sm: 3},
                        backgroundImage: 'linear-gradient(to right, rgb(169, 26, 213), rgb(124, 41, 145))',
                        color: 'white',
                        border: '2px solid rgba(255, 0, 255, 0.3)',
                        boxShadow: '0 0 10px rgba(255, 0, 255, 0.4)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            backgroundImage: 'linear-gradient(to right, rgb(200, 50, 255), rgb(255, 100, 255))',
                            color: '#fff',
                            boxShadow: `
                0 0 10px rgba(255, 0, 255, 0.6),
                0 0 20px rgba(255, 0, 255, 0.6),
                0 0 30px rgba(255, 0, 255, 0.6)
            `,
                            transform: 'scale(1.05)',
                        },
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                     onClick={handleScroll}
                >
                    เริ่มเลย!

                      

                </Button>

            </Container>
        </Box>

        </>
    );
};
