import React from 'react'
import { NavigationContainer } from "@react-navigation/native";

// stacks
import EventNavigator from './EventNavigator'

export default () => (
    <NavigationContainer>
        <EventNavigator />
    </NavigationContainer>
)