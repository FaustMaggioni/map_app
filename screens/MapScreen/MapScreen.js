import React, { useState, useCallback, useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { COLORS } from '../../constants';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButton } from '../../components';
import { setLocation } from '../../store/actions/location.action';

const MapScreen = ({route, navigation}) => {
    const dispatch = useDispatch();
    const selectedLocation = useSelector(state => state.location);
    const allowsEditing = route.params?.allowsEditing;
    const region = {
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) return;

        navigation.navigate('Nuevo');
    }, [selectedLocation]);

    const selectedLocationHandler = event => {
        if(allowsEditing) {
        dispatch(
            setLocation({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
            })
        );
    }}

    useLayoutEffect(() => {
        if (allowsEditing) {navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        color= {COLORS.ACCENT}
                        title= "Guardar"
                        iconName= "save-outline"
                        onPress= {savePickedLocationHandler}
                    />
                </HeaderButtons>
            )
        })}
    }, [navigation]);

    let markerCoordinates;
    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude
        };
    }

    return (
        <MapView initialRegion={region} style={styles.map} onPress={selectedLocationHandler}>
            {markerCoordinates && (
                <Marker title='Ubicación seleccionada' coordinate={markerCoordinates} />
            )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        flex: 1,
    },
})

export default MapScreen
