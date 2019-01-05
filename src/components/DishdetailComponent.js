import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

class DishDetail extends Component {
	renderComments(comments) {
		return comments.map((comm) => (
			<div key={comm.id}>
				<li>{comm.comment}</li>
				<li>{`--${comm.author}, ${comm.date}`}</li>
				<br />
			</div>
		));
	}
	renderCard() {
		if (!this.props.dish) return <div />;

		const { image, name, category, comments, description, id, label, price } = this.props.dish;
		console.log(comments);
		return (
			<div className="row">
				<div className="column  col-md-5 col-12 m-1">
					<Card>
						<CardImg top width="100%" src={image} alt={name} />
						<CardBody>
							<CardTitle>{name}</CardTitle>
							<CardText>{description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="column col-12 col-md-5 m-1">
					<ul className="list-unstyled">{this.renderComments(comments)}</ul>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderCard()}</div>;
	}
}

export default DishDetail;
// category: "mains"
// comments: (5) [{…}, {…}, {…}, {…}, {…}]
// description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
// id: 0
// image: "assets/images/uthappizza.png"
// label: "Hot"
// name: "Uthappizza"
// price: "4.99"
