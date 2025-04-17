import React from 'react';
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    TextField, 
    IconButton,
    Link,
    styled 
  } from '@mui/material';
  import { Facebook, Instagram, WhatsApp, Send } from '@mui/icons-material';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import EmailIcon from '@mui/icons-material/Email';
  import PhoneIcon from '@mui/icons-material/Phone';
  
  const StyledFooter = styled(Box)({
    backgroundColor: '#2FE5A7',
    padding: '60px 0 20px 0',
    color: 'white',
  });
  
  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      borderRadius: '25px',
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
    },
  });
  
  const SocialIcon = styled(IconButton)({
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  });
  
  const CertificationImage = styled('img')({
    width: '50px',
    height: 'auto',
    margin: '5px',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '4px',
  });
  
  const PaymentImage = styled('img')({
    height: '30px',
    margin: '5px',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '4px',
  });

const Footer = () => {
    return (
        <StyledFooter>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Need Help Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Need Help
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
              <Typography variant="body2">
                Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">support@flyfar.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+880 1755 572 099</Typography>
            </Box>
            <Box>
              <SocialIcon>
                <Facebook />
              </SocialIcon>
              <SocialIcon>
                <Instagram />
              </SocialIcon>
              <SocialIcon>
                <WhatsApp />
              </SocialIcon>
            </Box>
          </Grid>

          {/* Discover Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Discover
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                'About Us',
                'Contact Us',
                'Payment Method',
                'Terms and Condition',
                'Privacy Policy',
                'Refund & Cancellation Policy'
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block' }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Certification Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Certification
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {/* Replace these placeholder URLs with your actual certification image URLs */}
              {['iata.jpg', 'atab.png', 'toab.png', 'pata.png', 'basis.png'].map((img, index) => (
                <CertificationImage
                  key={index}
                  src={`${img}`}
                  alt={`Certification ${index + 1}`}
                />
              ))}
            </Box>
          </Grid>

          {/* Get In Touch Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Question or feedback we would love to hear from you
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <StyledTextField
                fullWidth
                placeholder="Email Address"
                size="small"
              />
              <IconButton sx={{ ml: -6, color: '#2FE5A7' }}>
                <Send />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Payment Methods Section */}
        <Box sx={{ mt: 4, mb: 2,}}>
          <Typography variant="h6" gutterBottom>
            Pay With
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
            {/* Replace these placeholder URLs with your actual payment method image URLs */}
            {[
              'visa.png', 'mastercard.jpg', 'amex.png', 'bkash.png', 
              'nagad.png', 'rocket.png', 'upay.jpg'
            ].map((img, index) => (
              <PaymentImage
                key={index}
                src={`${img}`}
                alt={`Payment method ${index + 1}`}
              />
            ))}
            <img 
              src="sslcommerz.png" 
              alt="Verified by SSLCommerz" 
              style={{ height: '40px', marginLeft: '20px' }}
            />
          </Box>
        </Box>

        {/* Copyright Section */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          © Copyright 2025 by Gazi Nafis Md Abdullah | Fly Far Tech | B2C OTA Portal
        </Typography>
      </Container>
    </StyledFooter>
    );
};

export default Footer;