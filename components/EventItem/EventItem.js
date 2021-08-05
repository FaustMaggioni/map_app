import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { COLORS } from '../../constants'

const EventItem = ({image,title,onSelect}) => {
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
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        backgroundColor: COLORS.VIOLET,
        borderRadius: 8,
        height: '100%',
        justifyContent: 'flex-end',
        width: '100%',
    },
    text:{
        fontSize: 30,
    },
    textContainer:{
        alignItems: 'center',
        backgroundColor: 'rgba(255,205,255,0.3)',
        height: 40,
        justifyContent: 'center',
    }
})

export default EventItem
