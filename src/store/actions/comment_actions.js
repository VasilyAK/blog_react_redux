import {
	FETCH_COMMENT,
	FETCH_COMMENT_REJECTED,
	FETCH_COMMENT_FULFILLED,
	GHANGE_COMMENT
} from "./actions_types";

import axios from "axios";
import errors from "../../utilities/errors";
import {isNumInt} from "../../utilities/checks";

export function changeComment (sourceData) {
	return {
		type: GHANGE_COMMENT,
		payload: sourceData
	}
}

export function fetchComment (id) {
	try {
		if (isNumInt({id})) {
			return function (dispatch) {
				dispatch({type: FETCH_COMMENT});

				axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`, {
					timeout: 10000
				})
					.then(
						response => {
							dispatch ({
								type: FETCH_COMMENT_FULFILLED,
								payload: response.data
							})
						},
						error => {
							errors('isGet', error);
							dispatch ({
								type: FETCH_COMMENT_REJECTED,
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

