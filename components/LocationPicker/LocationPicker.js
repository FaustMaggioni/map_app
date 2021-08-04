import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, Button, Text, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from '../MapPreview';
import { COLORS } from '../../constants'

const LocationPicker = props => {
    const [isFetching, setIsFeching] = useState(false);
    const [pickedLocation, setLocation] = useState();

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
    },[]);

    const getLocationHandler = async () => {
        try {
            setIsFeching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000,
            });

            setLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });

        } catch (error) {
            Alert.alert('No se pudo obtener ubicación', [{ text: 'OK' }]);
        } finally {
            setIsFeching(false);
        };
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview}>
                {isFetching ? (
                    <ActivityIndicator size='large' color={COLORS.ACCENT}/>
                ) : (
                    <Text> Próximamente... </Text>
                )}
            </MapPreview>
            <Button style={styles.btn} title='Obtener ubicación usuario' onPress={getLocationHandler} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default LocationPicker
