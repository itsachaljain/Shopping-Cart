import React, { Component } from "react";
import Header from "./HeaderComponent";
import Cart from "./CartComponent";

class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<Header />
				<Cart />
			</div>
		);
	}
}
export default Main;
