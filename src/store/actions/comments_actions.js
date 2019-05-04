import {
	ADD_COMMENT,
	DELETE_COMMENT,
	FETCH_COMMENTS,
	FETCH_COMMENTS_REJECTED,
	FETCH_COMMENTS_FULFILLED,
	RESET_ATTENTION_COMMENTS
} from "./actions_types";

import axios from "axios";
import errors from "../../utilities/errors";
import {isNumInt} from "../../utilities/checks";

export function addComment (newComment) {
	return {
		type: ADD_COMMENT,
		payload: newComment
	}
}

export function delComment (id) {
	try {
		if (isNumInt({id})) {
			return {
				type: DELETE_COMMENT,
				payload: id
			}
		}
	} catch (e) {
		throw new Error(e.message);
	}
}

export function fetchComments () {
	return function (dispatch) {
		dispatch({type: FETCH_COMMENTS});

		axios.get(`https://jsonplaceholder.typicode.com/comments`, {
			timeout: 10000
		})
			.then(
				response => {
					dispatch({
						type: FETCH_COMMENTS_FULFILLED,
						payload: response.data
					});
				},
				error => {
					errors('isGet', error);
					dispatch({
						type: FETCH_COMMENTS_REJECTED,
						payload: error
					})
				}
			);
	}
}

export function resetAttentionComment () {
	return {
		type: RESET_ATTENTION_COMMENTS,
		payload: null
	}
}