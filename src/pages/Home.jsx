import React, { useState } from 'react';
import { Box, Container } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box sx={{ backgroundColor: '#fdfdfd' }}>
      {/* Hero Section */}
      <Box
        sx={{
          mt: { lg: '60px', xs: '40px' },
          mb: { lg: '80px', xs: '40px' },
          px: 2,
        }}
      >
        <HeroBanner />
      </Box>

      {/* Search Section */}
      <Container maxWidth="md">
        <Box sx={{ mb: { lg: '90px', xs: '60px' }, px: 2 }}>
          <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      </Container>

      {/* Exercises Section */}
      <Container maxWidth="lg">
        <Box sx={{ mb: '90px', px: 2 }}>
          <Exercises
            setExercises={setExercises}
            exercises={exercises}
            bodyPart={bodyPart}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
