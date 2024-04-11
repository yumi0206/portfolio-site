// Header.tsx または同等のファイル
'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import MobileMenu from './MobileMenu'; // MobileMenu コンポーネントをインポート

const Header: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

  const handleMobileDrawerClose = () => {
    setMobileDrawerOpen(false);
  };

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: { xs: '10px', sm: '27px 65px' }, color: '#4FA479', fontSize: '17px' }}
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
          {navItems.map((item) => (
            <Link href={item.href}>
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
