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
                    Full-Stack Developer
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
                    เป้าหมายในสายอาชีพของผมคือ Full-Stack Developer, Software Developer หรือ AI Developer ผมมีความสามารถในการปรับตัวและไม่กลัวเทคโนโลยีใหม่ ๆ เรียกได้ว่า พร้อมสู้ตลอดทาง!
                    ผมมีความชื่นชอบในการเขียนโปรแกรม แก้ไขปัญหาที่จะเกิดขึ้น และไม่ย่อท้อต่อปัญหาที่เกิดขึ้น ถ้ารับผมเข้าไปทำงานด้วย ผมจะพยายามผลักดันให้องค์กรพัฒนาได้ดียิ่งขึ้นไปอีก!

                   
                </Typography>

            </Container>
        </Box>

        </>
    );
};
