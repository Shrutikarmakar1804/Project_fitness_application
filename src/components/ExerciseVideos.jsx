import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // Guard clause: show loader if data is missing or not an array
  if (!Array.isArray(exerciseVideos) || exerciseVideos.length === 0) {
    return <Loader />;
  }

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos.slice(0, 3).map((item, index) => {
          const video = item.video || {};
          const thumbnail = video.thumbnails?.[0]?.url || '';
          const videoId = video.videoId || `video-${index}`;
          const title = video.title || 'Untitled';
          const channelName = video.channelName || 'Unknown Channel';

          return (
            <a
              key={videoId}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              {thumbnail && (
                <img
                  style={{ borderTopLeftRadius: '20px' }}
                  src={thumbnail}
                  alt={title}
                />
              )}
              <Box>
                <Typography
                  sx={{ fontSize: { lg: '28px', xs: '18px' } }}
                  fontWeight={600}
                  color="#000"
                >
                  {title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
