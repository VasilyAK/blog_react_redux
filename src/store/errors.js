function errors (type, params) {
	switch (type) {
		case 'isInt':
			console.error('Parameter "id" is not integer');
			break;

		case 'isNum':
			console.error('Parameter "id" is not a number');
			break;

		case 'isGet':
			if (params.response) {
				console.error(params.response.data);
				console.error(params.response.status);
				console.error(params.response.headers);
			} else if (params.request) {
				console.error(params.request);
			} else {
				console.error('Error', params.message);
			}
			console.error(params.config);
			break;

		default:
			break;
	}
}

export default errors;