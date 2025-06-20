'use client';

import { Box } from '@mui/material';
import walk from '../../assets/dog_walk.jpg';
import sitter from '../../assets/cat_sitter.jpeg';
import daycare from '../../assets/dog_daycare.jpg';
import hotel from '../../assets/dog_hotel.jpeg';
import Image from 'next/image';
import { Container, ImageBox, MoreButton, StyledImage, Title } from './styles';
import Link from 'next/link';

export default function Services() {
  return (
    <Box display="flex" flexDirection="column" margin={{ xs: '20px', md: '80px 40px' }}>
      <Container>
        <Link href="#creche" style={{ textDecoration: 'none' }}>
          <Box>
            <ImageBox>
              <Image src={daycare} alt="cachorro" fill style={StyledImage} />
            </ImageBox>
            <Title>Creche</Title>
          </Box>
        </Link>
        <Link href="#hospedagem" style={{ textDecoration: 'none' }}>
          <Box>
            <ImageBox>
              <Image src={hotel} alt="cachorro" fill style={StyledImage} />
            </ImageBox>
            <Title>Hospedagem</Title>
          </Box>
        </Link>
        <Link href="#sitter" style={{ textDecoration: 'none' }}>
          <Box>
            <ImageBox>
              <Image src={sitter} alt="gato" fill style={StyledImage} />
            </ImageBox>
            <Title>Pet Sitter</Title>
          </Box>
        </Link>
        <Link href="#passeio" style={{ textDecoration: 'none' }}>
          <Box>
            <ImageBox>
              <Image src={walk} alt="cachorro" fill style={StyledImage} />
            </ImageBox>
            <Title>Passeio</Title>
          </Box>
        </Link>
      </Container>
      <Link href="#contato" style={{ margin: 'auto' }}>
        <MoreButton>entre em contato!</MoreButton>
      </Link>
    </Box>
  );
}
