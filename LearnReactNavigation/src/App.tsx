import { View, Text } from 'react-native'
import React from 'react'

// navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// components (screens)
import Home from './components/screens/Home'
import Details from './components/screens/Details'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                    name='Home'
                    component={Home}
                    options={{
                        title: 'Trending Products'
                    }}
                />
                <Stack.Screen 
                    name='Details'
                    component={Details}
                    options={{
                        title: 'Products Details'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App