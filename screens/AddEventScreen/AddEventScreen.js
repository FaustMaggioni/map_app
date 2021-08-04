import React, { useState, useReducer } from 'react';
import { Button, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../constants';
import { ADD_EVENT, addEvent } from '../../store/actions/events.action';
import { ImageSelector, LocationPicker } from '../../components'

const initialState = {
    title: '',
    description: '',
    image: '',
}
const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TITLE":
            return {...state, title: action.payload};
        case "ADD_DESCRIPTION":
            return {...state, description: action.payload};
        case "ADD_IMAGE":
            return {...state, image: action.payload};
        case "CLEAN_REDUCER":
            return initialState;
        default: 
            return state;
    };
}

const addTitle = (title) => ({
    type: "ADD_TITLE",
    payload: title,
})
const addDescription = (description) => ({
    type: "ADD_DESCRIPTION",
    payload: description,
})
const addImage = (image) => ({
    type: "ADD_IMAGE",
    payload: image,
})
const cleanReducer = () => ({
    type: "CLEAN_REDUCER",
})

const AddEventScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [state, localDispatch] = useReducer(reducer, initialState);

    const onHandlerTitle = title => localDispatch(addTitle(title));
    const onHandlerDescription = description => localDispatch(addDescription(description));
    const onHandlerImageTaken = path => localDispatch(addImage(path));

    const onHandlerSave = () => {
        dispatch(addEvent(state));
        localDispatch(cleanReducer());
        navigation.goBack();
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
                placeholder='Descripción'
                value={state.description}
                style={styles.input}/>
            <ImageSelector onImage={onHandlerImageTaken}/>
            <LocationPicker/>
            <Button color={COLORS.SECONDARY} title="Confirmar evento" onPress={onHandlerSave}/>
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
        borderColor: COLORS.ACCENT,
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        marginVertical: 5,
        width: '100%',
    },
    text:{
        color: COLORS.ACCENT,
        fontSize: 30,
        textAlign: 'center',
    }

})

export default AddEventScreen
