import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { GitHub, Phone, Email } from '@mui/icons-material';

export default function Contact() {
    return (
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, py: 4 }}>

            <Typography
                variant="h3"
                fontWeight={700}
                fontSize='2.5rem'
                gutterBottom
                data-aos="fade-up"
                display={'flex'}
                justifyContent={'center'}
                color='#FFF'
                mt={10}
            >
                CONTACT ME
            </Typography>

            <Typography
                variant="h6"
                fontWeight={500}
                fontSize='1.2rem'
                gutterBottom
                data-aos="fade-up"
                display={'flex'}
                justifyContent={'center'}
                color='#FFF'
                mb={10}
            >
                -- GET IN TOUCH --
            </Typography>


            <Grid container spacing={4}>
                {/* GitHub */}
                <Grid size={{ xs: 12, md: 4 }}>
<<<<<<< HEAD
                    <Box display="flex" flexDirection="column" alignItems="center">
=======
                    <Box display="flex" flexDirection="column" alignItems="center" data-aos="fade-up" data-aos-delay="100">
>>>>>>> d3528d12886d9533dbf6f6306034485ca932ac51
                        <GitHub sx={{ fontSize: 48, color: '#FFF' }} />
                        <Box mt={1} color={'#FFF'}>https://github.com/Warapob-AI</Box>
                    </Box>
                </Grid>

                {/* Phone */}
                <Grid size={{ xs: 12, md: 4 }}>
<<<<<<< HEAD
                    <Box display="flex" flexDirection="column" alignItems="center">
=======
                    <Box display="flex" flexDirection="column" alignItems="center" data-aos="fade-up" data-aos-delay="200">
>>>>>>> d3528d12886d9533dbf6f6306034485ca932ac51
                        <Phone sx={{ fontSize: 48, color: '#FFF' }} />
                        <Box mt={1} color={'#FFF'} >+66-96-151-9706</Box>
                    </Box>
                </Grid>

                {/* Gmail */}
<<<<<<< HEAD
                <Grid size={{ xs: 12, md: 4 }}>
=======
                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay="300">
>>>>>>> d3528d12886d9533dbf6f6306034485ca932ac51
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Email sx={{ fontSize: 48, color: '#FFF' }} />
                        <Box mt={1} color={'#FFF'}>paintseason158@gmail.com</Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
