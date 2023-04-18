import { View, Text, StatusBar, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionic from 'react-native-vector-icons/Ionicons'

// components
import Stories from '../includes/Stories'
import Posts from '../includes/Posts'

export default function Home() {
    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <StatusBar backgroundColor="#fff" barStyle="dark-content" animated />
            <View 
                style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 15
                }}
            >
                <FontAwesome name='plus-square-o' color="#000" style={{fontSize: 24}} />
                <Text 
                    style={{
                        fontFamily: 'Lobster-Regular',
                        fontWeight: '500',
                        fontSize: 25,
                        color: '#000'
                    }}
                >
                    Instagram
                </Text>
                <Feather name='navigation' color="#000" style={{fontSize: 24}} />
            </View>

            <ScrollView>
                <Stories />
                <Posts />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}>
                    <Ionic name="ios-reload-circle-sharp" style={{
                        fontSize: 60,
                        opacity: 0.2,
                        color: '#000',
                    }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}