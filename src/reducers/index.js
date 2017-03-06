import { combineReducers } from 'redux'
import initialAdd from './initialAdd'
import contacts from './contacts'

const todoApp = combineReducers({
	contacts,
	initialAdd
});

export default todoApp
