import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import AddCounter from './containers/AddCounter'
import CounterListContainer from './containers/CounterListContainer'
import FooterContainer from './containers/FooterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to ReactRedux Counter</h2>
        </div>
				<AddCounter />
				<CounterListContainer />
				<FooterContainer />
      </div>
    )
  }
}

export default App
