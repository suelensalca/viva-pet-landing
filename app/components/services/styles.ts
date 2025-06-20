import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 160px',
  gap: '20px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('xxl')]: {
    padding: '0 60px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 40px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '250px',
  width: '250px',
  [theme.breakpoints.down('xxl')]: {
    height: '210px',
    width: '210px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '24px',
  fontWeight: '500',
  textAlign: 'center',
  margin: '10px 0',
  textDecoration: 'none',
}));

export const MoreButton = styled(Button)(({ theme }) => ({
  width: '280px',
  margin: '32px auto 0',
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  border: '2px solid',
  borderRadius: '40px',
  textTransform: 'none',
  padding: '8px 16px',
  fontSize: '24px',
  color: theme.palette.common.white,
  '&:hover': {
    border: '2px solid',
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
}));

export const StyledImage: CSSProperties = {
  objectFit: 'cover',
  borderRadius: '50%',
};
