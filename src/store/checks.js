import errors from "./errors";

export function isNum (num) {
	if (typeof num === 'number') {
		return true
	} else {
		errors('isNum');
		return false
	}
}

export function isNumInt (num) {
	if (typeof num === 'number'){
		if (parseInt(num) === parseFloat(num)) {
			return true
		} else {
			errors('isInt');
			return false
		}
	} else {
		errors('isNum');
		return false
	}
}