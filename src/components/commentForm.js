import React, { Component } from 'react';
import { Nav, NavItem, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';


class commentForm extends Component {
	state = {
        isModalOpen: false,
        dis:true
	};

	toggleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.toggleModal();
		//console.log(this.props)
	this.props.addComment(this.props.dishId,this.rate.value,this.name.value,this.comment.value)
		//this.props.addComment(null,this.rate.value,this.name.value,this.comment.value)
		//console.log('heelo  ' + this.rate.value + ' ' + this.name.value + ' ' + this.comment.value);
	};
	render() {
    
    
		return (
			<div>
				<Nav  navbar>
					<NavItem>
						<Button  onClick={() => this.toggleModal()}>
							<span className="fa fa-rss fa-sm" /> Submit Comment
						</Button>
					</NavItem>
				</Nav>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Make A Comment</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label htmlFor="id">Your Rating</Label>
								<Input type="select" id="rate" name="rate" innerRef={(input) => (this.rate = input)}>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="name">Your Name</Label>
								<Input type="text" id="name" name="name" innerRef={(input) => (this.name = input)} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="comment">Make Comment</Label>
								<Input type="textarea"  name="comment" innerRef={(input) => (this.comment = input)} />
							</FormGroup>
							<Button  type="submit" value="submit" color="primary">
								Submit
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default commentForm;
