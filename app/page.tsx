import { Box } from '@mui/material';
import Intro from './components/intro';
import About from './components/about';
import Services from './components/services';
import Reviews from './components/reviews';
import Daycare from './components/daycare';

export default function Home() {
  return (
    <Box>
      <Intro />
      <Services />
      <About />
      <Reviews />
      <Daycare />
    </Box>
  );
}
