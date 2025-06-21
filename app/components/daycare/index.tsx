'use client';

import { Box, Grid } from '@mui/material';
import { SecImage, SectionWithWave, StyledImage, TopSectionWithWave } from './styles';
import daycare1 from '../../assets/daycare.jpeg';
import daycare2 from '../../assets/dog_daycare.jpg';
import { BoldTitle, GridContainer, Text } from '../UI';
import { Constants } from './constants';

export default function Daycare() {
  return (
    <Box id="creche" mt={10}>
      <TopSectionWithWave />
      <Box
        px={{ xs: 2, md: 5 }}
        py={2}
        bgcolor="primary.main"
        display="flex"
        justifyContent="center">
        <GridContainer container spacing={{ xs: 0, lg: 10 }}>
          <Grid size={{ xs: 12, lg: 6 }} textAlign="center" alignContent="center">
            <BoldTitle>{Constants.title}</BoldTitle>
            <Text mb={2}>{Constants.firstPar}</Text>
            <Text mb={2}>{Constants.secondPar}</Text>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" height={{ xs: 300, sm: 380, md: 420 }} width={320}>
              <StyledImage src={daycare1} alt="Anita com Beta e Carbono" fill />
            </Box>
            <SecImage>
              <StyledImage src={daycare2} alt="Cachorro Carbono" fill />
            </SecImage>
          </Grid>
        </GridContainer>
      </Box>
      <SectionWithWave />
    </Box>
  );
}
