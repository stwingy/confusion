
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
	dishes: Dishes,
	promotions: Promotions,
	leaders: Leaders,
	comments: Comments
});
export default RootReducer;
