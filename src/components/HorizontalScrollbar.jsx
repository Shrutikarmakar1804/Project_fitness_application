import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Custom Arrow Button
const ArrowButton = ({ onClick, icon, alt, className }) => (
  <IconButton
    onClick={onClick}
    className={className}
    sx={{
      background: '#fff',
      boxShadow: 2,
      borderRadius: '50%',
      p: 1,
      mx: 1,
      '&:hover': {
        background: '#f5f5f5',
        transform: 'scale(1.1)',
      },
      position: 'absolute',
      top: '50%',
      zIndex: 2,
      transform: 'translateY(-50%)',
    }}
  >
    <img src={icon} alt={alt} style={{ width: 30, height: 30 }} />
  </IconButton>
);

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <ArrowButton
      onClick={scrollPrev}
      icon={LeftArrowIcon}
      alt="left-arrow"
      className="left-arrow"
      sx={{ left: 0 }}
    />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <ArrowButton
      onClick={scrollNext}
      icon={RightArrowIcon}
      alt="right-arrow"
      className="right-arrow"
      sx={{ right: 0 }}
    />
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        py: 3,
        background: `linear-gradient(90deg, ${theme.palette.background.paper} 80%, #f0f4f8 100%)`,
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'visible',
      }}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 2,
              minWidth: { xs: 180, sm: 220, md: 260 },
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.04)',
                boxShadow: 4,
                zIndex: 1,
              },
            }}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
