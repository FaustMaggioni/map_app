import React from 'react';
import { Button, ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { COLORS } from '../../constants';
import { MapPreview } from '../../components';
import { removeEvent } from '../../store/actions/events.action';
import { useDispatch } from 'react-redux';

const EventDetails = ({navigation, route}) => {
    const dispatch = useDispatch();
    const { address, title, description, image, id } = route.params.item;
    const handlerSelectMap = () => {
        navigation.navigate('Map')
    }

    const handlerDeleteEvent = () => {
        dispatch(removeEvent(id));
        navigation.goBack();
    }
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainInfo}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.address}> {address} </Text>
            </View>
            <View style={styles.additionalInfo}>
                <Image source={{uri:image}} style={styles.image} resizeMode='cover'/> 
                <Text style={styles.description}> {description} </Text>
                <MapPreview buttonTitle='Ver en mapa' onPress={handlerSelectMap}/>
                <Button color='red' title='BORRAR' onPress={handlerDeleteEvent}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    address: {
        textAlign: 'center',
        fontSize: 14,
    },
    additionalInfo:{
        margin: 10,
    },
    container: {
        flex: 1,
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
    mainInfo: {
        backgroundColor: COLORS.WHITE,
        width: '100%',
    },
    title:{
        color: COLORS.SECONDARY,
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
    }
})

export default EventDetails
