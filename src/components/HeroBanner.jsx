import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, IconButton, useMediaQuery, Fade } from '@mui/material';
import { motion } from 'framer-motion';
import HeroBannerImage from '../assets/images/banner.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const gradientBg = 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)';

const HeroBanner = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      sx={{
        mt: { lg: '120px', xs: '60px' },
        ml: { sm: '40px', xs: '10px' },
        px: 3,
        py: 5,
        borderRadius: '32px',
        position: 'relative',
        overflow: 'hidden',
        background: gradientBg,
        boxShadow: '0 8px 32px rgba(255,65,108,0.15)',
        minHeight: isSmallScreen ? 480 : 560,
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        gap: 4,
      }}
    >
      {/* Decorative Circles */}
      <Box
        sx={{
          position: 'absolute',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          top: -80,
          left: -80,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.10)',
          bottom: -60,
          right: -60,
          zIndex: 0,
        }}
      />

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ zIndex: 2, flex: 1 }}
      >
        <Typography
          fontWeight={700}
          fontSize="30px"
          color="#fff"
          letterSpacing={2}
          sx={{
            textShadow: '0 2px 12px rgba(255,65,108,0.25)',
            mb: 1,
          }}
        >
          Welcome to
        </Typography>
        <Typography
          fontWeight={900}
          sx={{
            fontSize: { lg: '60px', xs: '38px' },
            background: 'linear-gradient(90deg, #fff 60%, #ffb199 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            lineHeight: 1.1,
            textShadow: '0 2px 12px rgba(255,65,108,0.15)',
          }}
        >
          Fitness Club
        </Typography>
        <Typography
          fontSize="22px"
          fontFamily="Alegreya"
          color="#fff"
          sx={{
            opacity: 0.92,
            mb: 3,
            textShadow: '0 2px 8px rgba(255,65,108,0.10)',
          }}
        >
          Sweat, Smile &amp; Repeat <br />
          <span style={{ fontWeight: 500, color: '#ffe3e3' }}>
            Discover effective exercises personalized for you.
          </span>
        </Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #ff416c55' }}
            whileTap={{ scale: 0.97 }}
            href="#exercises"
            style={{
              background: 'linear-gradient(90deg, #fff 0%, #ffb199 100%)',
              padding: '16px 36px',
              fontSize: '20px',
              fontWeight: 700,
              color: '#FF2625',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(255, 38, 37, 0.18)',
              letterSpacing: 1,
              transition: 'all 0.2s',
            }}
          >
            Explore Exercises
          </motion.a>
        </Stack>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: isSmallScreen ? 'center' : 'flex-end',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            background: 'rgba(255,255,255,0.13)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(255,65,108,0.10)',
            p: 2,
            display: 'inline-block',
          }}
        >
          <img
            src={HeroBannerImage}
            alt="hero-banner"
            style={{
              width: isSmallScreen ? '90vw' : '420px',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(255,65,108,0.18)',
              filter: 'saturate(1.15) contrast(1.05)',
            }}
          />
        </Box>
      </motion.div>

      {/* Large Background Text */}
      {!isSmallScreen && (
        <Typography
          fontWeight={900}
          color="#fff"
          sx={{
            opacity: 0.07,
            fontSize: '180px',
            position: 'absolute',
            top: '30%',
            left: '10%',
            zIndex: 1,
            userSelect: 'none',
            letterSpacing: 8,
            textShadow: '0 2px 12px #ff416c',
            pointerEvents: 'none',
          }}
        >
          EXERCISE
        </Typography>
      )}

      {/* Scroll to top arrow */}
      <Fade in={showArrow}>
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            bgcolor: '#fff',
            color: '#FF2625',
            boxShadow: '0 6px 24px rgba(255,65,108,0.18)',
            border: '2px solid #FF2625',
            '&:hover': {
              bgcolor: '#ffe3e3',
            },
            zIndex: 9999,
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </Fade>
    </Box>
  );
};

export default HeroBanner;
