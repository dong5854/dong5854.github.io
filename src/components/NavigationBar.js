import * as React from 'react';
import { Toolbar } from "@mui/material";
import Logo from "components/Logo";
import NavigationTabs from "components/NavigationTabs";
import { Grid } from "@mui/material";

function NavigationBar() {
  return (
    <Grid container spacing={2}>
        <Toolbar disableGutters>
              <Logo xs={3}/>
              <NavigationTabs xs={9}/>
        </Toolbar>
      </Grid>
  );
}

export default NavigationBar;