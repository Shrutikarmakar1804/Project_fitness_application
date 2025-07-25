import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Card, CardContent, Box } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Card
    sx={{
      borderRadius: '24px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-8px) scale(1.03)',
        boxShadow: '0 16px 40px rgba(31, 38, 135, 0.25)',
      },
      textDecoration: 'none',
      background: 'linear-gradient(135deg, #fff 60%, #fbeee6 100%)',
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    component={Link}
    to={`/exercise/${exercise.id}`}
    className="exercise-card"
  >
    <Box sx={{ p: 2, pb: 0 }}>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{
          width: '100%',
          borderRadius: '18px',
          objectFit: 'cover',
          boxShadow: '0 4px 16px rgba(255, 169, 169, 0.15)',
          background: '#f8f8f8',
          minHeight: 220,
          maxHeight: 220,
        }}
      />
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={1} mt={1} mb={2}>
        <Button
          sx={{
            color: '#fff',
            background: 'linear-gradient(90deg, #FFA9A9 60%, #FF7F50 100%)',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(255, 169, 169, 0.15)',
            px: 2,
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: '#fff',
            background: 'linear-gradient(90deg, #FCC757 60%, #FFB347 100%)',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(252, 199, 87, 0.15)',
            px: 2,
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="#222"
        fontWeight="bold"
        sx={{
          fontSize: { lg: '24px', xs: '20px' },
          textAlign: 'left',
          textTransform: 'capitalize',
          letterSpacing: 0.5,
          mt: 1,
        }}
      >
        {exercise.name}
      </Typography>
    </CardContent>
  </Card>
);

export default ExerciseCard;
