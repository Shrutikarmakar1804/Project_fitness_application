// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
        }
      : {
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
});
