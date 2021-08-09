import React, { useLayoutEffect, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Card, EventItem, HeaderButton, ListPlaceHolder } from '../../components'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import { loadEvents } from '../../store/actions/events.action'
import { COLORS } from '../../constants'
import { setLocation } from '../../store/actions/location.action';

const renderItem = (dispatch, item, navigation) => {
    
    return(
    <Card key={item.id}>
        <EventItem 
            image={item.image} 
            onSelect={() => onHandlerSelect(dispatch, item, navigation)}
            title={item.title}
        />
    </Card>
)}

const onHandlerSelect = (dispatch, item, navigation) => {
    const location = {
        latitude: item.latitude,
        longitude: item.longitude,
    }
    dispatch(setLocation(location))
    navigation.navigate('Detalle',{item: item})
}

const PlaceListScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.events)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='+'
                        iconName='add-circle'
                        color={COLORS.PRIMARY}
                        onPress={() => navigation.push('Nuevo')}
                    />
                </HeaderButtons>
            )
        })
    })
    useEffect(()=>{
        dispatch(loadEvents())
    },[])

    return (
        <FlatList 
        data={events}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListPlaceHolder}
        renderItem={itemData => renderItem(dispatch, itemData.item, navigation)}
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
