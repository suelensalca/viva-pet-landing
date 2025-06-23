'use client';

import { Box, Grid } from '@mui/material';
import { SectionWithWave, StyledImage, TopSectionWithWave } from './styles';
import about from '../../assets/about.jpg';
import { BoldTitle, GridContainer, Text } from '../UI';
import { Constants } from './constants';

export default function About() {
  return (
    <Box id="sobre" mt={10} sx={{ scrollMarginTop: '80px' }}>
      <TopSectionWithWave />
      <Box
        px={{ xs: 2, md: 5 }}
        py={2}
        bgcolor="secondary.dark"
        display="flex"
        justifyContent="center">
        <GridContainer container spacing={{ xs: 4, md: 10 }}>
          <Grid size={{ xs: 12, lg: 6 }} textAlign="center" alignContent="center">
            <BoldTitle>{Constants.title}</BoldTitle>
            <Text mb={2}>{Constants.firstPar}</Text>
            <Text mb={2}>{Constants.secondPar}</Text>
            <Text mb={2}>{Constants.thirdPar}</Text>
            <Text>{Constants.fourthPar}</Text>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" height={520} width={480}>
              <StyledImage src={about} alt="Anita com Beta e Carbono" fill />
            </Box>
          </Grid>
        </GridContainer>
      </Box>
      <SectionWithWave />
    </Box>
  );
}
