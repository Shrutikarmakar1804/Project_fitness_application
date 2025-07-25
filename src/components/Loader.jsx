import React from 'react';
import { Stack, CircularProgress, Typography, Box } from '@mui/material';

const Loader = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
    sx={{
      background: 'linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)',
    }}
    spacing={3}
  >
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: '50%',
        p: 3,
        background: 'rgba(255,255,255,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="primary" size={60} thickness={4.5} />
    </Box>
    <Typography
      variant="h6"
      color="primary"
      sx={{
        fontWeight: 600,
        letterSpacing: 1,
        textShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      Loading, please wait...
    </Typography>
  </Stack>
);

export default Loader;
