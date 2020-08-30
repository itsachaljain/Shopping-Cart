import React, { Component } from "react";
import { Button, Badge } from "reactstrap";

class Cart extends Component {
	render() {
		return (
			<div className="conainer">
				<div className="row">
					<div className="col-12 col-md-2 mt-4 ml-3">
						<Button size="lg" color="danger" onClick={this.props.handleDelete}>
							<span className="fa fa-trash"></span>
						</Button>
					</div>
					<div className="col-md mt-4">
						<Button size="lg" color="primary" onClick={this.props.handleReload}>
							<span className="fa fa-refresh"></span>
						</Button>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-2 mt-4 ml-3">
						<Button
							size="lg"
							color="success"
							onClick={this.props.handleIncrease}
						>
							<span className="fa fa-plus"></span>
						</Button>
					</div>
					<div className="col-md-2 mt-4">
						<Button
							size="lg"
							color="danger"
							onClick={this.props.handleDecrease}
						>
							<span className="fa fa-minus"></span>
						</Button>
					</div>
					<div className="col-md-2 mt-4">
						<h5>
							{" "}
							<span className="fa fa-shopping-cart fa-2x">
								<Badge className="ml-2">{this.props.item}</Badge>
							</span>
						</h5>
					</div>
				</div>
			</div>
		);
	}
}
export default Cart;
