'use client';
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';

interface MobileMenuProps {
  open: boolean;
  handleMobileDrawerClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, handleMobileDrawerClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleMobileDrawerClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '80%',
          maxWidth: '500px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <IconButton onClick={handleMobileDrawerClose}>
          <CancelIcon sx={{ color: 'primary.main' }} />
        </IconButton>
      </Box>
      <List sx={{ color: 'primary.main'}}>
        <Link href="/about" passHref>
          <ListItem button onClick={handleMobileDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link href="/blog" passHref>
          <ListItem button onClick={handleMobileDrawerClose}>
            <ListItemText primary="Blog" />
          </ListItem>
        </Link>
        <Link href="/gallery" passHref>
          <ListItem button onClick={handleMobileDrawerClose}>
            <ListItemText primary="Gallery" />
          </ListItem>
        </Link>
        <Link href="/contact" passHref>
          <ListItem button onClick={handleMobileDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Link href="/login" passHref>
          <ListItem button onClick={handleMobileDrawerClose}>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default MobileMenu;
