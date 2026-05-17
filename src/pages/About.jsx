import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Box, Typography, Button, Container, Grid } from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook'
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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
                                mx: { xs: 'auto', lg: '1.5rem' },
                                display: { xs: 'flex', lg: 'block' },
                                justifyContent: { xs: 'center', lg: 'flex-start' },
                            }}
                        >
                            <img
                                src={Profile_2}
                                alt="Profile_2"
                                data-aos="fade-right"
                                className="neon-border"
                                style={{
                                    borderRadius: '0.5rem',
                                    maxWidth: '100%',
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
                            ระหว่างฝึกงานที่ G-Able ผมได้พัฒนาระบบ Enterprise ระดับ Financial Industry
                            กว่า 8 โมดูล และแก้ไข Defect กว่า 180+ รายการภายใน 4 เดือน
                            รวมถึงปรับปรุงประสิทธิภาพ SQL Query ลดเวลาโหลดจาก 20 วินาที เหลือเพียง 3 วินาที
                            <br />
                            ที่ Unicorn Tech x Villa Market ผมได้สร้าง AI Pipeline ด้วย n8n
                            ที่สามารถ generate วิดีโอได้ 230 คลิปใน 25 นาที
                            จากเดิมที่ทำได้เพียง 20 คลิปต่อวัน คิดเป็น Productivity ที่เพิ่มขึ้นถึง 220 เท่า
                            <br />
                            ผมสนุกกับการแก้ปัญหาที่ซับซ้อน และพร้อมปรับตัวกับเทคโนโลยีใหม่ ๆ เสมอครับ
                            ไปดูทักษะและผลงานของผมกันได้เลย!
                        </Typography>

                        <Box my={3}></Box>

                        {/* สาขาวิชา */}
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
                                    top: -2, left: -2, right: -2, bottom: -2,
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
                                สาขาวิชา : วิทยาการคอมพิวเตอร์ (Information Technology and Innovation)
                            </Typography>
                        </Box>
                        <Box my={3.5}></Box>

                        {/* มหาวิทยาลัย */}
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
                                    top: -2, left: -2, right: -2, bottom: -2,
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
                            <MenuBookIcon sx={{ color: '#FFD700', fontSize: 28, mx: 2 }} />
                            <Typography variant="h3" fontSize="1rem" fontWeight={700} color="#FFF" mt={0.3} mr={4}>
                                มหาวิทยาลัย : มหาวิทยาลัยกรุงเทพ (Bangkok University)
                            </Typography>
                        </Box>
                        <Box my={3.5}></Box>

                        {/* GPA */}
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
                                    top: -2, left: -2, right: -2, bottom: -2,
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
                                เกรดเฉลี่ยรวม : 3.70
                            </Typography>
                        </Box>
                        <Box my={3.5}></Box>

                        {/* ประสบการณ์ฝึกงาน */}
                        <Box
                            display="flex"
                            alignItems="center"
                            data-aos="fade-up" data-aos-delay="600"
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
                                    top: -2, left: -2, right: -2, bottom: -2,
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
                            <WorkIcon sx={{ color: '#FFD700', fontSize: 28, mx: 2 }} />
                            <Typography variant="h3" fontSize="1rem" fontWeight={700} color="#FFF" mt={0.3} mr={4}>
                                ประสบการณ์ฝึกงาน : 2 แห่ง (G-Able, Unicorn Tech x Villa Market)
                            </Typography>
                        </Box>
                        <Box my={3.5}></Box>

                        {/* รางวัล */}
                        <Box
                            display="flex"
                            alignItems="center"
                            data-aos="fade-up" data-aos-delay="700"
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
                                    top: -2, left: -2, right: -2, bottom: -2,
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
                            <EmojiEventsIcon sx={{ color: '#FFD700', fontSize: 28, mx: 2 }} />
                            <Typography variant="h3" fontSize="1rem" fontWeight={700} color="#FFF" mt={0.3} mr={4}>
                                รางวัล : อันดับที่ 3 ระดับชาติ — buzzde x DEPA
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default About