'use client';

import { Box, Grid } from '@mui/material';
import { SecImage, SectionWithWave, StyledImage, TopSectionWithWave } from './styles';
import hotel1 from '../../assets/services/hotel1.jpeg';
import hotel2 from '../../assets/services/hotel2.png';
import { BoldTitle, GridContainer, Text } from '../UI';
import { Constants } from './constants';

export default function Hotel() {
  return (
    <Box id="hospedagem" mt={10}>
      <TopSectionWithWave />
      <Box
        px={{ xs: 2, md: 5 }}
        py={2}
        bgcolor="primary.dark"
        display="flex"
        justifyContent="center">
        <GridContainer container spacing={{ xs: 0, lg: 10 }}>
          <Grid size={{ xs: 12, lg: 6 }} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" height={{ xs: 300, sm: 380, md: 420 }} width={320}>
              <StyledImage src={hotel2} alt="Cachorros na creche" fill />
            </Box>
            <SecImage>
              <StyledImage src={hotel1} alt="Anita com Beta e Carbono" fill />
            </SecImage>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} textAlign="center" alignContent="center">
            <BoldTitle>{Constants.title}</BoldTitle>
            <Text mb={2}>{Constants.firstPar}</Text>
            <Text mb={2}>{Constants.secondPar}</Text>
          </Grid>
        </GridContainer>
      </Box>
      <SectionWithWave />
    </Box>
  );
}
