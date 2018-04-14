import React from 'react'
import ReactDOM from 'react-dom'
//imports para integracao do redux
//apply middleware para tratar promisses
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

//para chamar varias actions
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'

//reducers
import reducers from './main/reducers'

//chrome addon
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    //esse App é o retorno do componente
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))