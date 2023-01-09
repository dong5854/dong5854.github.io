import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom"
import Home from "./routes/Home"
import { ThemeProvider } from "@mui/material";
import myTheme from "themes/myTheme";

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
