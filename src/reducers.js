import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT, ADD_COUNTER } from './actions'

function counters(state = [], action) {
	switch (action.type) {
		case ADD_COUNTER:
			return [
				...state,
				0
			]
		case INCREMENT:
			return state.map((counter, id) => {
				if (id === action.id) {
					return counter + 1
				}
				return counter
			})
		case DECREMENT:
			return state.map((counter, id) => {
				if (id === action.id) {
					return counter - 1
				}
				return counter
			})
		default:
			return state
	}
}

const reducer = combineReducers({
	counters
})

export default reducer
