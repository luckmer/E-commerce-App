import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './utils/Store'

ReactDOM.render(
    <Router>
        <Provider store={Store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'),
)

reportWebVitals()
