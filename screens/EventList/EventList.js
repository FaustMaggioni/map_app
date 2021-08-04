import React, { useLayoutEffect } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { Card, EventItem, HeaderButton} from '../../components'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

const renderItem = (itemData,navigation) => {
    console.log(itemData)
    return(
    <Card>
        <EventItem 
            address={null}
            image={itemData.item.image} 
            onSelect={() => navigation.push('Detalle')}
            title={itemData.item.title}
        />
    </Card>
)}

const PlaceListScreen = ({navigation}) => {
    const events = useSelector(state => state.events.events)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='+'
                        iconName='add-circle'
                        onPress={() => navigation.push('Nuevo')}
                    />
                </HeaderButtons>
            )
        })
    })
    return (
        <FlatList 
        data={events}
        keyExtractor={item => item.id}
        renderItem={itemData => renderItem(itemData,navigation)}
        style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
    }
})

export default PlaceListScreen
