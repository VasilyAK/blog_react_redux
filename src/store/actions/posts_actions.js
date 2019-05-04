import {
	ADD_POST,
	DELETE_POST,
	FETCH_POSTS,
	FETCH_POSTS_REJECTED,
	FETCH_POSTS_FULFILLED,
	RESET_ATTENTION_POSTS
} from "./actions_types";

import axios from "axios";
import errors from "../../utilities/errors";
import {isNumInt} from "../../utilities/checks";

export function addPost (newPost) {
	return {
		type: ADD_POST,
		payload: newPost
	}
}

export function delPost (id) {
	try {
		if (isNumInt({id})) {
			return {
				type: DELETE_POST,
				payload: id
			}
		}
	} catch (e) {
		throw new Error(e.message);
	}
}

export function fetchPosts () {
	return function (dispatch) {
		dispatch({type: FETCH_POSTS});

		axios.get(`https://jsonplaceholder.typicode.com/posts`, {
			timeout: 10000
		})
			.then(
				response => {
					dispatch({
						type: FETCH_POSTS_FULFILLED,
						payload: response.data
					});
				},
				error => {
					errors('isGet', error);
					dispatch({
						type: FETCH_POSTS_REJECTED,
						payload: error
					})
				}
			);
	}
}

export function resetAttentionPost () {
	return {
		type: RESET_ATTENTION_POSTS,
		payload: null
	}
}