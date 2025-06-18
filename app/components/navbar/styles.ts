import { ButtonBase, ListItemText, Toolbar } from '@mui/material';
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
