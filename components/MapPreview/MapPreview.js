import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { API_MAP_KEY } from '../../constants'

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

const MapPreview = () => (<Text> MapPreview </Text>)

export default MapPreview
