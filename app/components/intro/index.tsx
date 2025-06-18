'use client';

import { Box, Grid, Typography } from '@mui/material';
import { SectionWithWave } from './styles';
import Image from 'next/image';
import intro from '../../assets/intro.jpg';

export default function Intro() {
  return (
    <Box>
      <Box p={5} bgcolor="primary.dark">
        <Grid container spacing={10} m={4}>
          <Grid size={6} textAlign="center" alignContent="center">
            <Typography mb={4} fontWeight={600} fontSize={40} color="white">
              Aqui seu pet é parte da nossa família!
            </Typography>
            <Typography color="white" fontSize={26}>
              Na Viva Pet, seu pet encontrará um lar longe de casa, cercado por amor, carinho e um
              ambiente familiar. Conheça nossos serviços!
            </Typography>
          </Grid>
          <Grid size={6}>
            <Box position="relative" height={500} width={480}>
              <Image
                src={intro}
                alt="anita com cachorros"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '20px',
                  border: '4px solid',
                  borderColor: '#95C11F',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <SectionWithWave />
    </Box>
  );
}
