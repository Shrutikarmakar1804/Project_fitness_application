import React from 'react';
import { Stack, CircularProgress } from '@mui/material';

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"
  >
    <CircularProgress color="primary" size={50} />
  </Stack>
);

export default Loader;
