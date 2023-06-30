import * as React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <Toolbar disableGutters onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
    <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, ml: 2, mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
  </Toolbar>
  );
}
export default Logo;