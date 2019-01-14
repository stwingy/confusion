import React, { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import {Switch,Route,Redirect} from 'react-router-dom'
import Contact from './contact'
import About from './about'

const bg='assets/images/pic.jpg'
class Main extends Component {
	state = {
		dishes: DISHES,
	comments:COMMENTS,
	promotions:PROMOTIONS,
	leaders:LEADERS
	};
	
	render() {
	
		const HomePage=()=>{
			return(
				<Home dish ={this.state.dishes.find(item=>item.featured===true)}
				promotion ={this.state.promotions.find(item=>item.featured===true)}
				leader ={this.state.leaders.filter(item=>item.featured===true)[0]}
				
				
				/>
					
			)
		}

		const DishWithId = ({match}) => {
			return(
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
				  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
			);
		  }

		return (
			// <div className='background-image' style ={ { backgroundImage: "url("+bg+")",  height: "100% ",backgroundPosition: 'center',backgroundSize:'cover'} }>
			<div>
				<Header />
				<Switch>
              <Route exact path='/home' component={HomePage} />
			  <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
			  <Route exact path='/contactus' component={Contact} />
			  <Route exact path='/aboutus' component={()=><About leaders = {this.state.leaders}/>} />
              <Redirect to="/home" />
          </Switch>
				<Footer/>
			</div>
		);
	}
}

export default Main;
