import React from 'react';
import { Box, Stack, Typography, IconButton, Divider } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import gym10 from '../assets/images/gym10.png';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => (
  <Box
    mt="80px"
    bgcolor="linear-gradient(135deg, #FFF3F4 0%, #ffe0e6 100%)"
    sx={{
      background: 'linear-gradient(135deg, #FFF3F4 0%, #ffe0e6 100%)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      borderRadius: '32px 32px 0 0',
      overflow: 'hidden',
    }}
  >
    <Stack
      gap="32px"
      sx={{ alignItems: 'center', pt: '32px', pb: '16px' }}
      flexWrap="wrap"
      px={{ xs: '16px', md: '40px' }}
    >
      <img
        src={gym10}
        alt="Starmark Fitness Studio Logo"
        style={{
          width: '180px',
          height: 'auto',
          filter: 'drop-shadow(0 4px 12px rgba(255,38,37,0.10))',
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontSize: { lg: '28px', xs: '20px' },
          fontWeight: 700,
          color: '#ff2625',
          letterSpacing: 1,
        }}
        textAlign="center"
      >
        Made with <span role="img" aria-label="love">❤️</span> by Starmark Fitness Studio
      </Typography>
    </Stack>

    <Divider sx={{ mx: 'auto', width: '80%', bgcolor: '#ff2625', opacity: 0.15, mb: 2 }} />

    <Typography
      variant="body2"
      textAlign="center"
      mt="8px"
      pb="8px"
      color="text.secondary"
      sx={{ fontSize: { xs: '14px', md: '16px' } }}
    >
      © {new Date().getFullYear()} Starmark Fitness Studio. All rights reserved.
    </Typography>

    <Box textAlign="center" pb="32px" pt="8px">
      <IconButton
        onClick={scrollToTop}
        aria-label="Back to top"
        sx={{
          background: 'linear-gradient(135deg, #ff2625 60%, #ff7b6c 100%)',
          color: '#fff',
          boxShadow: '0 2px 8px 0 rgba(255,38,37,0.15)',
          '&:hover': {
            background: 'linear-gradient(135deg, #e21b1b 60%, #ff7b6c 100%)',
            transform: 'translateY(-2px) scale(1.08)',
          },
          transition: 'all 0.2s',
        }}
        size="large"
      >
        <KeyboardArrowUpIcon fontSize="inherit" />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
