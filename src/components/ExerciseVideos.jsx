import React from 'react';
import { Typography, Box, Stack, Card, CardMedia, CardContent } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!Array.isArray(exerciseVideos) || exerciseVideos.length === 0) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        marginTop: { lg: '80px', xs: '30px' },
        p: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        borderRadius: '24px',
        boxShadow: 3,
      }}
    >
      <Typography
        sx={{ fontSize: { lg: '40px', xs: '24px' } }}
        fontWeight={800}
        color="#22223b"
        mb={4}
        textAlign="center"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {exerciseVideos.slice(0, 3).map((item, index) => {
          const video = item.video || {};
          const thumbnail = video.thumbnails?.[0]?.url || '';
          const videoId = video.videoId || `video-${index}`;
          const title = video.title || 'Untitled';
          const channelName = video.channelName || 'Unknown Channel';

          return (
            <Card
              key={videoId}
              sx={{
                width: { xs: '100%', md: 340 },
                borderRadius: 4,
                boxShadow: 5,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.03)',
                  boxShadow: 8,
                },
                textDecoration: 'none',
                background: '#fff',
              }}
              component="a"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              {thumbnail && (
                <CardMedia
                  component="img"
                  height="200"
                  image={thumbnail}
                  alt={title}
                  sx={{
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    objectFit: 'cover',
                  }}
                />
              )}
              <CardContent>
                <Typography
                  sx={{ fontSize: { lg: '22px', xs: '18px' } }}
                  fontWeight={700}
                  color="#22223b"
                  gutterBottom
                  noWrap
                  title={title}
                >
                  {title}
                </Typography>
                <Typography fontSize="15px" color="#4a4e69" fontWeight={500}>
                  {channelName}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
