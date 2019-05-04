import {isNumInt} from "../../utilities/checks";

// функция принимает active и counts
export function updatePagination ({...pagination}) {
	try {
		if (isNumInt({active: pagination.active})) {
			let from = pagination.active - Math.ceil((pagination.counts.countOfPaginationItems - 1) / 2);
			let to = pagination.active + Math.ceil((pagination.counts.countOfPaginationItems - 1) / 2);

			if (from < 1) {
				from = 1;
				to = pagination.counts.countOfPaginationItems;
			}

			if (to > pagination.counts.countOfPages) {
				from = pagination.counts.countOfPages - pagination.counts.countOfPaginationItems + 1;
				to = pagination.counts.countOfPages;
			}

			return ({
				type: `SET_PAGINATION_${pagination.category}`,
				payload: {
					from,
					to,
					active: pagination.active,
					counts: pagination.counts,
					update: false
				}
			});
		}
	} catch (e) {
		throw new Error(e.message);
	}
}


export function setPagination (category, itemsLengtn, countOfItemsOnPage, countOfPaginationItems, active) {
	try {
		if (
			isNumInt({itemsLengtn})
			&& isNumInt({countOfItemsOnPage})
			&& isNumInt({countOfPaginationItems})
			&& isNumInt({active})
		) {
			let countOfPages = Math.ceil((itemsLengtn) / countOfItemsOnPage);

			if (active > countOfPages && countOfPages >0) {
				active = countOfPages;
			}

			if (countOfPages < countOfPaginationItems) {
				countOfPaginationItems = countOfPages;
			}

			return updatePagination({
				category,
				active,
				counts: {
					countOfPages,
					countOfItemsOnPage,
					countOfPaginationItems
				}
			})
		}
	} catch (e) {
		throw new Error(e.message);
	}
}