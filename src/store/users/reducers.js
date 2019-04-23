import {
	FETCH_USERS,
	FETCH_USERS_REJECTED,
	FETCH_USERS_FULFILLED,
	ADD_USER,
	DELETE_USER,
	GHANGE_USER,
	RESET_ATTENTION_USERS,
	SET_PAGINATION
} from "../constants";

const userInitialState = {
	usersData: [],
	pagination: null,
	fetching: false,
	fetched: false,
	error: null,
	attention: null
};

const usersReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {...state, fetching: true};

		case FETCH_USERS_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_USERS_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				usersData: action.payload,
			};


		case ADD_USER:
			if (!state.usersData.some(user => user.id === action.payload.id)) {
				const pagination = {...state.pagination, update: true};
				return {
					...state,
					usersData: [action.payload, ...state.usersData],
					pagination
				};
			} else {
				return {
					...state,
					attention: {
						title: "Attention!",
						body: "This user already exists."
					}
				};
			}


		case DELETE_USER:
			const pagination = {...state.pagination, update: true};
			return {
				...state,
				usersData: state.usersData.filter((user) => user.id !== action.payload),
				pagination
			};


		case GHANGE_USER:
			// тут нужно отправить данные на сервер, но обрабатываю только локальные данные
			// обработка идет в связке с users
			if (state.usersData.length){
				const newData = [...state.usersData];
				const newUserData = newData.find(user => {
					return user.id === action.payload.id
				});
				(function setNewData (data, step) {
					if (step+1 < action.payload.path.length){
						setNewData(data[action.payload.path[step]], step+1)
					} else {
						data[action.payload.path[step]] = action.payload.data
					}
				})(newUserData, 0);

				return {
					...state,
					usersData: newData
				};
			} else {
				return state
			}


		case RESET_ATTENTION_USERS:
			return {...state, attention: action.payload};

		case SET_PAGINATION:
			return {...state, pagination: action.payload};

		default:
			return state;
	}
};

export default usersReducer;