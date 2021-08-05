import * as FileSystem from 'expo-file-system';
import { deleteEvent, insertEvent, fetchEvents } from '../../db'

export const ADD_EVENT = 'ADD_EVENT';
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';

export const addEvent = (event) => {
    return async dispatch => {
        const { title, description, image } = event
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
            'Address',
            13.4,
            10.7
        )

        dispatch({type: ADD_EVENT, payload: {...event, id: result.insertId, image: Path}});
        
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