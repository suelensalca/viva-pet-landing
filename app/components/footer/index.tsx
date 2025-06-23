'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
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
  SmallIcon,
  Title,
} from './styles';

export default function Footer() {
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#creche' },
    { label: 'Contato', href: '#contato' },
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
              href={`https://wa.me/55${process.env.NEXT_PUBLIC_CELL}`}
              target="_blank"
              rel="noopener noreferrer">
              <WhatsAppIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </CleanLink>
            <CleanLink
              href="https://www.instagram.com/anita_petsitte"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </CleanLink>
            <CleanLink
              href="https://www.facebook.com/people/Anita-Petsitter/61556124382061"
              target="_blank"
              rel="noopener noreferrer">
              <FacebookIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </CleanLink>
          </Box>
          <Title>Contato</Title>
          <CleanLink
            href={`tel:+${process.env.NEXT_PUBLIC_CELL}`}
            target="_blank"
            rel="noopener noreferrer">
            <Info>
              <LocalPhoneIcon sx={SmallIcon} />
              {process.env.NEXT_PUBLIC_CELL_FORMAT}
            </Info>
          </CleanLink>
          <CleanLink
            href="mailto:anitadivito10@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <Info>
              <EmailIcon sx={SmallIcon} />
              anitadivito10@gmail.com
            </Info>
          </CleanLink>
        </Section>
        <Section justifyContent="center" alignItems="center">
          <LogoBox>
            <Image src={logo} alt="logo viva pet" width={110} height={86} />
          </LogoBox>
          <Info>Copyright © {new Date().getFullYear()} Viva Pet</Info>
        </Section>
      </FlexSpaceBetween>
    </Container>
  );
}
