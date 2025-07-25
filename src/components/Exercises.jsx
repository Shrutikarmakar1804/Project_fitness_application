import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: '109px' },
        mt: '50px',
        p: '20px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '46px',
          color: '#22223b',
          letterSpacing: 1,
          textAlign: 'center',
        }}
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: '60px', xs: '30px' } }}
      >
        {currentExercises.map((exercise) => (
          <Paper
            key={exercise.id}
            elevation={4}
            sx={{
              borderRadius: '18px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.04)',
                boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.18)',
              },
              p: 1,
              background: 'rgba(255,255,255,0.95)',
            }}
          >
            <ExerciseCard exercise={exercise} />
          </Paper>
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                borderRadius: '8px',
                fontWeight: 'bold',
                color: '#22223b',
                background: 'rgba(255,255,255,0.8)',
                boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.08)',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
                  color: '#22223b',
                },
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
