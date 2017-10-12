import { createStore, combineReducers } from 'redux'
import { MapReducer } from 'fantasy-map'

const reducers = combineReducers({
    map: MapReducer,
})
const store = createStore(reducers)
export default store
