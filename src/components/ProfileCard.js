import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

const buttonStyle = {
  justifyContent: 'flex-start', borderRadius: '5px', textTransform: 'none'
}

function openWeb(url) {
  window.open(url, '_blank');
}


function ProfileCard() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Avatar
          alt="dong5854"
          src="https://avatars.githubusercontent.com/u/62425325?v=4"
          sx={{ width: 140, height: 140, marginTop: 5, marginBottom: 1.5 }}
        />
        <Box>
          <Box sx={{marginBottom: 2}}>
            <Box sx= {{fontWeight: 'bold', fontSize: 30}}>dong5854</Box>
            <Box>이동영</Box>
          </Box>
          <Stack spacing={0.5} sx={{width : '100%'}}>
            <Button variant='contained' color='greyButton' size='small' startIcon={<EmailIcon/>} sx={buttonStyle} onClick={() => openWeb('mailto:dong5854@gmail.com')}>dong5854@gmail.com</Button>
            <Button variant='contained' color='greyButton' size='small' startIcon={<GitHubIcon/>} sx={buttonStyle} onClick={() => openWeb('https://github.com/dong5854')}>Github</Button>
            <Button variant='contained' color='greyButton' size='small' startIcon={<LinkedInIcon/>} sx={buttonStyle} onClick={() => openWeb('https://www.linkedin.com/in/%EB%8F%99%EC%98%81-%EC%9D%B4-a88b7b244/')}>LinkedIn</Button>
            <Button variant='contained' color='greyButton' size='small' startIcon={<WebIcon/>} sx={buttonStyle} onClick={() => openWeb('https://velog.io/@dong5854')}>velog</Button>
          </Stack>
        </Box>
    </Box>
  );
}
export default ProfileCard;