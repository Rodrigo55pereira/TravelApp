import './gesture-handler'
import React from 'react'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import AttractionDetails from './src/screens/AttractionDetails'
import Gallery from './src/screens/Gallery'

const Stack = createStackNavigator()

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
}

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AttractionDetails' component={AttractionDetails}/>
        <Stack.Screen name='Gallery' component={Gallery}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
