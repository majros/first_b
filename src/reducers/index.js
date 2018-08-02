import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import locale from './locale';

export default combineReducers({
	locale,
	router: routerReducer,
})