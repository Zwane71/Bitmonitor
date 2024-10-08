import {
	AppBar,
	Container,
	MenuItem,
	Select,
	Toolbar,
	Typography,
} from "@material-ui/core";
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom"; // Updated import
import { CoinState } from "../CoinContext";

const useStyles = makeStyles((theme) => ({
	title: {
		flex: 1,
		color: "gold",
		fontFamily: "Montserrat",
		fontWeight: "bold",
		cursor: "pointer",
	},
}));

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#fff",
		},
		type: "dark",
	},
});

function Header() {
	const classes = useStyles();
	const { currency, setCurrency } = CoinState();
	const navigate = useNavigate(); // Updated from useHistory

	return (
		<ThemeProvider theme={darkTheme}>
			<AppBar color='transparent' position='static'>
				<Container>
					<Toolbar>
						<Typography
							onClick={() => navigate(`/`)} // Updated from history.push
							variant='h6'
							className={classes.title}>
							MarketMingle
						</Typography>
						{/* <Button color="inherit">Login</Button> */}
						<Select
							variant='outlined'
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={currency}
							style={{ width: 100, height: 40, marginLeft: 15 }}
							onChange={(e) => setCurrency(e.target.value)}>
							<MenuItem value={"USD"}>ZAR</MenuItem>
							<MenuItem value={"EUR"}>EUR</MenuItem>
							<MenuItem value={"ZAR"}>USD</MenuItem>
							<MenuItem value={"NGN"}>NGN</MenuItem>
						</Select>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
}

export default Header;
