import {
	FETCH_USER,
	FETCH_USER_REJECTED,
	FETCH_USER_FULFILLED,
	GHANGE_USER
} from "../constants";

const userInitialState = {
	userData: null,
	fetching: false,
	fetched: false,
	error: null,
	attention: null
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {...state, fetching: true};

		case FETCH_USER_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_USER_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				userData: action.payload,
			};


		case GHANGE_USER:
			// тут нужно отправить данные на сервер, но обрабатываю только локальные данные
			// обработка идет в связке с user
			if (state.userData !== null){
				const newData = {...state.userData};

				(function setNewData (data, step) {
					if (step+1 < action.payload.path.length){
						setNewData(data[action.payload.path[step]], step+1)
					} else {
						data[action.payload.path[step]] = action.payload.data
					}
				})(newData, 0);

				return {
					...state,
					userData: newData
				};
			} else {
				return state
			}


		default:
			return state;
	}
};

export default userReducer;