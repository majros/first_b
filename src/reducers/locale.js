import {CHANGE_LOCALE} from "../actions/types";
import { messages } from "../dictionary/messages";

const initialLocale = (navigator.languages && navigator.languages[0])
	|| navigator.language
	|| navigator.userLanguage
	|| 'ru-RU';

// need add check if locale exits in your dictionary.
// because in my chrome, locale equal just "en" and this locale doesn't exists in your dictionary, only "en-US"
// if locale doesn't exits fallback to "ru-RU", it's enough for simple usage, but in future need add suffix or something else
const initState = {
	currentLanguage: messages[initialLocale] ? initialLocale : 'ru-RU'
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