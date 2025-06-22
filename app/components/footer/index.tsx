'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import logo from '../../assets/viva_logo.png';

import { Box } from '@mui/material';
import Link from 'next/link';
import {
  CleanLink,
  Container,
  FlexSpaceBetween,
  Info,
  LogoBox,
  NavigationButton,
  Section,
  Title,
} from './styles';

export default function Footer() {
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Creche', href: '#creche' },
    { label: 'Hospedagem', href: '#hospedagem' },
    { label: 'Sitter', href: '#sitter' },
    { label: 'Passeio', href: '#passeio' },
  ];
  return (
    <Container>
      <FlexSpaceBetween>
        <Section>
          <Title>Navegação</Title>
          {menuItems.map(({ label, href }) => (
            <Link href={href} key={href}>
              <NavigationButton disableTouchRipple>{label}</NavigationButton>
            </Link>
          ))}
        </Section>
        <Section>
          <Title>Redes Sociais</Title>
          <Box sx={{ color: 'white', display: 'flex', gap: '20px' }}>
            <CleanLink
              href="https://www.instagram.com/anita_petsitte"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: { xs: 36, sm: 45 } }} />
            </CleanLink>
            <CleanLink
              href={`https://wa.me/55${process.env.NEXT_PUBLIC_CELL}`}
              target="_blank"
              rel="noopener noreferrer">
              <WhatsAppIcon sx={{ fontSize: { xs: 36, sm: 45 } }} />
            </CleanLink>
            <CleanLink
              href="https://www.facebook.com/people/Anita-Petsitter/61556124382061"
              target="_blank"
              rel="noopener noreferrer">
              <FacebookIcon sx={{ fontSize: { xs: 36, sm: 45 } }} />
            </CleanLink>
          </Box>
        </Section>
        <Section justifyContent="center">
          <LogoBox>
            <Image src={logo} alt="logo viva pet" width={110} height={86} />
          </LogoBox>
        </Section>
      </FlexSpaceBetween>
      <Box>
        <Info>Copyright © {new Date().getFullYear()} Viva Pet</Info>
      </Box>
    </Container>
  );
}
