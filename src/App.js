import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom"
import Home from "./routes/Home"
import { ThemeProvider } from "@mui/material";
import myTheme from "themes/myTheme";
import ProfileCard from "components/ProfileCard";
import Profile from "routes/Profile";
import Posts from "routes/Posts";
import NavigationBar from "components/NavigationBar";
import { Grid } from "@mui/material";

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Router>
				<NavigationBar />
				<Grid container>
					<Grid item xs={2} md={2} lg={2}>
						<ProfileCard/>
					</Grid>
						<Grid item xs={8} md={8} lg={8}>
								<Routes>
									<Route path="/" element={<Home/>}/>
									<Route path="/profile" element={<Profile/>}/>
									<Route path="/Posts" element={<Posts/>}/>
								</Routes>
							
						</Grid>
					<Grid item xs={2} md={2} lg={2}>
						<div>오른쪽은 세부카테고리가 있는 네비게이션을 넣을 예정</div>
					</Grid>
				</Grid>
			</Router>
		</ThemeProvider>
	);
}

export default App;
