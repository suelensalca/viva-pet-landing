import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
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

export const LinkBox = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  display: 'flex',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
}));

export const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: '#F1F2F6',
  border: 'none',
  boxShadow: 'none',
  borderRadius: '10px',
}));

export const StyledAccordionSum = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  marginBottom: '8px',
  borderRadius: '8px',
  span: {
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    span: {
      svg: {
        fontSize: '24px',
      },
    },
  },
}));

export const AccordionText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '26px',
  [theme.breakpoints.down('md')]: {
    fontSize: '21px',
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  bgcolor: 'white',
  fontSize: '21px',
  textAlign: 'left',
  fontWeight: 500,
  marginBottom: '16px',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
}));

export const SmallIcon = {
  fontSize: '21px',
  marginRight: '4px',
};
