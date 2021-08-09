import * as FileSystem from 'expo-file-system';
import { deleteEvent, insertEvent, fetchEvents } from '../../db';
import { MAP } from '../../constants';

export const ADD_EVENT = 'ADD_EVENT';
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';

export const addEvent = (event) => {
    return async dispatch => {
        const { title, description, image, location } = event

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAP.API_MAP_KEY}`);
        if(!response.ok) throw new Error('[RESPONDE] Algo mal ha sucedido');

        const resData = await response.json();
        if(!resData.results) throw new Error('[GEOCODE] Algo mal ha sucedido');

        const address = resData.results[0].formatted_address;

        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })
        const result = await insertEvent(
            title,
            description,
            Path,
            address,
            location.latitude,
            location.longitude,
        )
        dispatch({
            type: ADD_EVENT, 
            payload: {
                ...event, 
                address: address, 
                coords:{
                    latitude: location.latitude,
                    longitude: location.longitude,
                },
                id: result.insertId, 
                image: Path
                }
            });
        } catch (error) {
            console.log('errorrrr: ', error);
            throw error;
        }
    }
}

export const loadEvents = () => {
    return async dispatch => {
        try {
            const result = await fetchEvents();
            dispatch({
                type: LOAD_EVENTS,
                payload: result.rows._array,
            })
        } catch (error) {
            console.log('error en loadEvents: ', error)
        }
    }
}

export const removeEvent = (id) => {
    return async dispatch => {
        try {
            await deleteEvent(id);
            dispatch({
                type: DELETE_EVENT,
                payload: id,
            });
        } catch (error) {
            console.log('error al borrar: ',error)
        }
    }
}