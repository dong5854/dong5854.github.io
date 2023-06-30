import * as React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function ProfileCard() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Toolbar disableGutters>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Box>dong5854</Box>
          <Box>https://github.com/dong5854</Box>
        </Box>
      </Toolbar>
      <Divider />
    </Box>
  );
}
export default ProfileCard;