'use client';

import { Box, Grid } from '@mui/material';
import { SecImage, SectionWithWave, StyledImage, TopSectionWithWave } from './styles';
import walk1 from '../../assets/services/walk1.jpeg';
import walk2 from '../../assets/services/walk2.jpeg';
import { BoldTitle, GridContainer, Text } from '../UI';
import { Constants } from './constants';

export default function Walk() {
  return (
    <Box id="passeio" mt={10} sx={{ scrollMarginTop: '80px' }}>
      <TopSectionWithWave />
      <Box
        px={{ xs: 2, md: 5 }}
        py={2}
        bgcolor="primary.main"
        display="flex"
        justifyContent="center">
        <GridContainer container spacing={{ xs: 0, lg: 10 }}>
          <Grid size={{ xs: 12, lg: 6 }} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" height={{ xs: 300, sm: 380, md: 420 }} width={320}>
              <StyledImage src={walk1} alt="Anita com Beta e Carbono" fill />
            </Box>
            <SecImage>
              <StyledImage src={walk2} alt="Cachorro" fill />
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
