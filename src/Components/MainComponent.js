import React, { Component } from "react";
import Header from "./HeaderComponent";
import Cart from "./CartComponent";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: 0,
			show: true,
		};
	}
	handleIncrease = () => {
		this.setState({ items: this.state.items + 1 });
	};

	handleDecrease = () => {
		if (this.state.items > 0) {
			this.setState({ items: this.state.items - 1 });
		} else {
			this.setState({ items: 0 });
		}
	};

	handleDelete = () => {
		this.setState({ items: 0 });
	};

	handleReload = () => {
		window.location.reload(false);
	};

	render() {
		return (
			<div className="container">
				<Header item={this.state.items} />
				<Cart
					item={this.state.items}
					handleIncrease={this.handleIncrease}
					handleDecrease={this.handleDecrease}
					handleDelete={this.handleDelete}
					handleReload={this.handleReload}
				/>
			</div>
		);
	}
}
export default Main;
