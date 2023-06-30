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
import { Grid } from "@mui/material";

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<NavigationBar />
			<Profile/>
			<Grid container>
				<Grid item xs={2} md={2} lg={2}>
					<div>프로필을 왼쪽으로 뺄까 고민중</div>
				</Grid>
					<Grid item xs={8} md={8} lg={8}>
						<Router>
							<Routes>
								<Route path="/" element={<Home/>}/>
							</Routes>
						</Router>
					</Grid>
				<Grid item xs={2} md={2} lg={2}>
					<div>오른쪽은 세부카테고리가 있는 네비게이션을 넣을 예정</div>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
