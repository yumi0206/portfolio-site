'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

import MobileMenu from './MobileMenu';
import { josefinSans } from '@/app/_libs/font';
import useStore from '@/app/_libs/useStore';

const Header: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const isLogin = useStore((state) => state.isLogin);

  const handleMobileDrawerClose = () => {
    setMobileDrawerOpen(false);
  };

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
  ];

  const filteredNavItems = isLogin ? navItems.filter((item) => item.label !== 'Login') : navItems;

  return (
    <AppBar
      className={josefinSans.className}
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: { xs: '10px', sm: '27px 65px' }, color: 'primary.main', fontSize: '17px' }}
    >
      <Toolbar disableGutters>
        <Link href="/" passHref>
          <Typography sx={{ cursor: 'pointer' }}>Site Name</Typography>
        </Link>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexGrow: 1,
            justifyContent: 'flex-end',
            gap: 3,
          }}
        >
          {filteredNavItems.map((item) => (
            <Link href={item.href} key={item.label}>
              <Typography>{item.label}</Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            aria-label="open drawer"
            onClick={() => setMobileDrawerOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <MobileMenu open={mobileDrawerOpen} handleMobileDrawerClose={handleMobileDrawerClose} />
    </AppBar>
  );
};

export default Header;
