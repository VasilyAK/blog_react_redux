import {
	FETCH_POSTS,
	FETCH_POSTS_REJECTED,
	FETCH_POSTS_FULFILLED,
	ADD_POST,
	DELETE_POST,
	GHANGE_POST,
	RESET_ATTENTION_POSTS,
	SET_PAGINATION_POSTS
} from "../actions/actions_types";

const postInitialState = {
	postsData: [],
	pagination: null,
	fetching: false,
	error: null,
	attention: null
};

const postsReducer = (state = postInitialState, action) => {
	const pagination = {...state.pagination, update: true};

	switch (action.type) {
		case FETCH_POSTS:
			return {...state, fetching: true};

		case FETCH_POSTS_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_POSTS_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				postsData: action.payload,
				pagination
			};


		case ADD_POST:
			if (!state.postsData.some(post => post.id === action.payload.id)) {
				return {
					...state,
					postsData: [action.payload, ...state.postsData],
					pagination
				};
			} else {
				return {
					...state,
					attention: {
						title: "Attention!",
						body: "This post already exists."
					}
				};
			}


		case DELETE_POST:
			return {
				...state,
				postsData: state.postsData.filter((post) => post.id !== action.payload),
				pagination
			};


		case GHANGE_POST:
			// тут нужно отправить данные на сервер, но обрабатываю только локальные данные
			// обработка идет в связке с users
			if (state.postsData.length){
				const newData = [...state.postsData];
				const newPostData = newData.find(post => {
					return post.id === action.payload.id
				});
				(function setNewData (data, step) {
					if (step+1 < action.payload.path.length){
						setNewData(data[action.payload.path[step]], step+1)
					} else {
						data[action.payload.path[step]] = action.payload.data
					}
				})(newPostData, 0);

				return {
					...state,
					postsData: newData
				};
			} else {
				return state
			}


		case RESET_ATTENTION_POSTS:
			return {...state, attention: action.payload};

		case SET_PAGINATION_POSTS:
			return {...state, pagination: action.payload};

		default:
			return state;
	}
};

export default postsReducer;