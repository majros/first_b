import { CHANGE_LOCALE } from "../actions/types";

const initialLocale = (navigator.languages && navigator.languages[0])
	|| navigator.language
	|| navigator.userLanguage
	|| 'en-US';

const initState = {
	currentLanguage: initialLocale
};

export default (state = initState, action) => {
	switch (action.type) {
		case CHANGE_LOCALE:
			return Object.assign({}, {
				currentLanguage: action.payload,
			});
		default:
			return state;
	}
}