import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actiontypes'
export const Comments = (state = COMMENTS, action) => {
	switch (action.type) {
		case ActionTypes.ADD_COMMENT:
		let comment = action.payload
		console.log(comment)
		comment.id = state.length
		comment.date = new Date().toISOString()
		return state.concat(comment)
		default:
			return state;
	}
};
