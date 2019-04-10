import { combineReducers } from 'redux';
import phones from './phone';
import basket from './basket';

export default combineReducers({
	phones,
	basket
});
