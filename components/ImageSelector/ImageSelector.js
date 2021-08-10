import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {COLORS} from '../../constants'

const verifyCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    return verifyPermissions(status)
}
const verifyGalleryPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return verifyPermissions(status)
}
const verifyPermissions = (status) => {
    if(status !== 'granted'){
        Alert.alert(
            'Permisos insuficientes',
            'Necesita dar permisos para esta función',
            [{ text: 'OK'}]
        )
        return false
    }
    return true;
}
const takeImage = async () => {
    const isCameraOK = await verifyCameraPermissions()
    if(!isCameraOK) return;
    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.8,
    })
    const { uri } = image
    return uri; 
}

const pickImage = async () => {
    const isGalleryOk = await verifyGalleryPermissions();
    if(!isGalleryOk) return;
    const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
    });
    const { uri } = image;
    return uri; 
}

const ImageSelector = ({onImage}) => {
    const [pickedUri, setUri] = useState()

    const handlerTakeImage = async () => {
        const uri = await takeImage()
        handlerSetUri(uri)
    }

    const handlerPickImage = async () => {
        const uri = await pickImage();
        handlerSetUri(uri);
    }

    const handlerSetUri = (uri) =>{
        setUri(uri);
        onImage(uri);
    }

    return (
        <View style={styles.container}>
            <View>
                {pickedUri ? (
                    <Image
                    style={styles.image}
                    source={{uri: pickedUri}}
                />
                ):(
                    <Text style={styles.selectText}> Selecciona una imagen! </Text>
                )}
            </View>
            <Button title='Tomar foto' color={COLORS.WHITE} onPress={handlerTakeImage}/>
            <Button title='Subir foto' color={COLORS.BLACK} onPress={handlerPickImage}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3.27,
        elevation: 10,
        marginVertical: 10,
    },
    image: {
        alignSelf: 'center',
        borderRadius: 10,
        height: 300,
        resizeMode: 'cover',
        width: '100%',
    },
    selectText:{
        backgroundColor: 'rgb(255, 255, 255)',
        color: COLORS.PRIMARY,
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
    }
})

export default ImageSelector
