import * as FileSystem from 'expo-file-system';
import { insertEvent, fetchEvents } from '../../db'

export const ADD_EVENT = 'ADD_EVENT';
export const LOAD_EVENTS = 'LOAD_EVENTS';

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
            console.log('PREVIO A FETCH')
            const result = await fetchEvents();
            console.log('FETCH EVENTS RESULT', result);
            dispatch({
                type: LOAD_EVENTS,
                payload: result.rows._array,
            })
        } catch (error) {
            console.log('error en loadEvents: ', error)
        }
    }
}