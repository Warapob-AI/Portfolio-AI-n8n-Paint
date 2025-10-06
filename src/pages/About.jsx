import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Box, Typography, Button, Container, Grid } from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook'
import CodeIcon from '@mui/icons-material/Code';
import Profile_2 from '../assets/images/Profile_2.jpg'


const About = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ position: 'relative'}} >
              <Grid container spacing={0}>
                    <Grid
                        size={{ xs: 12, lg: 5 }}
                        sx={{ xs: { px: 2.5 } }}
                        data-aos="fade-up"
                    >

                        <Box
                            sx={{
                                width: { xs: '250px', sm: '425px' },
                                mb: { xs: '2rem' },
                                mt: 15,
                                mx: { xs: 'auto', lg: '1.5rem' }, // xs: center, md+: เหมือนเดิม
                                display: { xs: 'flex', lg: 'block' },
                                justifyContent: { xs: 'center', lg: 'flex-start' }, // กึ่งกลางเฉพาะ xs
                            }}
                        >
                            <img
                                src={Profile_2}
                                alt="Profile_2"
                                data-aos="fade-right"
                                className="neon-border"
                                style={{
                                    borderRadius: '0.5rem',
                                    maxWidth: '100%', // ป้องกันเกินจอ
                                    height: 'auto',
                                    
                                }}
                            />
                        </Box>

                    </Grid>

                    <Grid
                        size={{ xs: 12, lg: 7 }}
                        sx={{ px: 2.5 }}
                    >
                        <Typography mt={15} variant='h3' fontSize={'2.8rem'} fontWeight={700} color='#FFF' gutterBottom data-aos="fade-up" data-aos-delay="100">
                            About me
                        </Typography>

                        <Typography variant='h3' fontSize={'1rem'} fontWeight={400} color='#FFF' lineHeight={2} gutterBottom data-aos="fade-up" data-aos-delay="200">
                            ผมเป็นคนที่ชอบเรียนรู้สิ่งใหม่ ๆ และตั้งใจทำงานอยู่เสมอ (จริง ๆ นะ)
<<<<<<< HEAD
                            ผมพยายามทำทุกงานให้เสร็จตรงเวลา และพยายามทำให้ดีที่สุดเท่าที่จะทำได้อย่างไม่ลดละในทุกสิ่งที่ทำ เวลา Tester ก็ตรวจสอบทุกฟังก์ชันอย่างรอบคอบ หรือเวลาใช้ AI เข้ามาช่วยทำงาน ก็พยายามเช็กว่า AI ทำอะไรผิดตรงไหนหรือเปล่า
=======
                            ผมพยายามทำทุกงานให้เสร็จตรงเวลา และพยายามทำให้ดีที่สุดเท่าที่จะทำได้อย่างไม่ลดละในทุกสิ่งที่ทำ
