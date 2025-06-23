import { Box, Fab } from '@mui/material';
import Intro from './components/intro';
import About from './components/about';
import Services from './components/services';
import Reviews from './components/reviews';
import Daycare from './components/daycare';
import Hotel from './components/hotel';
import Sitter from './components/sitter';
import Walk from './components/walk';
import Contact from './components/contact';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      <Contact />
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: { xs: '40px', sm: '80px' },
          right: { xs: '20px', sm: '40px' },
          bgcolor: '#25d366',
        }}>
        <a
          href={`https://wa.me/55${process.env.NEXT_PUBLIC_CELL}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            width: 40,
            height: 40,
          }}>
          <WhatsAppIcon sx={{ fontSize: 40, color: 'white' }} />
        </a>
      </Fab>
    </Box>
  );
}
