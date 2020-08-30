import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron, Badge } from "reactstrap";

class Header extends Component {
	render() {
		return (
			<>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarBrand>
							<div>
								<span className="fa fa-shopping-cart fa-2x"></span>
								<Badge className="danger">{this.props.item}</Badge>
							</div>
						</NavbarBrand>
					</div>
				</Navbar>

				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>The Shopping Cart</h1>
								<p>
									Add or Remove items from your shopping cart! Else entirely
									delete the item if useless!
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</>
		);
	}
}
export default Header;
