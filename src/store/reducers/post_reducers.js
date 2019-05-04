import {
	FETCH_POST,
	FETCH_POST_REJECTED,
	FETCH_POST_FULFILLED,
	GHANGE_POST
} from "../actions/actions_types";

const postInitialState = {
	postData: null,
	fetching: false,
	error: null,
	attention: null
};

const postReducer = (state = postInitialState, action) => {
	switch (action.type) {
		case FETCH_POST:
			return {...state, fetching: true};

		case FETCH_POST_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_POST_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				postData: action.payload,
			};


		case GHANGE_POST:
			// тут нужно отправить данные на сервер, но обрабатываю только локальные данные
			// обработка идет в связке с user
			if (state.postData !== null){
				const newData = {...state.postData};

				(function setNewData (data, step) {
					if (step+1 < action.payload.path.length){
						setNewData(data[action.payload.path[step]], step+1)
					} else {
						data[action.payload.path[step]] = action.payload.data
					}
				})(newData, 0);

				return {
					...state,
					postData: newData
				};
			} else {
				return state
			}


		default:
			return state;
	}
};

export default postReducer;