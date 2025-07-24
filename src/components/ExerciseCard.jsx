import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ width: '100%', borderRadius: '16px' }} />
    <Stack direction="row" spacing={1} mt={2} px={2}>
      <Button
        sx={{
          color: '#fff',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          color: '#fff',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' }, px: 2, mt: 2 }}
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
