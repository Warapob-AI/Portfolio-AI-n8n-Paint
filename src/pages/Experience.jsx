import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import n8n_exp_1 from '../assets/images/n8n-experience-1.jpg'
import n8n_exp_1_1 from '../assets/images/n8n-experience-1-1.jpg'
import n8n_exp_2 from '../assets/images/n8n-experience-2.jpg'
import n8n_exp_2_2 from '../assets/images/n8n-experience-2-2.jpg'

import logo_gable from '../assets/images/G-Able.png'
import logo_unicorn from '../assets/images/logo-about.svg'
import face_idle from '../assets/images/ML-Classification-Face-Idle.jpg'
import brian_tumor from '../assets/images/DL-Classification-Brain-Tumor.jpg'
import web_1 from '../assets/images/web-1.png'
import web_2 from '../assets/images/web-2.png'
import buz_1 from '../assets/images/buz-1.png'
import buz_2 from '../assets/images/buz-2.png'
import udetectionnews_1 from '../assets/images/UDetectionNews_1.png'
import udetectionnews_2 from '../assets/images/UDetectionNews_2.png'
import cybersecurity from '../assets/images/Certificate_1650706094_Warapob-1.png'
import google from '../assets/images/google.png'
import meta from '../assets/images/meta.png'
import IBM from '../assets/images/IBM.png'

