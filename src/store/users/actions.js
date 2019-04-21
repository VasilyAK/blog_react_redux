import {
	ADD_USER,
	DELETE_USER,
	FETCH_USERS,
	FETCH_USERS_REJECTED,
	FETCH_USERS_FULFILLED,
	RESET_ATTENTION_USERS
} from "../constants";

import axios from "axios";
import errors from "../errors";
import {isNumInt} from "../checks";

export function addUser (newUser) {
	return {
		type: ADD_USER,
		payload: newUser
	}
}

export function delUser (id) {
	try {
		if (isNumInt(id)) {
			return {
				type: DELETE_USER,
				payload: id
			}
		}
	} catch (e) {
		throw new Error(e.message);
	}
}

export function fetchUsers () {
	return function (dispatch) {
		dispatch({type: FETCH_USERS});

		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(
				response => {
					dispatch({
						type: FETCH_USERS_FULFILLED,
						payload: response.data
					});
				},
				error => {
					errors('isGet', error);
					dispatch({
						type: FETCH_USERS_REJECTED,
						payload: error.data
					})
				}
			);
	}
}

export function resetAttentionUser () {
	return {
		type: RESET_ATTENTION_USERS,
		payload: null
	}
}