import {
	FETCH_POST,
	FETCH_POST_REJECTED,
	FETCH_POST_FULFILLED,
	GHANGE_POST
} from "./actions_types";

import axios from "axios";
import errors from "../../utilities/errors";
import {isNumInt} from "../../utilities/checks";

export function changePost (sourceData) {
	return {
		type: GHANGE_POST,
		payload: sourceData
	}
}

export function fetchPost (id) {
	try {
		if (isNumInt({id})) {
			return function (dispatch) {
				dispatch({type: FETCH_POST});

				axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
					timeout: 10000
				})
					.then(
						response => {
							dispatch ({
								type: FETCH_POST_FULFILLED,
								payload: response.data
							})
						},
						error => {
							errors('isGet', error);
							dispatch ({
								type: FETCH_POST_REJECTED,
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

