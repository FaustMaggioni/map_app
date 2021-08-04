import React from 'react'
import { Platform } from 'react-native' 
import { createStackNavigator } from '@react-navigation/stack'

import { COLORS } from '../constants' 

// screens
import EventList from '../screens/EventList/EventList'
import EventDetails from '../screens/EventDetails/EventDetails'
import AddEventScreen from '../screens/AddEventScreen/AddEventScreen'
import MapScreen from '../screens/MapScreen/MapScreen'


const EventStack = createStackNavigator()

const EventNavigator = () => (
    <EventStack.Navigator
        initialRoute='Event'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.PRIMARY : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.PRIMARY,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <EventStack.Screen
            name="Event"
            component={EventList}
            options={{title: 'Eventos'}} 
        />
        <EventStack.Screen
            name="Detalle"
            component={EventDetails}
            options={{title: 'Detalle evento'}} 
        />
        <EventStack.Screen
            name="Nuevo"
            component={AddEventScreen}
            options={{title: 'Nuevo evento'}} 
        />
        <EventStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
    </EventStack.Navigator>
)


export default EventNavigator