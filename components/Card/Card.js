import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import {COLORS} from '../../constants'

const Card = ({additionalStyles = {}, children}) =>{
    return(
    <View style={[styles.card, additionalStyles]}>
        {children}
    </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderColor: COLORS.SECONDARY,
        borderWidth: 1,
        borderRadius: 8,
        height: 200,
        marginVertical: 10,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default Card