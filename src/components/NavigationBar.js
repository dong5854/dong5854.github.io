import * as React from 'react';
import { Toolbar } from "@mui/material";
import Logo from "components/Logo";
import NavigationTabs from "components/NavigationTabs";
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Toolbar disableGutters>
        <Logo xs={3} onClick={() => navigate('/')} />
        <NavigationTabs xs={9} />
      </Toolbar>
    </Grid>
  );
}

export default NavigationBar;