>>>>>>> d3528d12886d9533dbf6f6306034485ca932ac51

                            ผมสนุกกับการเขียนโค้ดและการเขียนโปรแกรม และผมยังคงเรียนรู้อย่างต่อเนื่องไม่หยุดพัก
                            หนึ่งในสิ่งที่น่าสนใจที่ผมเคยทำคือ การสร้างระบบ AI ด้วย n8n ซึ่งช่วยให้ผมเข้าใจในเรื่องของ Logic และ Automation system ร่วมกันได้มากขึ้น

                            นอกจากนี้ ผมยังเคยผ่านการฝึกงานมาแล้ว 1 ที่ด้วย จึงมีประสบการณ์การทำงานจริงในระดับหนึ่ง
                            ฟังดูน่าสนใจใช่ไหมล่ะ? 😄 งั้นไปดูทักษะและผลงานของผมที่ได้รวบรวมมาตลอดหลายปีกันเถอะ!
                        </Typography>

                        <Box my={3}></Box>

                        <Box
                            display="flex"
                            data-aos="fade-up" data-aos-delay="300"
                            alignItems="center"
                            padding={2}
                            mt={2}
                            sx={{
                                position: 'relative',
                                borderRadius: '16px',
                                zIndex: 0,
                                width: 'fit-content',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -2,
                                    left: -2,
                                    right: -2,
                                    bottom: -2,
                                    borderRadius: '18px',
                                    background: 'linear-gradient(270deg,rgb(147, 14, 180),rgb(94, 23, 104),rgb(54, 7, 56))',
                                    backgroundSize: '600% 600%',
                                    animation: 'gradientBorder 6s ease infinite',
                                    zIndex: -1,
                                },
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(6px)',
                                '@keyframes gradientBorder': {
                                    '0%': { backgroundPosition: '0% 50%' },
                                    '50%': { backgroundPosition: '100% 50%' },
                                    '100%': { backgroundPosition: '0% 50%' },
                                },
                            }}
                        >
                            <CodeIcon sx={{ color: '#FFD700', fontSize: 28, mx: 2 }} />
                            <Typography variant="h3" fontSize="1rem" fontWeight={700} color="#FFF" mt={0.3} mr={4}>
                                สาขาวิชา : วิทยาการคอมพิวเตอร์
                            </Typography>
                        </Box>
                        <Box my={3.5}></Box>

                        <Box
                            display="flex"
                            data-aos="fade-up" data-aos-delay="400"
                            alignItems="center"
                            padding={2}
                            mt={2}
                            sx={{
                                position: 'relative',
                                borderRadius: '16px',
                                zIndex: 0,
                                width: 'fit-content',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -2,
                                    left: -2,
                                    right: -2,
                                    bottom: -2,
                                    borderRadius: '18px',
                                    background: 'linear-gradient(270deg,rgb(147, 14, 180),rgb(94, 23, 104),rgb(54, 7, 56))',
                                    backgroundSize: '600% 600%',
                                    animation: 'gradientBorder 6s ease infinite',
                                    zIndex: -1,
                                },
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(6px)',
                                '@keyframes gradientBorder': {
                                    '0%': { backgroundPosition: '0% 50%' },
                                    '50%': { backgroundPosition: '100% 50%' },
                                    '100%': { backgroundPosition: '0% 50%' },
                                },
                            }}>
                            <MenuBookIcon sx={{ color: '#FFD700', fontSize: 28, mx: 2 }} />
                            <Typography variant="h3" fontSize="1rem" fontWeight={700} color="#FFF" mt={0.3} mr={4}>
                                นักศึกษาระดับชั้น : ปีที่ 4
                            </Typography>
                        </Box>
                        <Box my={3.5}></Box>


                        <Box
                            display="flex"
                            alignItems="center"
                            data-aos="fade-up" data-aos-delay="500"
                            padding={2}
                            mt={2}
                            sx={{
                                position: 'relative',
                                borderRadius: '16px',
                                zIndex: 0,
                                width: 'fit-content',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -2,
                                    left: -2,
                                    right: -2,
                                    bottom: -2,
                                    borderRadius: '18px',
                                    background: 'linear-gradient(270deg,rgb(147, 14, 180),rgb(94, 23, 104),rgb(54, 7, 56))',
                                    backgroundSize: '600% 600%',
                                    animation: 'gradientBorder 6s ease infinite',
                                    zIndex: -1,
                                },
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(6px)',
                                '@keyframes gradientBorder': {
                                    '0%': { backgroundPosition: '0% 50%' },
                                    '50%': { backgroundPosition: '100% 50%' },
                                    '100%': { backgroundPosition: '0% 50%' },
                                },
                            }}
                        >
                            <SchoolIcon sx={{ color: '#FFD700', fontSize: 28, mx: 2 }} />
                            <Typography variant="h3" fontSize="1rem" fontWeight={700} color="#FFF" mt={0.3} mr={4}>
                                เกรดเฉลี่ยรวม : 3.73
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default About