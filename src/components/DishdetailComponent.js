import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	renderComments(comments) {
		return comments.map((comm) => (
			<div key={comm.id}>
				<li>{comm.comment}</li>
				<br />
				<li className="text-muted">
					{`--${comm.author}, `}
					{new Date(comm.date).toDateString()}
				</li>
				<br />
			</div>
		));
	}
	renderCard() {
		if (!this.props.dish) return <div />;

		const { image, name, comments, description } = this.props.dish;

		return (
			<div className="row">
				<div className="column col-12 col-md-5 m-1">
					<Card>
						<CardImg top width="100%" src={image} alt={name} />
						<CardBody>
							<CardTitle>{name}</CardTitle>
							<CardText>{description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="column col-12 col-md-5 m-1">
					<h4>Comments</h4>
					<br />
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
