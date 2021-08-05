import React from 'react';
import { Button, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants';
import { MapPreview } from '../../components';
import { removeEvent } from '../../store/actions/events.action';
import { useDispatch } from 'react-redux';

const EventDetails = ({navigation, route}) => {
    const dispatch = useDispatch();

    const {title,description, image, id} = route.params.item;

    const handlerSelectMap = () => {
        navigation.navigate('Map')
    }

    const handlerDeleteEvent = () => {
        console.log('ID: !!!!!!: ', id)
        dispatch(removeEvent(id));
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> {title} </Text>
            <Image source={{uri:image}} style={styles.image} resizeMode='cover'/>
            <Text style={styles.description}> {description} </Text>
            <MapPreview onPress={handlerSelectMap}/>
            <Button color='red' title='BORRAR' onPress={handlerDeleteEvent}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    description:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    image: {
        alignSelf: 'center',
        borderRadius: 10,
        height: 300,
        marginVertical: 10,
        width: '100%',
    },
    title:{
        color: COLORS.SECONDARY,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default EventDetails
