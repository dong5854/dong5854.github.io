import * as React from 'react';
import Logo from "components/Logo";
import Box from "@mui/material/Box";
import NavigationTabs from "components/NavigationTabs";
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
        <Box
          component="div"
          display="flex"
          alignItems="center"
          sx={{ cursor: 'pointer' }}
        >
          <Logo xs={3} navigate={navigate}/>
          <NavigationTabs xs={9}/>
        </Box>
    </Grid>
  );
}

export default NavigationBar;