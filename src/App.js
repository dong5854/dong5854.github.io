import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom"
import Home from "./routes/Home"
import { ThemeProvider } from "@mui/material";
import myTheme from "themes/myTheme";
import Profile from "components/Profile";
import NavigationBar from "components/NavigationBar";

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<NavigationBar />
			<Profile/>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
