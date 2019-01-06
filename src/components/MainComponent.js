import React, { Component } from 'react';

import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';

class Main extends Component {
	state = {
		dishes: DISHES,
		selectedDish: null
	};
	onDishSelect(dishId) {
		this.setState({
			selectedDish: dishId
		});
	}
	render() {
		return (
			<div>
				<Header />
				<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
				<DishdetailComponent
					dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
				/>
				<Footer/>
			</div>
		);
	}
}

export default Main;
