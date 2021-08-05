import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Map View </Text>
            <Text style={styles.prox}> Proximamente... </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.ACCENT,
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    text:{
        fontSize: 30,
        fontWeight: '300',
        marginVertical: 10,
    },
    prox:{
        fontWeight: 'bold',
    },
})

export default MapScreen
