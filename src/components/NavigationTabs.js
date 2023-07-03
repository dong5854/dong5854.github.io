import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation } from 'react-router-dom';

function NavigationTabs() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={pathname === '/' ? false : pathname} centered>
        <Tab label="프로필" onClick={() => navigate('/profile')} value={pathname.startsWith('/profile') ? '/profile' : false}/>
        <Tab label="포스트" onClick={() => navigate('/posts')} value={pathname.startsWith('/posts') ? '/posts' : false}/>
      </Tabs>
    </Box>
  );
}
export default NavigationTabs;
