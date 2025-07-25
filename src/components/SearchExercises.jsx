import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 6 },
        mx: 'auto',
        my: 5,
        maxWidth: '1280px',
        textAlign: 'center',
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: '42px', xs: '28px' },
            lineHeight: 1.3,
            color: '#222',
          }}
        >
          Discover Amazing <br /> <span style={{ color: '#FF2625' }}>Exercises</span> for You
        </Typography>

        <Box position="relative" width="100%" maxWidth="900px">
          <TextField
            fullWidth
            placeholder="Search by exercise name, body part, or equipment"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            sx={{
              input: {
                fontWeight: 600,
                padding: '16px 24px',
                backgroundColor: '#fff',
                borderRadius: '50px',
              },
              boxShadow: '0px 4px 12px rgba(0,0,0,0.07)',
              borderRadius: '50px',
            }}
          />
          <Button
            onClick={handleSearch}
            sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              height: '54px',
              position: 'absolute',
              right: '6px',
              top: '8px',
              px: '18px',
              borderRadius: '18px',
              fontWeight: '600',
              fontSize: '15px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#d62220',
              },
            }}
          >
            Search
          </Button>
        </Box>

        <Box
          sx={{
            width: '100%',
            mt: 4,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            mb={2}
            sx={{ color: '#333', textAlign: 'left', pl: 1 }}
          >
            Filter by Body Part
          </Typography>
          <HorizontalScrollbar
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
