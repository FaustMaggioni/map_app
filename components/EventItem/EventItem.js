import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { COLORS } from '../../constants'

const EventItem = ({address,image,title,onSelect}) => {
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={styles.container}
        >
            <ImageBackground
                imageStyle={{borderRadius: 8}} 
                source={{uri:image}}
                style={styles.image}
                resizeMode='cover'
            >
                <View style={styles.textContainer}>
                    <Text styles={styles.text}> {title} </Text>
                    <Text> {address} </Text>
                </View>
                {!image && (
                    <Text> Nada para ver por acá...</Text>
                )}
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.VIOLET,
    },
    text:{
        fontWeight: 'bold',
    },
    textContainer:{
        backgroundColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})

export default EventItem
