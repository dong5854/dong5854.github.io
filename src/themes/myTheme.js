import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
    palette: {
        primary: {
            light: '#62BD69',
            main: '#30694B',
            dark: '#0C3823',
            contrastText: '#fff',
        },
        greyButton : {
            main: '#F2F2F2',
            dark: '#97C1A9', 
            contrastText: '#333e4c',
        }
    }
});

export default myTheme;
