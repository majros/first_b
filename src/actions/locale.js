import * as types from './types';

export const changeLocale = (locale) => {
	return dispatch => {
		dispatch({
			type: types.CHANGE_LOCALE,
			payload: locale,
		})
	}
};