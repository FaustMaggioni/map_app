import React, { useReducer, useEffect } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../constants';
import { addEvent } from '../../store/actions/events.action';
import { ImageSelector, LocationPicker } from '../../components'
import { 
    addEventReducer, 
    initialState, 
    addTitle, 
    addDescription, 
    addImage, 
    setLocation, 
    cleanReducer } from './addEventReducer';

const AddEventScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [state, localDispatch] = useReducer(addEventReducer, initialState);
    const onHandlerTitle = title => localDispatch(addTitle(title));
    const onHandlerDescription = description => localDispatch(addDescription(description));
    const onHandlerImageTaken = path => localDispatch(addImage(path));
    const onHandlerLocationPicked = location => localDispatch(setLocation(location));
    const pickedLocation = useSelector(state => state.location);

    useEffect(()=>{
        if(pickedLocation) {
        onHandlerLocationPicked(pickedLocation);
        }
    },[pickedLocation])

    const onHandlerSave = () => {
        if(state.image && state.title && state.description && state.location) {
        dispatch(addEvent(state));
        localDispatch(cleanReducer());
        navigation.goBack();
        } else{
            alert('Debes completar todos los campos para guardar')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}> Ingrese los datos del evento </Text>
            
            <TextInput
                onChangeText={onHandlerTitle} 
                placeholder='Título'
                value={state.title}
                style={styles.input}/>
            <TextInput
                onChangeText={onHandlerDescription} 
                multiline
                numberOfLines={5}
                placeholder='Descripción'
                value={state.description}
                style={[styles.input,styles.inputDescription]}/>

            <ImageSelector onImage={onHandlerImageTaken}/>
            <LocationPicker navigation={navigation}/>
            <Button color={COLORS.BLACK} title="Confirmar evento" onPress={onHandlerSave}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    input:{
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.PRIMARY,
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        marginVertical: 5,
        width: '100%',
    },
    inputDescription:{
        height: 100,
    },
    text:{
        color: COLORS.BLACK,
        fontSize: 30,
        textAlign: 'center',
    }

})

export default AddEventScreen
