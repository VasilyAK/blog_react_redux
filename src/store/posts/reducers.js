import {ADD_POST, DELETE_POST, GET_POSTS} from "./constants";

const postInitialState = {

};

const postReducer = (state = postInitialState, action) => {
	switch (action.type) {
		case ADD_POST:
			state = [...state, action.data];
			return action.data;

		case DELETE_POST:
			const delId = state.find (item => item.id === action.data.id);
			return state.splice(delId, 1);

		case GET_POSTS:
			this.getPosts(action.data);
			break;

		default:
			return state;
	}
};