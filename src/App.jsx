import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { Box, Card, CardMedia, CardContent, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import { faEnvelope,faDownload} from '@fortawesome/free-solid-svg-icons';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#C9BAA6',
      }}
    >
      <Card
        sx={{
          width: isMobile ? '95%' : 'min(600px, 90%)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 'lg',
          overflow: 'hidden',
          backgroundColor: 'background.paper'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: isMobile ? '100%' : '1/3', py: isMobile ? 2 : 0 }}>
            <CardMedia
              component="img"
              src="/assets/img/profile.png" 
              alt="profile-picture"
              sx={{
                width: 160,
                height: 160,
                objectFit: 'cover',
                borderRadius: '50%',
                p: 1,
                border: '2px solid white',
                boxSizing: 'border-box',
              }}
            />
          </Box>

          <CardContent sx={{ flexGrow: 1, p: isMobile ? 2 : 4, textAlign: isMobile ? 'center' : 'left' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: 1, mb: 1 }}>
              <Typography variant="h4" fontWeight="bold">
                CATHY LE
              </Typography>
              
            </Box>
            <Typography variant="h6" fontWeight="semibold" gutterBottom>
            Architecture Student @University of Maryland
            </Typography>

            {/* Intro for Architectural Student */}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Aspiring Construction Project Manager | Passionate about design, Innovation,and Sustainability | Currently pursuing a degree in Architecture at University of Maryland
            </Typography>

         

            <Box sx={{ mt: 2, display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', gap: 2 }}>
            
              <Link
                href="https://www.linkedin.com/in/cathy-le-a37905240/"
                target="_blank"
                underline="hover"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
              
            </Box>

            {/* Projects and Contact Sections */}
            <Box sx={{ display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent:'center',
              alignItems:'center',gap:4}}>

            <Box sx={{ mt: 4,display:'flex', flexDirection:'column', alignItems:'center',justifyItems:'center' }}>
              <Typography variant="h5"  fontWeight="bold" gutterBottom>Projects</Typography>
              <Typography variant="body2" gutterBottom>Check out my student projects.</Typography>
              <Link href="#" download="" sx={{display:'flex', alignItems:'center',justifyItems:'center' ,gap:1} } underline="hover">
              <FontAwesomeIcon icon={faDownload} size='2x' />
              View Portfolio
              </Link>
            </Box>

            <Box sx={{ mt: 4, display:'flex', flexDirection:'column',alignItems:'center',justifyItems:'center' }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>Contact Me</Typography>
              <Typography variant="body2" gutterBottom>Let's connect !</Typography>
              <Link href={`mailto:cathyle211@gmail.com`} underline="hover" sx={{display:'flex', alignItems:'center',justifyItems:'center' ,gap:1} }>  
              <FontAwesomeIcon icon={faEnvelope } size="2x"/>
              Get in Touch
              </Link>
            </Box>

            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default App;