'use client';

import { Box, Grid, Typography } from '@mui/material';
import { SectionWithWave, StyledImage } from './styles';
import intro from '../../assets/intro.jpg';
import { BoldTitle, GridContainer } from '../UI';
import { Constants } from './constants';

export default function Intro() {
  return (
    <Box id="inicio" mt={10} sx={{ scrollMarginTop: '80px' }}>
      <Box
        px={{ xs: 2, md: 5 }}
        py={5}
        bgcolor="primary.dark"
        display="flex"
        justifyContent="center">
        <GridContainer container spacing={{ xs: 4, md: 10 }}>
          <Grid size={{ xs: 12, md: 6 }} textAlign="center" alignContent="center">
            <BoldTitle>{Constants.title}</BoldTitle>
            <Typography color="white" fontSize={{ xs: 20, md: 26 }}>
              {Constants.subtitle}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
            <Box position="relative" height={500} width={480}>
              <StyledImage src={intro} alt="Anita com Beta e Carbono" fill />
            </Box>
          </Grid>
        </GridContainer>
      </Box>
      <SectionWithWave />
    </Box>
  );
}
