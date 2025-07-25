import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? '6px solid #FF2625' : 'none',
      background: bodyPart === item
        ? 'linear-gradient(135deg, #fff 60%, #ffeaea 100%)'
        : 'linear-gradient(135deg, #fff 60%, #f5f5f5 100%)',
      borderRadius: '28px',
      width: { xs: '200px', md: '270px' },
      height: { xs: '220px', md: '280px' },
      cursor: 'pointer',
      gap: '24px',
      boxShadow: bodyPart === item
        ? '0 8px 32px rgba(255, 38, 37, 0.18)'
        : '0 2px 12px rgba(60, 60, 60, 0.07)',
      transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        transform: 'scale(1.04) translateY(-4px)',
        boxShadow: '0 12px 36px rgba(255, 38, 37, 0.22)',
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }}
  >
    <Box
      sx={{
        background: 'linear-gradient(135deg, #FF2625 60%, #ffbaba 100%)',
        borderRadius: '50%',
        width: '70px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(255,38,37,0.18)',
        mb: 1,
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '38px', height: '38px' }} />
    </Box>
    <Typography
      fontSize={{ xs: '20px', md: '24px' }}
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
      sx={{
        letterSpacing: '1px',
        textShadow: '0 2px 8px #ffeaea',
      }}
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
