import React, { useLayoutEffect, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Card, EventItem, HeaderButton} from '../../components'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import { loadEvents } from '../../store/actions/events.action'
import { COLORS } from '../../constants'

const renderItem = (item,navigation) => {
    return(
    <Card key={item.id}>
        <EventItem 
            image={item.image} 
            onSelect={() => navigation.navigate('Detalle',{item: item})}
            title={item.title}
        />
    </Card>
)}

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
        renderItem={itemData => renderItem(itemData.item,navigation)}
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
