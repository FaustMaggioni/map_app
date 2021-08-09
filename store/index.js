import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// reducers
import EventsReducer from './reducers/event.reducer';
import LocationReducer from './reducers/location.reducer';
const RootReducer = combineReducers({
    events: EventsReducer,
    location: LocationReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))

