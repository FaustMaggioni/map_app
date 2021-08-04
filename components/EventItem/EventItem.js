import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native'

const EventItem = ({address,image,title,onSelect}) => {
    console.log("EventItem: ",image)
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
                <Text> {title} </Text>
                <Text> {address} </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        height: '100%',
        width: '100%',
    },
})

export default EventItem
