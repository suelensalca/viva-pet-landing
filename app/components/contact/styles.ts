import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '20px',
  fontWeight: 600,
  fontSize: '30px',
  color: theme.palette.secondary.main,
  [theme.breakpoints.up('md')]: {
    fontSize: '40px',
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

export const Info = styled(Typography)(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 500,
  color: theme.palette.secondary.dark,
  display: 'flex',
  alignItems: 'center',
  marginBottom: '6px',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));

export const SmallIcon = {
  fontSize: '21px',
  marginRight: '4px',
};
