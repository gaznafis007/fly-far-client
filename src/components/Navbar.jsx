/* eslint-disable no-unused-vars */
import React from 'react';
import { 
    AppBar, 
    Box, 
    Toolbar, 
    Button, 
    Container,
    styled
  } from '@mui/material';
  
  // Styled components
  const StyledAppBar = styled(AppBar)({
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
  });
  
  const LogoContainer = styled(Box)({
    width: '120px',
    height: '40px',
    // Placeholder for logo
    backgroundColor: 'transparent',
  });
  
  const StyledButton = styled(Button)(({ theme, variant }) => ({
    borderRadius: '25px',
    padding: '8px 24px',
    textTransform: 'none',
    fontWeight: 500,
    ...(variant === 'contained' && {
      backgroundColor: '#2FE5A7',
      color: 'white',
      '&:hover': {
        backgroundColor: '#25d194',
      },
    }),
    ...(variant === 'outlined' && {
      backgroundColor: '#4E4F97',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3e3f7a',
      },
    }),
  }));

const Navbar = () => {
    return (
        <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 0' }}>
          {/* Logo placeholder */}
          <LogoContainer>
            {/* Add your logo image here */}
            <img src="logo.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
          </LogoContainer>

          {/* Buttons container */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <StyledButton variant="contained">
              TRAVEL AGENCY
            </StyledButton>
            <StyledButton variant="outlined">
              LOGIN / SIGN UP
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
    );
};

export default Navbar;