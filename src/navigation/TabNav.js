import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import RootNavigation from './RootNavigation';
import Profile from '../screens/Profile';
import Contact from '../screens/Contact';


const Tab = createBottomTabNavigator();



const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen options={{title:"", tabBarIcon: () => <AntDesign name="home" size={24} color="black" />}} name="Home" component={RootNavigation}/>
        <Tab.Screen options={{title:"", tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }} name="Perfil" component={Profile}/>
        <Tab.Screen options={{title:"", tabBarIcon: () => <MaterialIcons name="contact-mail" size={24} color="black" />}} name="Contacto" component={Contact} />
    </Tab.Navigator>
  )
}

export default TabNav