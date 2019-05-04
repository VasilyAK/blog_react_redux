import {
	FETCH_COMMENTS,
	FETCH_COMMENTS_REJECTED,
	FETCH_COMMENTS_FULFILLED,
	ADD_COMMENT,
	DELETE_COMMENT,
	GHANGE_COMMENT,
	RESET_ATTENTION_COMMENTS,
	SET_PAGINATION_COMMENTS
} from "../actions/actions_types";

const commentInitialState = {
	commentsData: [],
	pagination: null,
	fetching: false,
	error: null,
	attention: null
};

const commentsReducer = (state = commentInitialState, action) => {
	const pagination = {...state.pagination, update: true};

	switch (action.type) {
		case FETCH_COMMENTS:
			return {...state, fetching: true};

		case FETCH_COMMENTS_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_COMMENTS_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				commentsData: action.payload,
				pagination
			};


		case ADD_COMMENT:
			if (!state.commentsData.some(comment => comment.id === action.payload.id)) {
				return {
					...state,
					commentsData: [action.payload, ...state.commentsData],
					pagination
				};
			} else {
				return {
					...state,
					attention: {
						title: "Attention!",
						body: "This comment already exists."
					}
				};
			}


		case DELETE_COMMENT:
			return {
				...state,
				commentsData: state.commentsData.filter((comment) => comment.id !== action.payload),
				pagination
			};


		case GHANGE_COMMENT:
			// тут нужно отправить данные на сервер, но обрабатываю только локальные данные
			// обработка идет в связке с users
			if (state.commentsData.length){
				const newData = [...state.commentsData];
				const newCommentData = newData.find(comment => {
					return comment.id === action.payload.id
				});
				(function setNewData (data, step) {
					if (step+1 < action.payload.path.length){
						setNewData(data[action.payload.path[step]], step+1)
					} else {
						data[action.payload.path[step]] = action.payload.data
					}
				})(newCommentData, 0);

				return {
					...state,
					commentsData: newData
				};
			} else {
				return state
			}


		case RESET_ATTENTION_COMMENTS:
			return {...state, attention: action.payload};

		case SET_PAGINATION_COMMENTS:
			return {...state, pagination: action.payload};

		default:
			return state;
	}
};

export default commentsReducer;