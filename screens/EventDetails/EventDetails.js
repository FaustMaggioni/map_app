import React from 'react'
import { ScrollView, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../../constants'
import { MapPreview } from '../../components'

const EventDetails = ({route}) => {
    console.log('route:', route.params)
    const {title,description, image} = route.params.item
    console.log('title:', title)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> {title} </Text>
            <Image source={{uri:image}} style={styles.image} resizeMode='cover'/>
            <Text style={styles.description}> {description} </Text>
            <MapPreview/>
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
