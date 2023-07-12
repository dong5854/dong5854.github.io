import * as React from 'react';
import Box from '@mui/material/Box';
import{ useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { default as myTheme } from '../themes/myTheme';

const buttonStyle = {
  justifyContent: 'flex-start', borderRadius: '5px', textTransform: 'none', ':hover': {
    color : myTheme.palette.linkButton.light,
  }
}

function NewsSites() {
  const [blogs, setBlogs] = useState(null);
  const [curationSites, setCurationSites] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/techBlog.json');
        const jsonData = await response.json();
        setBlogs(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/curationSite.json');
        const jsonData = await response.json();
        setCurationSites(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!blogs || !curationSites) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>기술 블로그</div>
      <Stack spacing={0.5} sx={{width : '60%'}}>
      {
        blogs.map((blog, i) => {
          return (
              <Button target="_blank" rel="noopener noreferrer" variant='contained' color='linkButton' size='small' key={i} href={blog.url} sx={buttonStyle}>
              <Box component="img" src={`http://www.google.com/s2/favicons?domain=${blog.url}`} alt={blog.blogName} width="20" height="20" sx={{marginRight : 1}}/>
                <Box component="span">{blog.blogName}</Box>
              </Button>
          );
        })
      }
      </Stack>
      <div>큐레이션 사이트</div>
      <Stack spacing={0.5} sx={{width : '60%'}}>
      {
        curationSites.map((site, i) => {
          return (
            <>
            <Button target="_blank" rel="noopener noreferrer" variant='contained' color='linkButton' size='small' key={i} href={site.url} sx={buttonStyle}>
              <Box component="img" src={`http://www.google.com/s2/favicons?domain=${site.url}`} alt={site.siteName} width="20" height="20" sx={{marginRight : 1}}/>
              <Box component="span">{site.siteName}</Box>
            </Button>
            </>
          );
        })
      }
      </Stack>
    </>
  );
}
export default NewsSites;