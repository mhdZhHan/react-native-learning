import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

// icons
import Entypo from 'react-native-vector-icons/Entypo'

// navigation
import { useNavigation } from '@react-navigation/native'

export default function Stories() {
    const navigation = useNavigation()

    const [stories] = useState(
        [
            {
                id: 1,
                name: "Your Story",
                authorImage: require('../../assets/images/avatar01.jpg')
            },
            {
                id: 2,
                name: "John",
                authorImage: require('../../assets/images/avatar02.jpg')
            },
            {
                id: 3,
                name: "Doe",
                authorImage: require('../../assets/images/avatar03.jpg')
            },
            {
                id: 4,
                name: "Miller",
                authorImage: require('../../assets/images/avatar05.jpg')
            },
            {
                id: 5,
                name: "Liviya",
                authorImage: require('../../assets/images/avatar05.jpg')
            },
            {
                id: 6,
                name: "Liviya",
                authorImage: require('../../assets/images/avatar06.jpg')
            },
            {
                id: 7,
                name: "Liviya",
                authorImage: require('../../assets/images/avatar07.jpg')
            },
            {
                id: 8,
                name: "Doe",
                authorImage: require('../../assets/images/avatar03.jpg')
            },
            {
                id: 9,
                name: "John",
                authorImage: require('../../assets/images/avatar02.jpg')
            },
        ]
    )

    const RenderStories = ({ story })=> (
        <TouchableOpacity 
            onPress={()=>navigation.push('Status', {
                name: story.name,
                authorImage: story.authorImage
            })}
        >
            <View 
                style={{
                    flexDirection: 'column',
                    paddingHorizontal: 8,
                    position: 'relative',
                }}
            >
                {
                    story.id == 1 ? (
                        <View style={{
                            position: 'absolute',
                            bottom: 15,
                            right: 10,
                            zIndex: 1,
                        }}>
                            <Entypo 
                                name="circle-with-plus"
                                style={{
                                    fontSize: 20,
                                    color: '#405de6',
                                    backgroundColor: '#fff',
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                    ): null
                }
                <View style={{
                    height: 68,
                    width: 68,
                    backgroundColor: '#fff',
                    borderWidth: 1.8,
                    borderRadius: 68 / 2,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image 
                        source={story.authorImage}
                        style={{
                            resizeMode: 'cover',
                            width: '92%',
                            height: '92%',
                            borderRadius: 92 / 2,
                            backgroundColor: 'orange',
                        }}
                    />
                </View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 10,
                    opacity: story.id == 0 ? 1 : 0.5,
                    color: '#000',
                }}>
                    {story.name}
                </Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={{
                paddingVertical: 20,
            }}
        >
            {
                stories.map((story)=>(
                    <RenderStories key={story.id} story={story} navigation={navigation} />
                ))
            }
        </ScrollView>
    )
}