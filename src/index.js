import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

let store = createStore(reducer)

console.log(store.getState())

store.subscribe(() => {
	console.log(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)
