import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, IconButton, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import HeroBannerImage from '../assets/images/banner.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const HeroBanner = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [showArrow, setShowArrow] = useState(false);

  // Show scroll-to-top arrow
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        mt: { lg: '180px', xs: '80px' },
        ml: { sm: '50px', xs: '20px' },
        px: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="28px">
          Fitness Club
        </Typography>

        <Typography
          fontWeight={800}
          sx={{
            fontSize: { lg: '48px', xs: '36px' },
            mt: 2,
            background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>

        <Typography fontSize="20px" fontFamily="Alegreya" color="#555" mt={2}>
          Check out the most effective exercises personalized to you
        </Typography>

        <Stack direction="row" spacing={2} mt="40px">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#exercises"
            style={{
              background: '#FF2625',
              padding: '14px 28px',
              fontSize: '18px',
              fontWeight: 600,
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(255, 38, 37, 0.4)',
            }}
          >
            Explore Exercises
          </motion.a>
        </Stack>
      </motion.div>

      {/* Large Background Text */}
      {!isSmallScreen && (
        <Typography
          fontWeight={800}
          color="#FF2625"
          sx={{
            opacity: 0.1,
            fontSize: '200px',
            position: 'absolute',
            top: '-50px',
            left: 0,
            zIndex: 0,
            userSelect: 'none',
          }}
        >
          Exercise
        </Typography>
      )}

      {/* Hero Image */}
      <motion.img
        src={HeroBannerImage}
        alt="hero-banner"
        style={{
          marginTop: '30px',
          maxWidth: '100%',
          width: isSmallScreen ? '90%' : '500px',
          height: 'auto',
          borderRadius: '12px',
          zIndex: 1,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      {/* Scroll to top arrow */}
      {showArrow && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            bgcolor: '#FF2625',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            '&:hover': {
              bgcolor: '#d62421',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default HeroBanner;
