import { ADD_EVENT, DELETE_EVENT, LOAD_EVENTS } from '../actions/events.action'
import Event from '../../models/Event'

const initialState = {
    events: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_EVENT:
            const {payload} = action
            const newEvent = new Event(
                payload.id.toString(), 
                payload.title, 
                payload.description, 
                payload.image,
                payload.address,
                payload.coords.latitude,
                payload.coords.longitude,
            );
            
            return {...state, events: [...state.events, newEvent] };
        case LOAD_EVENTS:
            const newArr = action.payload.map(item => new Event(
                item.id.toString(),
                item.title, 
                item.description, 
                item.image,
                item.address,
                item.lat, 
                item.lng,
            ))
            return {...state, events: newArr};
        case DELETE_EVENT:
            const newEvents = state.events.filter((event) => event.id !== action.payload)
            return {
                ...state, 
                events: newEvents,
                };
        default:
            return state;
    }
}
