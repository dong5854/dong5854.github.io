import * as React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Logo({navigate}) {
  return (
    <Box
        component="div"
        display="flex"
        alignItems="center"
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          navigate('/');
        }}
    >
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
  </Box>
  );
}
export default Logo;