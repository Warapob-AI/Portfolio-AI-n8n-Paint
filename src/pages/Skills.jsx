import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaBootstrap, FaPython, FaJava } from 'react-icons/fa';
import { SiMui, SiStreamlit, SiSqlite } from 'react-icons/si';


const skills = [
    { name: 'HTML', icon: <FaHtml5 size={48} color="#E44D26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={48} color="#264DE4" /> },
    { name: 'SASS', icon: <FaSass size={48} color="#CD6799" /> },
    { name: 'JavaScript', icon: <FaJs size={48} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={48} color="#61DBFB" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={48} color="#7952B3" /> },
    { name: 'Material UI', icon: <SiMui size={48} color="#007FFF" /> },
    { name: 'Python', icon: <FaPython size={48} color="#306998" /> },
    { name: 'Java', icon: <FaJava size={48} color="#f89820" /> },
    { name: 'SQLite', icon: <SiSqlite size={48} color="#f89820" /> },
];

function Skill() {
    return (
        <>
            <Container maxWidth='lg' sx={{ position: 'relative' }} >
                <Box sx={{
                    marginTop: '9rem',

                }}>

                </Box>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    fontSize='2.5rem'
                    gutterBottom
                    mb={8}
                    data-aos="fade-up"
                    display={'flex'}
                    justifyContent={'center'}
                    color="#FFF"
                    mt={15}
                >
                    Skills
                </Typography>


                <Grid container spacing={0}>
                    <Grid size={{ md: 6 }}
                        sx={{ px: 2.5 }}>
                        <Typography
                            variant="h3"
                            fontWeight={500}
                            fontSize="2rem"
                            gutterBottom
                            data-aos="fade-up"
                            data-aos-delay="100"
                            color="#FFF"
                            mb={3}
                        >
                            Soft Skills
                        </Typography>

                        <Box sx={{ mt: 2 }} data-aos="fade-left"
                                    data-aos-delay="200">
                            <Box display="flex" alignItems="center" mb={1.5}>
                                <GroupsIcon sx={{ color: '#FFD700', mr: 1 }} />
                                <Typography color="#DDD" fontSize="1.1rem">
                                    สามารถสื่อสารพูดคุยและทำงานร่วมกับเป็นทีมได้ดี
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" mb={1.5}>
                                <BuildIcon sx={{ color: '#00C4FF', mr: 1 }} />
                                <Typography color="#DDD" fontSize="1.1rem">
                                    ปรับตัวเก่งและพร้อมรับเทคโนโลยีใหม่ ๆ พร้อมใช้และเรียนรู้อยู่ตลอดเวลา
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" mb={1.5}>
                                <PsychologyAltIcon sx={{ color: '#FF8888', mr: 1 }} />
                                <Typography color="#DDD" fontSize="1.1rem">
                                    มีวินัย ใส่ใจรายละเอียดงานอย่างรอบคอบ ตั้งใจทำงานที่ได้รับมอบหมาย
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" mb={1.5}>
                                <TrendingUpIcon sx={{ color: '#A6FF4D', mr: 1 }} />
                                <Typography color="#DDD" fontSize="1.1rem">
                                    พัฒนาตนเองอย่างต่อเนื่อง และใฝ่รู้อย่างต่อเนื่อง
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" mb={1.5}>
                                <EmojiObjectsIcon sx={{ color: '#FFA500', mr: 1 }} />
                                <Typography color="#DDD" fontSize="1.1rem">
                                    คิดบวก ไม่ยอมแพ้ต่ออุปสรรคและปัญหาจากงานที่ได้รับมอบหมาย
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid size={{ md: 6 }}
                        sx={{ px: 2.5 }}>

                        <Typography
                            variant="h3"
                            fontWeight={500}
                            fontSize='2rem'
                            gutterBottom
                            data-aos="fade-up"
                            data-aos-delay="100"
                            display={'flex'}
                            justifyContent={'left'}
                            marginLeft={{ md: '4rem' }}
                            mt={{ xs: 5, md: 0 }}
                            color="#FFF"
                            mb={3}>
                            Coding Skills

                        </Typography>


                        <Grid container spacing={3} justifyContent="left" marginLeft={{ md: '4rem' }}>
                            {skills.map((skill, index) => (
                                <Grid item xs={6} sm={4} md={3} key={index}>
                                    <Box textAlign="center" mr={2} 
                                    data-aos="fade-left"
                                    data-aos-delay="200">
                                        {skill.icon}
                                        <Typography color="#DDD" fontSize="0.95rem" mt={1}>
                                            {skill.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid size={{ md: 6 }}
                        sx={{ px: 2.5 }}>
                        <Typography
                            variant="h3"
                            fontWeight={500}
                            fontSize="2rem"
                            gutterBottom
                            data-aos="fade-up"
                            data-aos-delay="100"
                            color="#FFF"
                            mt={10}
                            mb={3}>
                            AI & Automation & Data Skills

                        </Typography>
                        <Grid container spacing={3} justifyContent="left">
                            {[
                                {
                                    name: 'n8n',
                                    img: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png',
                                },
                                {
                                    name: 'LangChain',
                                    img: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png',
                                },
                                {
                                    name: 'AI Chat Model API',
                                    img: 'https://img.icons8.com/nolan/512/chatgpt.png',
                                },
                                {
                                    name: 'HuggingFace',
                                    img: 'https://huggingface.co/front/assets/huggingface_logo.svg',
                                },
                                {
                                    name: 'Pandas',
                                    img: 'https://pandas.pydata.org/static/img/pandas_white.svg',
                                },
                                {
                                    name: 'Scikit-learn',
                                    img: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png',
                                },
                                {
                                    name: 'NumPy',
                                    img: 'https://numpy.org/images/logo.svg',
                                },
                                {
                                    name: 'Matplotlib',
                                    img: 'https://matplotlib.org/_static/images/logo2.svg',
                                },
                                {
                                    name: 'PowerBI',
                                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png',
                                },
                                {
                                    name: 'Microsoft Excel',
                                    img: 'https://cdn.iconscout.com/icon/free/png-256/free-microsoft-excel-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-1-pack-logos-icons-3030062.png',
                                },
                            ].map((skill, index) => (
                                <Grid item xs={6} sm={4} md={3} key={index} mr={2} data-aos="fade-left"
                                    data-aos-delay="200">
                                    <Box textAlign="center">
                                        <img
                                            src={skill.img}
                                            alt={skill.name}
                                            width="48"
                                            height="48"
                                            style={{ objectFit: 'contain', marginBottom: '0.5rem' }}
                                        />
                                        <Typography fontSize="0.95rem" color="#DDD">
                                            {skill.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>


                    </Grid>
                    <Grid size={{ md: 6 }}
                        sx={{ px: 2.5 }}>

                        <Typography
                            variant="h3"
                            fontWeight={500}
                            fontSize='2rem'
                            gutterBottom
                            data-aos="fade-up"
                            data-aos-delay="100"
                            display={'flex'}
                            justifyContent={'left'}
                            marginLeft={{ md: '4rem' }}
                            mt={10}
                            color="#FFF"
                            mb={3}>
                            Tools

                        </Typography>
                        <Grid container spacing={3} justifyContent="left" marginLeft={'4rem'}>
                            {[

                                {
                                    name: 'Git',
                                    img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
                                },
                                {
                                    name: 'GitHub',
                                    img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                                },
                                {
                                    name: 'VS Code',
                                    img: 'https://code.visualstudio.com/assets/images/code-stable.png',
                                },
                                {
                                    name: 'Figma',
                                    img: 'https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png',
                                },
                                {
                                    name: 'Microsoft Teams',
                                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
                                },
                                {
                                    name: 'AWS',
                                    img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                                },
                                {
                                    name: 'FastAPI',
                                    img: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
                                },
                                {
                                    name: 'Streamlit',
                                    img: 'https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png',
                                }

                            ].map((skill, index) => (
                                <Grid item xs={6} sm={4} md={3} key={index}>
                                    <Box textAlign="center" mr={2} data-aos="fade-left"
                                    data-aos-delay="200"> 
                                        <img
                                            src={skill.img}
                                            alt={skill.name}
                                            width="48"
                                            height="48"
                                            style={{ objectFit: 'contain', marginBottom: '0.5rem' }}
                                        />
                                        <Typography fontSize="0.95rem" color="#DDD">
                                            {skill.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Container >
        </>
    )
}

export default Skill 