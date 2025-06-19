import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid)(({ theme }) => ({
  margin: '16px 16px 0',
  [theme.breakpoints.up('md')]: {
    margin: '32px 32px 0',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1700px',
  },
}));

export const BoldTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  fontWeight: 600,
  fontSize: '30px',
  color: 'white',
  [theme.breakpoints.up('md')]: {
    marginBottom: '32px',
    fontSize: '40px',
  },
}));
