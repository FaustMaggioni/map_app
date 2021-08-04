import { ADD_EVENT, LOAD_EVENTS } from '../actions/events.action'
import Event from '../../models/Event'

const initialState = {
    events: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_EVENT:
            const {payload} = action
            console.log('action', payload.image)
            const newEvent = new Event(
                payload.id.toString(), 
                payload.title, 
                payload.description, 
                payload.image,
            );
            return {...state, events: [...state.events, newEvent] };ç
        case LOAD_EVENTS:
            console.log("load")
            return {...state, events:
                action.payload.map(item => new Event(
                    item.id.toString(),
                    item.title, 
                    item.description, 
                    item.image,
                ))};
        default:
            return state;
    }
}