import { SafeAreaView, ScrollView, TouchableOpacity, 
    Dimensions, View, StatusBar, Image, Text } from 'react-native'
import React, { useState } from 'react'

// components
import SearchBox from '../includes/SearchBox'
import SearchContent from '../includes/SearchContent'

// icons
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export default function Search() {
    const [image, setImage] = useState(null)

    const getData = (data) => {
        setImage(data)
    }

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    return (
        <SafeAreaView style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#fff',
            position: 'relative',
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <SearchContent getData={getData} />
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20,
                }}>
                    <AntDesign name='pluscircleo' style={{
                        fontSize: 45, 
                        opacity: 0.5,
                        color: '#000',
                    }} />
                </TouchableOpacity>
            </ScrollView>
            {
                image ? (
                    <View style={{
                        position: 'absolute',
                        width: '100%',
                        flex: 1,
                        backgroundColor: 'rgba(52, 52, 52, 51, 0.8)',
                        zIndex: 1,
                    }}>
                        <StatusBar backgroundColor='#525252' barStyle='dark-content' />
                        <View style={{
                            position: 'absolute',
                            top: windowHeight / 6,
                            left: windowWidth / 18,
                            width: 350,
                            height: 465,
                            backgroundColor: '#fff',
                            borderRadius: 15,
                            zIndex: 1,
                            elevation: 50,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                            }}>
                                <Image source={image} style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 100,
                                }} />
                            <View style={{paddingLeft: 8,}}>
                                <Text style={{fontSize: 12, fontWeight: '600', color: '#000'}}>the_anonymous_guy</Text>
                            </View>
                            </View>
                            <Image source={image} style={{width: '100%', height: '80%'}} />
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                padding: 8,
                            }}>
                                <Ionic name="ios-heart-outline" style={{fontSize: 26, color: '#000'}} />
                                <Ionic name="ios-person-circle-outline" style={{fontSize: 26, color: '#000'}} />
                                <Feather name="navigation" style={{fontSize: 26, color: '#000'}} />
                            </View>
                        </View>
                    </View>
                ): null
            }
        </SafeAreaView>
    )
}