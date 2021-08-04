import {ADD_EVENT} from '../actions/events.action'
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
            return {...state, events: [...state.events, newEvent] };
        default:
            return state;
    }
}