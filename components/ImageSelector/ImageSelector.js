import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {COLORS} from '../../constants'

const ImageSelector = ({onImage}) => {
    const [pickedUri, setUri] = useState()

    const verifyPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if(status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos para usar la cámara desde esta app',
                [{ text: 'OK'}]
            )
            return false
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOK = await verifyPermissions()
        if(!isCameraOK) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        })
        const { uri } = image
        console.log(uri)
        setUri(uri);
        onImage(uri);
    }

    return (
        <View>
            <View>
                {!pickedUri ? (
                    <Text> Selecciona una imagen! </Text>
                ):(
                    <Image
                        style={styles.image}
                        source={{uri: pickedUri}}
                        resizeMode='cover'
                    />
                )}
            </View>
            <Button
                title='Tomar foto'
                color={COLORS.VIOLET}
                onPress={handlerTakeImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
    },
})

export default ImageSelector
