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

import {
  AccordionText,
  CleanLink,
  Info,
  LinkBox,
  SmallIcon,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSum,
  Title,
} from './styles';
import { Box, Grid } from '@mui/material';
import { Faq } from './constants';

export default function Contact() {
  return (
    <Box id="contato" textAlign="center" margin={{ xs: '20px', md: '80px 40px' }}>
      <Grid container spacing={4} mx={{ xs: 0, lg: 10 }} my={2}>
        <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: 'center', md: 'left' }}>
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
          <LinkBox>
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
          </LinkBox>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Title>Perguntas e respostas</Title>
          {Faq.map(({ question, answer }) => (
            <StyledAccordion key={question}>
              <StyledAccordionSum
                expandIcon={<ExpandMoreIcon />}
                aria-controls={question}
                id={question}>
                <AccordionText>{question}</AccordionText>
              </StyledAccordionSum>
              <StyledAccordionDetails>{answer}</StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
