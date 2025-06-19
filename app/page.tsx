import { Box } from '@mui/material';
import Intro from './components/intro';
import About from './components/about';

export default function Home() {
  return (
    <Box>
      <Intro />
      <About />
    </Box>
  );
}
