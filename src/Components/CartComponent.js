import React from "react";
import { Button } from "reactstrap";

const Cart = (props) => {
	return (
		<div className="conainer">
			<div className="row">
				<div className="col-12 col-md-2 mt-4 ml-3">
					<Button size="lg" color="danger">
						<span className="fa fa-trash"></span>
					</Button>
				</div>
				<div className="col-md mt-4">
					<Button size="lg" color="primary">
						<span className="fa fa-refresh"></span>
					</Button>
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-md-2 mt-4 ml-3">
					<Button size="lg" color="success">
						<span className="fa fa-plus"></span>
					</Button>
				</div>
				<div className="col-md mt-4">
					<Button size="lg" color="danger">
						<span className="fa fa-minus"></span>
					</Button>
				</div>
			</div>
		</div>
	);
};
export default Cart;
