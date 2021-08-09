import { SET_LOCATION } from '../actions/location.action';

const initialState = {
    latitude: 0,
    longitude: 0,
}

const LocationReducer = ( state= initialState, action) => {
    switch(action.type) {
        case SET_LOCATION:
            return {...state, latitude: action.payload.latitude, longitude: action.payload.longitude};
        default:
            return state;
    }
}

export default LocationReducer;