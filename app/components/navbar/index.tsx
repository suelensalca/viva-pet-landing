'use client';

import AppBar from '@mui/material/AppBar';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/viva_logo.png';
import { NavigationButton, StyledListButton, StyledListText, StyledToolbar } from './styles';
import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Creche', href: '#creche' },
    { label: 'Hospedagem', href: '#hospedagem' },
    { label: 'Passeio', href: '#passeio' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'common.white', boxShadow: 'none' }}>
      <StyledToolbar>
        <Link href="#inicio">
          <Image
            src={logo}
            alt="logo viva pet"
            width={95}
            height={76}
            style={{ marginBottom: '-6px' }}
          />
        </Link>
        {isMobile ? (
          <>
            <IconButton color="primary" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: '30px' }} />
            </IconButton>
            <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}>
                <List>
                  {menuItems.map(({ label, href }) => (
                    <ListItem disablePadding key={href} color="secondary.main">
                      <ListItemButton component={Link} href={href} sx={StyledListButton}>
                        <StyledListText primary={label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box display="flex" gap="20px">
              {menuItems.map(({ label, href }) => (
                <Link href={href} key={href}>
                  <NavigationButton sx={{ borderRadius: '8px' }}>{label}</NavigationButton>
                </Link>
              ))}
            </Box>
            <Box />
          </>
        )}
      </StyledToolbar>
    </AppBar>
  );
}
