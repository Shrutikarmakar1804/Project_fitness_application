import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box
    sx={{
      mt: { lg: '100px', xs: '40px' },
      px: { xs: '20px', md: '40px' },
      py: '40px',
      background: '#f7f9fc',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    }}
  >
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '28px' }, mb: 3 }}
      color="#333"
    >
      Similar <span style={{ color: '#FF2625' }}>Target Muscle</span> Exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '28px' },
        mt: { lg: '60px', xs: '40px' },
        mb: 3,
      }}
      color="#333"
    >
      Similar <span style={{ color: '#FF2625' }}>Equipment</span> Exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
