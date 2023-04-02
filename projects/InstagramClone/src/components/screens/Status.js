import { View, Text, StatusBar, SafeAreaView, 
    Image, TouchableOpacity, TextInput, Animated
} from 'react-native'

import React, { useEffect, useState } from 'react'

// icons
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export default function Status({ route, navigation }) {
    const { name, authorImage } = route.params

    const [progress] = useState(new Animated.Value(0))

    useEffect(()=>{
        let timer = setTimeout(()=>{
            navigation.goBack()
        }, 5000)

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false
        }).start()
        return ()=> clearTimeout(timer)
    }, [])

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })
    
    return (
        <SafeAreaView style={{
            backgroundColor: '#000',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <View style={{
                width: '95%',
                height: 3,
                borderWidth: 1,
                backgroundColor: 'gray',
                position: 'absolute',
                top: 18,
            }}>
                <Animated.View style={{
                    height: '100%',
                    width: progressAnimation,
                    backgroundColor: '#fff',
                }}></Animated.View>
            </View>

            {/* profile_image */}
            <View style={{
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: 12,
                left: 0,
                width: '90%',
            }}>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={authorImage} style={{
                        resizeMode: 'cover',
                        width: '95%',
                        height: '95%',
                        borderRadius: 92 / 2,
                        backgroundColor: 'orange',
                    }} />
                </View>

                {/* user_details and close */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        paddingLeft: 10,
                    }}>{name}</Text>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Ionic name="close" style={{
                            fontSize: 20,
                            color: '#fff',
                            opacity: 0.6,
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Story */}
            <Image source={authorImage} style={{
                width: '100%',
                height: 600,
                position: 'absolute',
            }} />

            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginVertical: 10,
                width: '100%',
            }}>
                <TextInput 
                    placeholder="send message" 
                    placeholderTextColor="#fff"
                    style={{
                        borderColor: '#fff',
                        borderRadius: 25,
                        width: '85%',
                        height: 50,
                        paddingLeft: 20,
                        borderWidth: 1,
                        fontSize: 20,
                        color: '#fff',
                    }}
                />
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Feather name="navigation" style={{
                        fontSize: 30,
                        color: '#fff',
                    }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}