import { View, Image, TouchableOpacity } from 'react-native'
import React, { Fragment, useState } from 'react'

export default function SearchContent({ getData }) {
    const [searchData] = useState([
        {
            id: 1,
            images: [
                require('../../assets/images/post01.jpg'),
                require('../../assets/images/post02.jpg'),
                require('../../assets/images/car01.jpg'),
                require('../../assets/images/post03.jpg'),
                require('../../assets/images/car06.jpg'),
                require('../../assets/images/car02.jpg'),
            ],
        },
        {
            id: 2,
            images: [
                require('../../assets/images/car06.jpg'),
                require('../../assets/images/post01.jpg'),
                require('../../assets/images/car05.jpg'),
                require('../../assets/images/post03.jpg'),
                require('../../assets/images/post04.jpg'),
                require('../../assets/images/car02.jpg'),
            ],
        },
        {
            id: 3,
            images: [
                require('../../assets/images/car03.jpg'),
                require('../../assets/images/post02.jpg'),
                require('../../assets/images/car01.jpg'),
                require('../../assets/images/post03.jpg'),
                require('../../assets/images/car06.jpg'),
                require('../../assets/images/car02.jpg'),
            ],
        },
    ])

    const RenderPosts = ({ data }) => (
        <Fragment>
            {
                data.id === 1 ? (
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        {
                            data.images.map((image, imageIndex)=>{
                                return (
                                    <TouchableOpacity 
                                        onPressIn={()=> getData(image)}
                                        onPressOut={()=> getData(null)}
                                        key={imageIndex} 
                                        style={{
                                        paddingBottom: 2,
                                    }}>
                                        <Image source={image} style={{
                                            width: 149,
                                            height: 150,
                                        }} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                ): null
            }
            {
                data.id === 2 ? (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: 305,
                            justifyContent: 'space-between',
                        }}>
                            {
                                data.images.slice(0, 4).map((image, imageIndex)=>(
                                    <TouchableOpacity
                                        onPressIn={()=> getData(image)}
                                        onPressOut={()=> getData(null)}
                                        key={imageIndex} 
                                        style={{
                                            paddingBottom: 2,
                                    }}>
                                        <Image source={image} style={{
                                            width: 149,
                                            height: 150,
                                        }} />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <TouchableOpacity
                             onPressIn={()=> getData(data.images[4])}
                             onPressOut={()=> getData(null)}
                             style={{marginLeft: 2}}
                        >
                            <Image source={data.images[4]} style={{
                                width: 149,
                                height: 302,
                            }} />
                        </TouchableOpacity>
                    </View>
                ): null
            }
            {
                data.id === 3 ?(
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity
                            onPressIn={()=> getData(data.images[2])}
                            onPressOut={()=> getData(null)}
                            style={{
                                paddingRight: 2,
                        }}>
                            <Image source={data.images[2]} style={{
                                width: 306,
                                height: 300,
                            }} />
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: 149,
                            justifyContent: 'space-between'
                        }}>
                            {
                                data.images.slice(0, 2).map((image, imageIndex)=>{
                                    return (
                                        <TouchableOpacity
                                            onPressIn={()=> getData(image)}
                                            onPressOut={()=> getData(null)}
                                            key={imageIndex} 
                                            style={{marginBottom: 2}}
                                        >
                                            <Image source={image} style={{width: 149, height: 150}}/>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                ):null
            }
        </Fragment>
    )
    return (
        <View>
            {
                searchData.map((data) => (
                    <RenderPosts key={data.id} data={data} />
                ))
            }
        </View>
    )
}