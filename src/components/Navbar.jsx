// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton, Tooltip, Box, Typography, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';

const Navbar = ({ toggleTheme, mode }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 1.5, md: 2 },
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        borderRadius: '0 0 24px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{
            width: { xs: 40, md: 56 },
            height: { xs: 40, md: 56 },
            mr: 2,
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            background: '#fff',
            p: 0.5,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#fff',
            letterSpacing: 1,
            display: { xs: 'none', sm: 'block' },
            textShadow: '0 2px 8px rgba(0,0,0,0.10)',
          }}
        >
          Gym Club
        </Typography>
      </Link>

      <Stack direction="row" spacing={{ xs: 2, md: 5 }} alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 500,
            fontSize: '1.1rem',
            transition: 'color 0.2s',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 500,
            fontSize: '1.1rem',
            transition: 'color 0.2s',
          }}
        >
          Exercises
        </a>
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: '#fff',
              background: 'rgba(255,255,255,0.08)',
              '&:hover': {
                background: 'rgba(255,255,255,0.18)',
              },
              ml: 1,
            }}
          >
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default Navbar;
