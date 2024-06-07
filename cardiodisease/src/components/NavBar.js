import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" style={{backgroundColor: "#212121"}}>
        <Toolbar>
          <Typography variant="h4" color="inherit" component="div" style={{width: "100%" }}>
            Cardio Disease Predictor
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;