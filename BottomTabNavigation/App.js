import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Components
import Home from './src/components/screens/Home'
import About from './src/components/screens/About'
import Details from './src/components/screens/Details'

export default function App() {
    const Tab = createBottomTabNavigator()
        return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route })=> ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: '#000',
                tabBarIcon: ({ focused, color, size })=>(
                    <Image style={styles.image} source={require('./src/assets/icons/home.png')} />
                )
            })}>
                <Tab.Screen options={{ tabBarBadge: 3 }} name="Home" component={Home} />
                <Tab.Screen name="About" component={About} />
                <Tab.Screen name="Details" component={Details} />
            </Tab.Navigator>
        </NavigationContainer>
        )
}

const styles = StyleSheet.create({
    image: {
        width: 22,
        height: 22,
    },
})