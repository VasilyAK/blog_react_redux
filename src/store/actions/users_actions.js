import {
	ADD_USER,
	DELETE_USER,
	FETCH_USERS,
	FETCH_USERS_REJECTED,
	FETCH_USERS_FULFILLED,
	RESET_ATTENTION_USERS
} from "./actions_types";

import axios from "axios";
import errors from "../../utilities/errors";
import {isNumInt} from "../../utilities/checks";

export function addUser (newUser) {
	return {
		type: ADD_USER,
		payload: newUser
	}
}

export function delUser (id) {
	try {
		if (isNumInt({id})) {
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

		axios.get(`https://jsonplaceholder.typicode.com/users`, {
			timeout: 10000
		})
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
						payload: error
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