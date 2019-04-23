import {
	FETCH_USER,
	FETCH_USER_REJECTED,
	FETCH_USER_FULFILLED,
	GHANGE_USER
} from "../constants";

import axios from "axios";
import errors from "../errors";
import {isNumInt} from "../checks";

export function changeUser (sourceData) {
	return {
		type: GHANGE_USER,
		payload: sourceData
	}
}

export function fetchUser (id) {
	console.log(id);
	try {
		if (isNumInt(id)) {
			return function (dispatch) {
				dispatch({type: FETCH_USER});

				axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {
					timeout: 10000
				})
					.then(
						response => {
							dispatch ({
								type: FETCH_USER_FULFILLED,
								payload: response.data
							})
						},
						error => {
							errors('isGet', error);
							dispatch ({
								type: FETCH_USER_REJECTED,
								payload: error
							})
						}
					);
			}
		}
	} catch (e) {
		throw new Error(e.message);
	}
}

