import React from 'react';
import { Typography, Stack, Button, Box, Paper } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        p: { xs: '16px', md: '32px' },
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(31, 41, 55, 0.08)',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: '24px',
          overflow: 'hidden',
          maxWidth: '420px',
          background: 'linear-gradient(135deg, #fef6e4 0%, #fff 100%)',
        }}
      >
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="detail-image"
          style={{
            width: '100%',
            display: 'block',
            borderRadius: '24px',
            objectFit: 'cover',
          }}
        />
      </Paper>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }, maxWidth: '520px' }}>
        <Typography
          sx={{
            fontSize: { lg: '56px', xs: '32px' },
            color: '#22223b',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '1px',
          }}
          fontWeight={800}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: '22px', xs: '16px' },
            color: '#4F4C4C',
            lineHeight: 1.6,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize', color: '#f77f00', fontWeight: 600 }}>
            {name}
          </span>{' '}
          is one of the best exercises to target your{' '}
          <span style={{ color: '#4361ee', fontWeight: 600 }}>{target}</span>. It helps improve your mood and boost energy.
        </Typography>
        <Stack gap="28px">
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
              sx={{
                background: 'rgba(255, 242, 219, 0.7)',
                borderRadius: '16px',
                p: '12px 20px',
                boxShadow: '0 2px 8px rgba(247, 127, 0, 0.06)',
              }}
            >
              <Button
                disableRipple
                sx={{
                  background: 'linear-gradient(135deg, #f77f00 0%, #fcbf49 100%)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  minWidth: 0,
                  boxShadow: '0 4px 16px rgba(247, 127, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #fcbf49 0%, #f77f00 100%)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.name}
                  sx={{ width: '40px', height: '40px' }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: { lg: '26px', xs: '18px' },
                  color: '#22223b',
                  fontWeight: 600,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
