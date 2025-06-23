'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

import { CleanLink, Info, SmallIcon, Title } from './styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { Faq } from './constants';

export default function Contact() {
  return (
    <Box id="contato" textAlign="center" margin={{ xs: '20px', md: '80px 40px' }}>
      <Grid container spacing={4} mx={{ xs: 0, lg: 10 }} my={2}>
        <Grid size={{ xs: 12, md: 4 }} textAlign="left">
          <Title>Contato</Title>
          <CleanLink
            href={`tel:+${process.env.NEXT_PUBLIC_CELL}`}
            target="_blank"
            rel="noopener noreferrer">
            <Info>
              <LocalPhoneIcon sx={SmallIcon} />
              {process.env.NEXT_PUBLIC_CELL_FORMAT}
            </Info>
          </CleanLink>
          <CleanLink
            href="mailto:anitadivito10@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <Info>
              <EmailIcon sx={SmallIcon} />
              anitadivito10@gmail.com
            </Info>
          </CleanLink>
          <Title mt={6}>Redes Sociais</Title>
          <Box sx={{ color: 'secondary.dark', display: 'flex', gap: '20px' }}>
            <CleanLink
              href={`https://wa.me/55${process.env.NEXT_PUBLIC_CELL}`}
              target="_blank"
              rel="noopener noreferrer">
              <WhatsAppIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </CleanLink>
            <CleanLink
              href="https://www.instagram.com/anita_petsitte"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </CleanLink>
            <CleanLink
              href="https://www.facebook.com/people/Anita-Petsitter/61556124382061"
              target="_blank"
              rel="noopener noreferrer">
              <FacebookIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </CleanLink>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Title>Perguntas e respostas</Title>
          {Faq.map(({ question, answer }) => (
            <Accordion
              key={question}
              sx={{
                bgcolor: '#F1F2F6',
                border: 'none',
                boxShadow: 'none',
                borderRadius: '10px',
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={question}
                id={question}
                sx={{
                  bgcolor: 'secondary.dark',
                  marginBottom: '8px',
                  borderRadius: '8px',
                  span: { color: 'white' },
                }}>
                <Typography component="span" sx={{ color: 'white', fontSize: '26px' }}>
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: 'white',
                  fontSize: '21px',
                  textAlign: 'left',
                  fontWeight: 500,
                  marginBottom: '16px',
                  padding: '20px',
                }}>
                {answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
