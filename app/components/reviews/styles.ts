import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SwiperSlide } from 'swiper/react';

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '8px',
  fontWeight: 600,
  fontSize: '30px',
  color: theme.palette.secondary.main,
  [theme.breakpoints.up('md')]: {
    fontSize: '40px',
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: '8px',
  fontSize: '21px',
  color: theme.palette.common.black,
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}));

export const CleanLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  '&:visited': {
    color: 'inherit',
  },
  '&:hover': {
    color: 'inherit',
  },
  '&:active': {
    color: 'inherit',
  },
});

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '2px auto',
  '.swiper-button-prev, .swiper-button-next': {
    color: 'transparent',
  },
  '.swiper-button-prev:hover, .swiper-button-next:hover': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    zIndex: 10,
  },
}));

export const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  backgroundColor: '#f2f2f2',
  '& img': {
    objectFit: 'contain',
    width: '100%',
    maxWidth: '920px',
    height: '480px',
    [theme.breakpoints.down('xl')]: {
      height: '440px',
    },
    [theme.breakpoints.down('lg')]: {
      height: '340px',
    },
    [theme.breakpoints.down('md')]: {
      height: '280px',
    },
  },
}));
