// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';

const Navbar = ({ toggleTheme, mode }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        px: '20px',
        py: '16px',
        backgroundColor: 'background.default',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }} />
      </Link>

      <Stack direction="row" spacing={4} alignItems="center">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: 'inherit' }}>
          Exercises
        </a>

        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default Navbar;