import './Experience.css'
function Experience() {
    return (
        <>
            <Box mt={5}></Box>
            <Container maxWidth='lg' sx={{ position: 'relative' }}>
                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={'2.2rem'} fontWeight={700} color='#FFF' mb={7} mt={12} ml={2}>
                    Experience (Internship)
                </Typography>

                <Box my={3}></Box>

                <Grid container spacing={10}>
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, lg: 4 }}
                        sx={{
                            ml: { xs: 0, lg: 10 },
                            mt: 2,
                            display: 'flex',
                            justifyContent: { xs: 'center', lg: 'flex-start' },
                        }}>
                        <img
                            src={logo_gable}
                            width="200px"
                            className="neon-border"
                            style={{
                                maxWidth: '100%',
                                height: '233px',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                            }}
                            alt="G-Able Logo"
                        />
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, lg: 7 }} marginLeft={2}>
                        <Typography
                            variant='h3'
                            fontSize={{ xs: '1.5rem', sm: '2.5rem', md: '3rem' }}
                            fontWeight={700}
                            sx={{
                                background: 'linear-gradient(90deg, #fff, #00cfff, #fff)',
                                backgroundSize: '200% auto',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                animation: 'shine 3s linear infinite',
                                '@keyframes shine': {
                                    '0%': { backgroundPosition: '200% center' },
                                    '100%': { backgroundPosition: '0% center' },
                                },
                            }}
                        >
                            G-Able Public Company Limited
                        </Typography>

                        <Typography variant='h6' color='#AAA' fontWeight={400} fontSize={'0.95rem'} mt={1}>
                            Full-Stack Developer (Internship) · ม.ค. 2026 – พ.ค. 2026
                        </Typography>

                        <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            ผมมีประสบการณ์การฝึกงานจาก G-Able Public Company Limited
                            ซึ่งเป็นบริษัท IT ชั้นนำของไทยในระยะเวลา 4 เดือน
                            และได้สั่งสมประสบการณ์การทำงานจริงในระดับ Enterprise ดังนี้
                            <br />• พัฒนา 8+ โมดูลหลักสำหรับระบบบริหารจัดการประกันภัยต่อและภาษี (Reinsurance & Tax Management) ด้วย Angular (TypeScript) และ Java (Spring Boot)
                            <br />• ปรับปรุงประสิทธิภาพ SQL Query ด้วย Database Indexing
                            <br />• แก้ไข Defect และ Improvement Task กว่า 180+ รายการภายใน 4 เดือน และส่งมอบงานให้ลูกค้าได้ตามกำหนด
                            <br />• ประสานงานกับ Business Analyst เพื่อรวบรวม Requirements และแปลงเป็น Technical Solution
                            <br />• ประสานงานกับทีม Cross-functional เพื่อขอเอกสาร API และแก้ไขปัญหาการ Integration
                        </Typography>
                    </Grid>
                </Grid>

                <Box my={6}></Box>

                <Grid container spacing={10} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, lg: 4 }}
                        sx={{
                            ml: { xs: 0, lg: 10 }, // 👉 ml เฉพาะตอน md ขึ้นไป
                            mt: 2,
                            display: 'flex',
                            justifyContent: {
                                xs: 'center', // 👉 จัดกึ่งกลางตอน < md
                                lg: 'flex-start' // 👉 ชิดซ้ายตาม ml ตอน ≥ md
                            },
                        }}>
                        <img
                            src={logo_unicorn}
                            width="250px"
                            style={{ maxWidth: '100%' }}
                            alt="Unicorn Logo"
                        />
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, lg: 7 }} marginLeft={2}>
                        <Typography
                            variant='h3'
                            fontSize={{ xs: '1.5rem', sm: '2.5rem', md: '3rem' }}
                            fontWeight={700}
                            sx={{
                                background: 'linear-gradient(90deg, #fff, hotpink, #fff)',
                                backgroundSize: '200% auto',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                animation: 'shine 3s linear infinite',
                                '@keyframes shine': {
                                    '0%': {
                                        backgroundPosition: '200% center',
                                    },
                                    '100%': {
                                        backgroundPosition: '0% center',
                                    },
                                },
                            }}
                        >
                            Unicorn Tech Integration
                        </Typography>

                        <Typography variant='h6' color='#AAA' fontWeight={400} fontSize={'0.95rem'} mt={1}>
                            AI Developer (Internship) · พ.ค. 2025 – ส.ค. 2025
                        </Typography>

                        <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            ผมมีประสบการณ์การฝึกงานจาก Unicorn Tech Integration ซึ่งเป็นบริษัทเทคโนโลยีชั้นนำที่ทำงานร่วมกับ Villa Market ในระยะเวลา 3 เดือน (พฤษภาคม - สิงหาคม)
                            และได้สั่งสมประสบการณ์และทักษะที่จำเป็นต่อการทำงานจริง ไม่ว่าจะเป็น
                            <br />• การนำเสนอและพูดคุยกับ CTO ในเรื่องของการทำงานโดยตรง
                            <br />• การทำงานพูดคุยร่วมกันเป็นทีมอย่างมีประสิทธิภาพ
                            <br />• ความปลอดภัยในด้านการเขียนโปรแกรมและข้อมูล
                            <br />• Build AI Agent Automation (n8n)
                            <br />• API Service & Restful API
                            <br />
                        </Typography>
                    </Grid>
                </Grid>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Website - Detection Fake News Thailand
                </Typography>

                <Grid container spacing={2}>
                    {/* รูปซ้าย */}
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right" data-aos-delay="100">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%', // ทำให้ Box สูงเท่า Grid เพื่อจัดกลางแนวตั้ง
                                margin: '0 15px'
                            }}
                        >
                            <div className='border-animated-wrapper'>
                                <img
                                    src={udetectionnews_1}
                                    width="100%"
                                    height="auto"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </Box>
                    </Grid>

                    {/* รูปขวา */}
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left" data-aos-delay="100">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                margin: '0 15px'
                            }}
                        >
                            <div className='border-animated-wrapper'>
                                <img
                                    src={udetectionnews_2}
                                    width="100%"
                                    height="auto"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} lineHeight={2} ml={2} data-aos="fade-right" data-aos-delay="100">
                    <br />• พัฒนาเว็บไซต์สำหรับตรวจสอบข่าวปลอม (Fake News) ในภาษาไทย
                    โดยเฉพาะได้อย่างแม่นยำ โดยรองรับการตรวจสอบทั้งข้อความและลิงก์
                    <br />• ใช้ทีมปัญญาประดิษฐ์ (AI Agents) ที่ทำงานประสานกันเป็นระบบ
                    <br />• พัฒนาเว็บไซต์โดยใช้เทคโนโลยี React.js สำหรับส่วนติดต่อผู้ใช้ (UI), Python (FastAPI) สำหรับเซิร์ฟเวอร์หลัก MongoDB จัดเก็บข้อมูล
                </Typography>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={'2.2rem'} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    n8n - Build AI Dime Message Gmail
                </Typography>

                <Grid container>
                    <Grid data-aos="fade-right" data-aos-delay="100" size={{ md: 7 }}>
                        <Grid ml={2}>
                            <div className="border-animated-wrapper" >
                                <img
                                    src={n8n_exp_1}
                                    style={{
                                        maxWidth: '100%',
                                        display: 'block',
                                    }}
                                    alt="n8n experience"
                                />
                            </div>
                        </Grid>

                        <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} lineHeight={2} ml={2}>
                            <br />• ใน Project นี้ ผมได้สร้าง Workflow Automation ใน n8n
                            <br />• จัดการและวิเคราะห์จดหมายอีเมลแจ้งเตือนผลการลงทุนจาก "Dime" ที่แนบไฟล์ PDF มา
                            <br />• โดยมีเป้าหมายเพื่อสรุปผลกำไร/ขาดทุน และส่งการแจ้งเตือนไปยัง Line ทันที
                            <br />• พร้อมทั้งบันทึกข้อมูลลง Google Sheets เพื่อการวิเคราะห์ในระยะยาว
                            <br />• Workflow นี้ช่วยให้ผมสามารถติดตามผลการลงทุนได้อย่างอัตโนมัติ ประหยัดเวลาในการตรวจสอบอีเมลและคำนวณด้วยตนเอง
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }} data-aos="fade-left" data-aos-delay="100">
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: {
                                    xs: 'center',  // ✅ จอเล็ก: ตรงกลาง
                                    md: 'flex-end' // ✅ จอ md ขึ้นไป: ชิดขวา
                                },
                                pr: { xs: 0, md: 2 }, // padding ขวานิดหน่อยเมื่อเป็นจอใหญ่
                            }}
                        >
                            <div className="border-animated-n8n">
                                <img
                                    src={n8n_exp_1_1}
                                    alt="n8n experience"
                                    style={{
                                        maxWidth: '100%',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={'2.2rem'} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    n8n - Build AI Fix Category
                </Typography>

                <Grid container>
                    <Grid size={{ xs: 12, md: 7 }} data-aos="fade-right" data-aos-delay="100">
                        <Grid ml={2}>
                            <div className="border-animated-wrapper" >
                                <img
                                    src={n8n_exp_2}
                                    style={{
                                        maxWidth: '100%',
                                        display: 'block',
                                    }}
                                    alt="n8n experience"
                                />
                            </div>
                        </Grid>

                        <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} lineHeight={2} ml={2}>
                            <br />• ใน Project นี้ ผมได้สร้าง Workflow Automation ใน n8n
                            <br />• Workflow นี้เป็นระบบอัตโนมัติที่ออกแบบมาเพื่อคัดกรองและแก้ไขหมวดหมู่ของ Feedback
                            <br />• ซึ่ง Feedback อาจถูกจัดประเภทไว้ผิดพลาด และทำให้กลับมาถูกต้องแม่นยำยิ่งขึ้นโดยใช้ AI
                            <br />• พร้อมทั้งบันทึกข้อมูลลง Microsoft Excel แทนที่ข้อมูลเดิม
                            <br />• ปรับแต่ง Prompt AI อย่างเข้มงวดและละเอียด เพื่อให้ AI สามารถแก้ไข Feedback ให้ถูกต้องได้ตามความเหมาะสม
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }} data-aos="fade-left" data-aos-delay="100">
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: {
                                    xs: 'center',  // ✅ จอเล็ก: ตรงกลาง
                                    md: 'flex-end' // ✅ จอ md ขึ้นไป: ชิดขวา
                                },
                                pr: { xs: 0, md: 2 }, // padding ขวานิดหน่อยเมื่อเป็นจอใหญ่
                            }}
                        >
                            <div className="border-animated-n8n">
                                <img
                                    src={n8n_exp_2_2}
                                    alt="n8n experience"
                                    style={{
                                        maxWidth: '100%',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Deep Learning - Classification Brain Tumor MRI
                </Typography>

                <Grid container spacing={5} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            mx: 2

                        }}>
                        <div className='border-animated-wrapper'>


                            <img
                                src={brian_tumor}
                                width="100%"
                                height="auto"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, md: 5.5 }} >
                        <Typography
                            variant='h3'
                            fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem' }}
                            fontWeight={600}
                            color='#FFF'
                            marginLeft={2}

                        >
                            Detection Brain Tumor MRI
                        </Typography>


                        <Typography marginLeft={2} variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            โปรเจคนี้มุ่งเน้นการพัฒนาโมเดล Deep Learning เพื่อจำแนกภาพ MRI ของสมองออกเป็น 4 คลาส เพื่อตรวจจับการมีเนื้องอกในสมอง วัตถุประสงค์หลักคือเพื่อช่วยในการตรวจพบเนื้องอกในสมองตั้งแต่ระยะเริ่มต้น ซึ่งจะเป็นประโยชน์ในด้านการวินิจฉัยทางการแพทย์
                            <br />• เนื้องอกในสมองชนิด Glioma
                            <br />• เนื้องอกในสมองชนิด Meningioma
                            <br />• เนื้องอกในสมองชนิด Pituitary
                            <br />• ไม่มีเนื้องอก (Normal)
                        </Typography>
                    </Grid>
                </Grid>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Machine Learning - Classification Face Idle K-Pop
                </Typography>

                <Grid container spacing={5} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            mx: 2

                        }}>
                        <div className='border-animated-wrapper'>


                            <img
                                src={face_idle}
                                width="100%"
                                height="auto"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, md: 5.5 }} >
                        <Typography
                            variant='h3'
                            fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem' }}
                            fontWeight={600}
                            color='#FFF'
                            marginLeft={2}

                        >
                            Detection Face Idle
                        </Typography>


                        <Typography marginLeft={2} variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            โปรเจคนี้ใช้ Machine Learning ในการตรวจจับและจดจำใบหน้าของสมาชิกวง (G)I-DLE โดยใช้ SVM (Support Vector Machine) และ DeepFace เพื่อดึงคุณลักษณะจากใบหน้า
                            <br />• ตรวจจับใบหน้าจากภาพโดยใช้โมเดล Caffe SSD
                            <br />• ดึงคุณลักษณะใบหน้าด้วย DeepFace (Facenet)
                            <br />• ฝึกโมเดล SVM เพื่อจำแนกใบหน้าเป็นสมาชิกแต่ละคน
                            <br />• ทดสอบโมเดลกับภาพใหม่และแสดงผลการทำนาย
                        </Typography>
                    </Grid>
                </Grid>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Front-End Developer - Build Website My Portfolio
                </Typography>

                <Grid container spacing={2}>
                    {/* รูปซ้าย */}
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right" data-aos-delay="100">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%', // ทำให้ Box สูงเท่า Grid เพื่อจัดกลางแนวตั้ง
                                margin: '0 15px'
                            }}
                        >
                            <div className='border-animated-wrapper'>
                                <img
                                    src={web_1}
                                    width="100%"
                                    height="auto"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </Box>
                    </Grid>

                    {/* รูปขวา */}
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left" data-aos-delay="100">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                margin: '0 15px'
                            }}
                        >
                            <div className='border-animated-wrapper'>
                                <img
                                    src={web_2}
                                    width="100%"
                                    height="auto"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} lineHeight={2} ml={2} data-aos="fade-right" data-aos-delay="100">
                    <br />• ฝึกการเขียนเว็บไซต์ Portfolio และ Personality ด้วยตัวเองเมื่อหลายปีก่อน
                    <br />• ฝึกทักษะสาย Front-End Developer เรียนรู้ html, css, javascript, react library, bootstrap framework
                </Typography>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Certificate - รางวัลชนะเลิศอันดับ 3 การแข่งเกมนิยายแชท debuz & depa
                </Typography>

                <Grid container spacing={2}>
                    {/* รูปซ้าย */}
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right" data-aos-delay="100">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%', // ทำให้ Box สูงเท่า Grid เพื่อจัดกลางแนวตั้ง
                                margin: '0 15px'
                            }}
                        >
                            <div className='border-animated-wrapper'>
                                <img
                                    src={buz_1}
                                    width="100%"
                                    height="auto"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </Box>
                    </Grid>

                    {/* รูปขวา */}
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left" data-aos-delay="100">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                margin: '0 15px'
                            }}
                        >
                            <div className='border-animated-wrapper'>
                                <img
                                    src={buz_2}
                                    width="100%"
                                    height="auto"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} lineHeight={2} ml={2} data-aos="fade-right" data-aos-delay="100">
                    <br />• ได้รับรางวัลชนะเลิศอันดับ 3 ในงานสายฝันโลกเกมนิยายแชทในแอป buzzde
                    <br />• ได้รับเกียรติบัตรรับรองความสามารถจากบริษัทสำนักงานส่งเสริมเศรษฐกิจดิจิทัล ร่วมกับ buzzde
                    <br />• ได้เข้าร่วมโครงการ Depa Game Accelerator Program Batch 3 Story kickstart with Buzzde
                    <br />• เกมที่แข่งขันชนะเป็นเกมนิยายแชทที่มีชื่อว่า "Pat! Dab! สวรรค์รักแห่งฟูฟู"
                    <br />• ได้รับหน้าที่เป็นคนเขียนโปรแกรมเกมนี้ทั้งหมด!
                </Typography>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Certificate - BASIC CYBERSECURITY MOOC
                </Typography>

                <Grid container spacing={5} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            mx: 2

                        }}>
                        <div className='border-animated-wrapper'>


                            <img
                                src={cybersecurity}
                                width="100%"
                                height="auto"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, md: 5.5 }} >
                        <Typography marginLeft={2} variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            <br />• เป็นเกียรติบัตรที่รับรองการสำเร็จหลักสูตรออนไลน์ที่มีผู้สร้างหลักสูตรคือ MOOC
                            <br />• Basic Cybersecurity (พื้นฐานของความมั่นคงปลอดภัยทางไซเบอร์)
                            <br />• รองรับโดย MOOC
                        </Typography>
                    </Grid>
                </Grid>

                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Certificate - Foundations of Data Science
                </Typography>

                <Grid container spacing={5} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            mx: 2

                        }}>
                        <div className='border-animated-wrapper'>


                            <img
                                src={google}
                                width="100%"
                                height="auto"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, md: 5.5 }} >
                        <Typography marginLeft={2} variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            <br />• เป็นเกียรติบัตรที่รับรองการสำเร็จหลักสูตรออนไลน์ที่มีผู้สร้างหลักสูตรคือ Google
                            <br />• Foundations of Data Science (พื้นฐานของวิทยาศาสตร์ข้อมูล)
                            <br />• รองรับโดย Google และ Coursera
                        </Typography>
                    </Grid>
                </Grid>




                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Certificate - Introduction of Front-End Development
                </Typography>

                <Grid container spacing={5} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            mx: 2

                        }}>
                        <div className='border-animated-wrapper'>


                            <img
                                src={meta}
                                width="100%"
                                height="auto"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, md: 5.5 }} >
                        <Typography marginLeft={2} variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            <br />• เป็นเกียรติบัตรที่รับรองการสำเร็จหลักสูตรออนไลน์ที่มีผู้สร้างหลักสูตรคือ Meta
                            <br />• Foundations of Data Science (พื้นฐานของวิทยาศาสตร์ข้อมูล)
                            <br />• รองรับโดย Meta และ Coursera
                        </Typography>
                    </Grid>
                </Grid>
                <Typography data-aos="fade-up" data-aos-delay="0" variant='h3' fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }} fontWeight={700} color='#FFF' mb={4} mt={12} ml={2}>
                    Certificate - Introduction to Artificial Intelligence (AI)
                </Typography>

                <Grid container spacing={5} >
                    <Grid data-aos="fade-right" data-aos-delay="0"
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            mx: 2

                        }}>
                        <div className='border-animated-wrapper'>


                            <img
                                src={IBM}
                                width="100%"
                                height="auto"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Grid>

                    <Grid data-aos="fade-left" data-aos-delay="0" size={{ xs: 12, md: 5.5 }} >
                        <Typography marginLeft={2} variant='h6' color='#FFF' fontWeight={300} fontSize={'1rem'} mt={2} lineHeight={2}>
                            <br />• เป็นเกียรติบัตรที่รับรองการสำเร็จหลักสูตรออนไลน์ที่มีผู้สร้างหลักสูตรคือ IBM
                            <br />• Introduction to Artificial Intelligence (AI) (ความรู้เบื้องต้นเกี่ยวกับปัญญาประดิษฐ์)
                            <br />• รองรับโดย IBM และ Coursera
                        </Typography>
                    </Grid>
                </Grid>


            </Container>
        </>
    )
}

export default Experience