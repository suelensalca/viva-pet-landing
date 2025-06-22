import { Box } from '@mui/material';
import Intro from './components/intro';
import About from './components/about';
import Services from './components/services';
import Reviews from './components/reviews';
import Daycare from './components/daycare';
import Hotel from './components/hotel';
import Sitter from './components/sitter';
import Walk from './components/walk';

export default function Home() {
  return (
    <Box>
      <Intro />
      <Services />
      <About />
      <Reviews />
      <Daycare />
      <Hotel />
      <Sitter />
      <Walk />
    </Box>
  );
}
