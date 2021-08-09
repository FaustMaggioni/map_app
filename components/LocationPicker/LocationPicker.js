import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, Button, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from '../MapPreview';
import { COLORS } from '../../constants'
import { useDispatch } from 'react-redux';
import { setLocation } from '../../store/actions/location.action';

const fetchLocation = async (maxTime) => {
    const location = await Location.getCurrentPositionAsync({
        timeout: maxTime,
    });
    return location
} 

const LocationPicker = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        ( async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            
            if( status !== 'granted') {
                Alert.alert(
                    'Permisos insuficientes',
                    [{ text: 'OK' }],
                );
            }
        })();
        return;
    },[]);

    const handlerPickOnMap = async () => {
        try {
            const location = await fetchLocation(1000);
            dispatch(
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
        );}
        catch(e) {
            console.log(e);
        }
        finally{
            navigation.push('Map', {allowsEditing: true});
        }
    }

    const handlerViewMap = () => {
        navigation.navigate('Map', {allowsEditing: true});
    }

    const getLocationHandler = async () => {
        try {
            const location = await fetchLocation(1000);
            dispatch(
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                })
            );
        } catch (error) {
            Alert.alert('No se pudo obtener ubicación', [{ text: 'OK' }]);
        }
    }

    return (
        <View style={[styles.locationPicker]}>
            <MapPreview onPress={handlerViewMap}/>
            <Button style={styles.btn} title='Obtener ubicación usuario' onPress={getLocationHandler} />
            <Button title='Elegir desde el mapa' onPress={handlerPickOnMap}/>
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        margin: 5,
        shadowColor: "#00000f",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 15,
    }
})

export default LocationPicker
