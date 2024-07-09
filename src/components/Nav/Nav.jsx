import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import RandomImage from '../RandomImage/RandomImage';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" className="nav-title" style={{ color: 'inherit', textDecoration: 'none' }}>
              Inspire2Inspire
            </Link>
          </Typography>
          {!user.id && (
            <Button color="inherit" component={Link} to="/login">
              Login / Register
            </Button>
          )}
          {user.id && (
            <>
              <Button color="inherit" component={Link} to="/user">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/info">
                Gallery
              </Button>
              
            </>
          )}
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={RandomImage}>
            
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
