import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Counter } from "../features/counter/components/Counter";
import ClassicCounter from "../features/classicCounter/Container";
import logo from "../logo.svg";

const Router = (): JSX.Element => {
	return (
		<BrowserRouter>
			<div style={{ textAlign: "center", margin: "100px 0" }}>
				<Link to="/" style={{ marginRight: "30px", fontSize: "30px" }}>
					Modern Redux
				</Link>
				<Link to="/old" style={{ fontSize: "30px" }}>
					Classic Redux
				</Link>
			</div>
			<img
				src={logo}
				style={{ height: "100px", width: "100%" }}
				className="App-logo"
				alt="logo"
			/>
			<Switch>
				<Route path="/old" component={ClassicCounter} />
				<Route path="/" component={Counter} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
