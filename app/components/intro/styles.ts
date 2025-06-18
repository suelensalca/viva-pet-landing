import { Box, ButtonBase, ListItemText, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavigationButton = styled(ButtonBase)(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 600,
  padding: '10px 16px',
  color: theme.palette.primary.dark,
  '&:hover': {
    color: theme.palette.secondary.dark,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const StyledListText = styled(ListItemText)(({ theme }) => ({
  '& span': {
    fontSize: '18px',
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
}));

export const StyledListButton = {
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'primary.light',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'primary.light',
  },
  '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
    color: 'primary.main',
  },
};

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
  height: '86px',
  [theme.breakpoints.up('md')]: {
    padding: '0 40px',
  },
}));

export const SectionWithWave = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: '100px',
  '::before': {
    content: "''",
    position: 'absolute',
    zIndex: 3,
    pointerEvents: 'none',
    backgroundRepeat: 'no-repeat',
    bottom: '-0.1vw',
    left: '-0.1vw',
    right: '-0.1vw',
    top: '-0.1vw',
    backgroundSize: '100% 86px',
    backgroundPosition: '50% 0%',
    backgroundImage: `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%232e7d32"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%232e7d32"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%232e7d32"/></svg>')`,
  },
  [theme.breakpoints.up('xl')]: {
    '::before': {
      backgroundSize: '210% calc(2vw + 86px)',
    },
  },
}));
