'use client';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Swiper } from 'swiper/react';

import review1 from './../../assets/reviews/review1.png';
import review2 from './../../assets/reviews/review2.png';
import review3 from './../../assets/reviews/review3.png';
import review4 from './../../assets/reviews/review4.png';
import review5 from './../../assets/reviews/review5.png';
import review6 from './../../assets/reviews/review6.png';
import review7 from './../../assets/reviews/review7.png';
import review8 from './../../assets/reviews/review8.png';
import reviewmobile1 from './../../assets/reviews/reviewmobile1.png';
import reviewmobile2 from './../../assets/reviews/reviewmobile2.png';
import reviewmobile3 from './../../assets/reviews/reviewmobile3.png';
import reviewmobile4 from './../../assets/reviews/reviewmobile4.png';
import reviewmobile5 from './../../assets/reviews/reviewmobile5.png';
import reviewmobile6 from './../../assets/reviews/reviewmobile6.png';
import reviewmobile7 from './../../assets/reviews/reviewmobile7.png';
import reviewmobile8 from './../../assets/reviews/reviewmobile8.png';
import google from './../../assets/google.png';
import { CleanLink, Container, StyledSwiperSlide, Subtitle, Title } from './styles';
import { Box, Grid, Rating, useMediaQuery } from '@mui/material';

export default function Reviews() {
  const isMobile = useMediaQuery('(max-width:599px)');

  const images = isMobile
    ? [
        { image: reviewmobile1, name: 'avaliação 1' },
        { image: reviewmobile2, name: 'avaliação 2' },
        { image: reviewmobile3, name: 'avaliação 3' },
        { image: reviewmobile4, name: 'avaliação 4' },
        { image: reviewmobile5, name: 'avaliação 5' },
        { image: reviewmobile6, name: 'avaliação 6' },
        { image: reviewmobile7, name: 'avaliação 7' },
        { image: reviewmobile8, name: 'avaliação 8' },
      ]
    : [
        { image: review1, name: 'avaliação 1' },
        { image: review2, name: 'avaliação 2' },
        { image: review3, name: 'avaliação 3' },
        { image: review4, name: 'avaliação 4' },
        { image: review5, name: 'avaliação 5' },
        { image: review6, name: 'avaliação 6' },
        { image: review7, name: 'avaliação 7' },
        { image: review8, name: 'avaliação 8' },
      ];

  return (
    <Box textAlign="center" margin={{ xs: '20px', md: '80px 40px' }}>
      <Title>Depoimentos</Title>
      <Subtitle>Avaliações que aquecem o coração!</Subtitle>
      <Grid container spacing={{ xs: 2, md: 4 }} mx={{ xs: 0, lg: 10 }} my={2} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          <Title>EXCELENTE</Title>
          <Rating value={5} />
          <Subtitle>
            com base em <span style={{ fontWeight: 600 }}>37 </span>
            avaliações
          </Subtitle>
          <CleanLink href="https://g.co/kgs/BdRky9p" target="_blank" rel="noopener noreferrer">
            <Image width={170} height={90} src={google} alt="google" />
          </CleanLink>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Container>
            <Swiper
              centeredSlides
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              navigation
              modules={[Autoplay, Navigation]}>
              {images.map((img) => (
                <StyledSwiperSlide key={img.name}>
                  <Image src={img.image} alt={img.name} />
                </StyledSwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
