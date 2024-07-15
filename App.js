import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useEffect}from 'react'
import bai12 from './screens/bai12'
import bai11 from './screens/bai11'
import bai13 from './screens/bai13'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import home from './screens/home'
import Splash from './screens/Splash'

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Home' component={home} />
      <Stack.Screen name='Bai1' component={bai11} />
      <Stack.Screen name='Bai2' component={bai12} />
      <Stack.Screen name='Bai3' component={bai13} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})