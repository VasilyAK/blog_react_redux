import {
	FETCH_COMMENT,
	FETCH_COMMENT_REJECTED,
	FETCH_COMMENT_FULFILLED,
	GHANGE_COMMENT
} from "../actions/actions_types";

const commentInitialState = {
	commentData: null,
	fetching: false,
	error: null,
	attention: null
};

const commentReducer = (state = commentInitialState, action) => {
	switch (action.type) {
		case FETCH_COMMENT:
			return {...state, fetching: true};

		case FETCH_COMMENT_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_COMMENT_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				commentData: action.payload,
			};


		case GHANGE_COMMENT:
			// тут нужно отправить данные на сервер, но обрабатываю только локальные данные
			// обработка идет в связке с user
			if (state.commentData !== null){
				const newData = {...state.commentData};

				(function setNewData (data, step) {
					if (step+1 < action.payload.path.length){
						setNewData(data[action.payload.path[step]], step+1)
					} else {
						data[action.payload.path[step]] = action.payload.data
					}
				})(newData, 0);

				return {
					...state,
					commentData: newData
				};
			} else {
				return state
			}


		default:
			return state;
	}
};

export default commentReducer;