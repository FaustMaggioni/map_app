import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { API_MAP_KEY, COLORS } from '../../constants'

/*const MapPreview = ({ location, additionalStyles, children }) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
    center=${location.lat},${location.lng}
    &zoom=1
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C 
    .......key=${API_MAP_KEY}`; 
    //Buscar url en google cloud Y CHEQUEAR
    return (
      <View>
          {location ? (
              <Image source={{uri: mapPreviewUrl}} />
          ) : children 
          }
      </View>  
    );
}*/

const MapPreview = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}> MapPreview (Proximamente) </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: COLORS.ACCENT,
        borderRadius: 10,
        justifyContent: "center",
        margin: 5,
    },
    text: {
        color: COLORS.WHITE,
        fontSize: 20,
        textAlign: "center",
        padding: 10,
    },
})
export default MapPreview
 