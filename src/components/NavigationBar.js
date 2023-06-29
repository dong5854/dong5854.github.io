import * as React from 'react';
import { Toolbar } from "@mui/material";
import Logo from "components/Logo";
import NavigationTabs from "components/NavigationTabs";

function NavigationBar() {
  return (
    <Toolbar disableGutters>
					<Logo/>
					<NavigationTabs/>
    </Toolbar>
  );
}

export default NavigationBar;