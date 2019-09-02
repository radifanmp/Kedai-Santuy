import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import menu from '../_reducers/menu'
import categori from '../_reducers/categori'
import transaction from '../_reducers/transaction'
import order from '../_reducers/order'

// this global states
const reducers = combineReducers({
    menu,categori,transaction,order
})
export default store = createStore(
    reducers,
    applyMiddleware(promise, logger)
)  