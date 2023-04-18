import React from 'react'

// raect-navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// vector icons
import Ionic from 'react-native-vector-icons/Ionicons'

// screens
import Home from './src/components/screens/Home'
import Search from './src/components/screens/Search'
import Reels from './src/components/screens/Reels'
import Activity from './src/components/screens/Activity'
import Profile from './src/components/screens/Profile'
import Status from './src/components/screens/Status'

// navigator objects
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
    const BottomTabNavigator = () => (
        <Tab.Navigator 
            screenOptions={({ route })=> ({
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarStlyle: {
                    height: 50,
                },
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName
                    size = 30
                    if(route.name === 'Home'){
                        iconName = focused ? 'home-sharp' : 'home-outline'
                    }else if(route.name === 'Search'){
                        size = focused ? size + 8 : size + 2
                        iconName = focused ? 'search' : 'ios-search-outline'
                    }else if(route.name === 'Reels'){
                        iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline'
                    }else if(route.name === 'Activity'){
                        iconName = focused ? 'ios-heart' : 'ios-heart-outline'
                    }else{
                        iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline'
                    }

                    return <Ionic name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
                <Stack.Screen name="Status" component={Status} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}