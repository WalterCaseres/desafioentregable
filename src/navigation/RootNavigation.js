import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'
import Products from '../screens/Products'
import Header from '../components/Header'

const Stack = createNativeStackNavigator ()

const RootNavigation = () => {
  return (
    <Stack.Navigator 
    initialRouteName='home'
    screenOptions={{headerShown: false,
    }}>
    
    <Stack.Screen component={Home} name="home"/>
    <Stack.Screen component={Products} name="productos"/>
    <Stack.Screen component={ProductDetail} name="detalles"/>

    </Stack.Navigator>
  )
}

export default RootNavigation