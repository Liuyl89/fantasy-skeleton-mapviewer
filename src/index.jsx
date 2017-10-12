import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './app'
import './css/app.scss'
import { Provider } from 'react-redux'
import store from './store'

const $mountNode = $('<div class="app"></div>').appendTo(document.body)
const render = (NewApp) => {
    ReactDOM.render(
        (<Provider store={store}>
            <NewApp/>
        </Provider>),
        $mountNode[0])
}
render(App)
