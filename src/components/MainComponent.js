import React, { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

import Header from './HeaderComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import Contact from './contact'
import About from './about'
import {connect} from 'react-redux'
import * as actions from '../redux/actionCreators'
//addComment fetchDishes
//const bg='assets/images/pic.jpg'
class Main extends Component {
	state = {

	};
	componentDidMount(){
		this.props.fetchDishes()
		this.props.fetchComments()
		this.props.fetchPromos()
	}
	
	render() {
	
		const HomePage=()=>{
			return(
				<Home  dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
				dishesLoading={this.props.dishes.isLoading}
				dishErrMess={this.props.dishes.errMess}
				promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
				promoLoading={this.props.promotions.isLoading}
				promoErrMess={this.props.promotions.errMess}
				leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				
				
				/>
					
			)
		}

		const DishWithId = ({match}) => {
			return(
				<DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
          />
			);
		  }

		return (
			// <div className='background-image' style ={ { backgroundImage: "url("+bg+")",  height: "100% ",backgroundPosition: 'center',backgroundSize:'cover'} }>
			<div>
				<Header />
				<Switch>
              <Route exact path='/home' component={HomePage} />
			  <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
			  <Route exact path='/contactus' component={Contact} />
			  <Route exact path='/aboutus' component={()=><About leaders = {this.props.leaders}/>} />
              <Redirect to="/home" />
          </Switch>
				<Footer/>
			</div>
		);
	}
}
const mapStateToProps=(state)=>{
return{
	dishes: state.dishes,
	comments:state.comments,
	promotions:state.promotions,
	leaders:state.leaders
}
}

export default withRouter( connect(mapStateToProps,actions)(Main));
