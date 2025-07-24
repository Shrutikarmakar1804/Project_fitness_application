import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import gym10 from '../assets/images/gym10.png';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={gym10} alt="Starmark Fitness Studio Logo" style={{ width: '200px', height: '41px' }} />
    </Stack>

    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt="41px"
      textAlign="center"
    >
      Made with ❤️ by Starmark Fitness Studio.
    </Typography>

    <Typography
      variant="body2"
      textAlign="center"
      mt="16px"
      pb="20px"
      color="text.secondary"
    >
      © {new Date().getFullYear()} Starmark Fitness Studio. All rights reserved.
    </Typography>

    <Box textAlign="center" pb="40px">
      <IconButton
        onClick={scrollToTop}
        aria-label="Back to top"
        sx={{
          backgroundColor: '#ff2625',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#e21b1b',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
