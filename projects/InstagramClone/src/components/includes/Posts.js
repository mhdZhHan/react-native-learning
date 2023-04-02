import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

// icons
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Posts() {
    const [posts] = useState([
        {
            id: 1,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar01.jpg'),
            postImage: require('../../assets/images/car05.jpg'),
            likes: 786,
            isLiked: false,
        },
        {
            id: 2,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar02.jpg'),
            postImage: require('../../assets/images/post02.jpg'),
            likes: 786,
            isLiked: false,
        },
        {
            id: 3,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar03.jpg'),
            postImage: require('../../assets/images/post03.jpg'),
            likes: 786,
            isLiked: false,
        },
        {
            id: 4,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar04.jpg'),
            postImage: require('../../assets/images/car01.jpg'),
            likes: 786,
            isLiked: false,
        },
        {
            id: 5,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar05.jpg'),
            postImage: require('../../assets/images/car02.jpg'),
            likes: 786,
            isLiked: false,
        },
        {
            id: 6,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar06.jpg'),
            postImage: require('../../assets/images/car04.jpg'),
            likes: 786,
            isLiked: false,
        },
        {
            id: 7,
            postTitle: 'hello world',
            authorImage: require('../../assets/images/avatar03.jpg'),
            postImage: require('../../assets/images/car02.jpg'),
            likes: 786,
            isLiked: false,
        },
    ])

    const RenderPosts = ({ post }) => {
        const [like, setLike] = useState(post.isLiked)
        return (
            // post top
            <View style={{
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.1,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={post.authorImage} style={{
                            width: 30,
                            height: 30,
                            borderRadius: 40 / 2,
                        }} />
                        <View style={{
                            paddingLeft: 5,
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#000',
                            }}>{post.postTitle}</Text>
                        </View>
                    </View>
                    <Feather name="more-vertical" style={{
                        fontSize: 20,
                        color: '#000'
                    }} />
                </View> 
                {/* post_image */}
                <View style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={post.postImage} style={{
                        width: '100%',
                        height: 600,
                    }} />
                </View>
                {/* post bottom */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 15,
                }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={()=> setLike(!like)}>
                                <AntDesign name={like ? "heart" : "hearto" } style={{
                                    paddingRight: 10,
                                    fontSize: 20,
                                    color: like ? 'red' : '#000'
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionic name="ios-chatbubble-outline" style={{
                                    paddingRight: 10,
                                    fontSize: 20,
                                    color: '#000',
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name="navigation" style={{
                                    fontSize: 20,
                                    color: '#000',
                                }} />
                            </TouchableOpacity>
                        </View>
                        <Feather name="bookmark" style={{
                            fontSize: 20,
                            color: '#000',
                        }} />
                    </View>
                    {/* likes count */}
                    <View style={{
                        paddingHorizontal: 15,
                    }}>
                        <Text style={{color: '#000'}}>
                            Liked by {like ? 'yoy and ' : ''}{''}
                            {like ? post.likes + 1 : post.likes} others
                        </Text>
                        <Text style={{
                            fontWeight: '700',
                            paddingVertical: 2,
                            fontSize: 14,
                            color: '#000'
                        }}>
                            If you have money you can buy a clock but not time!
                        </Text>
                        <Text style={{
                            opacity: 0.4,
                            paddingVertical: 2,
                            color: '#000',
                        }}>
                            View all comments
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image source={post.authorImage} style={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 25 / 2,
                                    backgroundColor: 'orange',
                                    marginRight: 10,
                                }} />
                                <TextInput placeholder='Add a comment' placeholderTextColor="#000" style={{
                                    opacity: 0.5,
                                    color: '#000'
                                }} />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Entypo name="emoji-happy" style={{
                                    fontSize: 15,
                                    color: 'lightgreen',
                                    marginRight: 10,
                                }} />
                                <Entypo name="emoji-neutral" style={{
                                    fontSize: 15,
                                    color: 'pink',
                                    marginRight: 10,
                                }} />
                                <Entypo name="emoji-sad" style={{
                                    fontSize: 15,
                                    color: 'red',
                                }} />
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
    return (
        <View>
            {
                posts.map((post) => (
                    <RenderPosts key={post.id} post={post} />
                ))
            }
        </View>
    )
}