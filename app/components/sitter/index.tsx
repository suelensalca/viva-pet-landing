'use client';

import { Box, Grid } from '@mui/material';
import { SecImage, SectionWithWave, StyledImage, TopSectionWithWave } from './styles';
import sitter1 from '../../assets/services/sitter1.jpeg';
import sitter2 from '../../assets/services/sitter2.jpeg';
import { BoldTitle, GridContainer, Text } from '../UI';
import { Constants } from './constants';

export default function Sitter() {
  return (
    <Box id="sitter" mt={10}>
      <TopSectionWithWave />
      <Box
        px={{ xs: 2, md: 5 }}
        py={2}
        bgcolor="secondary.dark"
        display="flex"
        justifyContent="center">
        <GridContainer container spacing={{ xs: 0, lg: 10 }}>
          <Grid size={{ xs: 12, lg: 6 }} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" height={{ xs: 300, sm: 380, md: 420 }} width={320}>
              <StyledImage src={sitter1} alt="Gato" fill />
            </Box>
            <SecImage>
              <StyledImage src={sitter2} alt="Hamster" fill />
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
