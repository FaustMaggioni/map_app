import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import EventsReducer from './reducers/event.reducer'

const RootReducer = combineReducers({
    events: EventsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))

