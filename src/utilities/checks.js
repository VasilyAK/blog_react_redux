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
	const numName = Object.keys(num)[0];
	const numVal = num[numName];
	try {
		if (num instanceof Object){
			if (typeof numVal === 'number'){
				if (parseInt(numVal) === parseFloat(numVal)) {
					return true
				} else {
					errors('isInt', numName);
					return false
				}
			} else {
				errors('isNum', numName);
				return false
			}
		} else {
			console.error("Function isNumInt have got wrong parameters")
		}
	} catch (e) {
		console.error(e.message)
	}
}