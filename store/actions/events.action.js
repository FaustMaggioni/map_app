import * as FileSystem from 'expo-file-system';
import { insertEvent } from '../../db'

export const ADD_EVENT = 'ADD_EVENT';

export const addEvent = (event) => {
    console.log('event: ',event.image)
    return async dispatch => {
        const { title, description, image } = event
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName;
        console.log('path: ',Path)
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
            console.log(error.message);
            throw error;
        }
    }
}