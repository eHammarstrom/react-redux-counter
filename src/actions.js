/*
 * Action Types
 */

export const ADD_COUNTER = 'ADD_COUNTER'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

/*
 * Action Creators
 */

export function increment(id) {
	return { type: INCREMENT, id }
}

export function decrement(id) {
	return { type: DECREMENT, id }
}

export function add() {
	return { type: ADD_COUNTER }
}
