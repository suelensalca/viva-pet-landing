import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

export const TopSectionWithWave = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: '80px',
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
    backgroundImage: `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%23d55500"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%23d55500"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%23d55500"/></svg>')`,
  },
  [theme.breakpoints.up('xl')]: {
    height: '110px',
  },
  [theme.breakpoints.up('xl')]: {
    '::before': {
      backgroundSize: '210% calc(2vw + 86px)',
    },
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
    backgroundImage: `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23d55500"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23d55500"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23d55500"/></svg>')`,
  },
  [theme.breakpoints.up('xl')]: {
    '::before': {
      backgroundSize: '210% calc(2vw + 86px)',
    },
  },
}));

export const StyledImage = styled(Image)({
  objectFit: 'cover',
  borderRadius: '20px',
  border: '4px solid',
  borderColor: '#FFA940',
});
