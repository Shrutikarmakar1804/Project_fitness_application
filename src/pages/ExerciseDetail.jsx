import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error('Failed to fetch exercise details:', error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail?.name) {
    return (
      <Box sx={{ mt: '100px', textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          No Exercise Data Found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: { lg: '96px', xs: '60px' },
        px: { xs: 2, md: 4 },
        pb: 6,
        background: 'linear-gradient(180deg, #f9f9f9 0%, #edf2f8 100%)',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        maxWidth: '1400px',
        mx: 'auto',
      }}
    >
      {/* Exercise Detail Section */}
      <Detail exerciseDetail={exerciseDetail} />

      {/* YouTube Exercise Videos */}
      <Box mt={{ lg: 10, xs: 6 }}>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      </Box>

      {/* Similar Exercises */}
      <Box mt={{ lg: 12, xs: 8 }}>
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </Box>
    </Box>
  );
};

export default ExerciseDetail;
