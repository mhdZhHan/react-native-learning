import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

// contstants
import { Colors, Fonts, Genarals } from '../../contants'

// utils
import { Display } from '../../utils'

// includes
import { WelcomeCard } from '../includes'
import Separator from '../includes/Separator'

const pageStyle = isActive => 
    isActive ? styles.page : 
    {...styles.page, backgroundColor: Colors.DEFAULT_GREY}

const Pagination = ({index}) => {
    return (
        <View style={{
            flexDirection: 'row',
        }}>
            {
                [...Array(Genarals.WELCOME_CONTENTS.length).keys()].map((_, i) => (
                    i === index ? (
                        <View style={pageStyle(true)} key={i}></View>
                    ): (
                        <View style={pageStyle(false)} key={i}></View>
                    )
                ))
            }
        </View>
    )
}

export default function Welcome({ navigation }) {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0)
    const welcomeListRef = useRef()

    const onViewRef = useRef(({changed})=>{
        setWelcomeListIndex(changed[0].index)
    })

    const viewConfigRef = useRef(({viewAreaCoveragePercentThreshold: 50}))

    const pageScroll = () => {
        welcomeListRef.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle='dark-content' 
                backgroundColor={Colors.DEFAULT_WHITE}
            />
            <View style={{height: Display.setHeight(60)}}>
                <FlatList 
                    ref={welcomeListRef}
                    data={Genarals.WELCOME_CONTENTS}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode='never'
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    renderItem={(({item})=> <WelcomeCard item={item} />)}
                />
            </View>

            <Separator height={Display.setHeight(2)} />

            <Pagination index={welcomeListIndex} />

            <Separator height={Display.setHeight(8)} />
            <Separator height={Display.setHeight(8)} />
            <Separator height={Display.setHeight(8)} />

            {
                welcomeListIndex === 2 ? (
                    <TouchableOpacity 
                        activeOpacity={0.8} style={{
                            backgroundColor: Colors.DEFAULT_GREEN,
                            paddingHorizontal: 45,
                            paddingVertical: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                            elevation: 2,
                        }}
                        onPress={()=> navigation.navigate('Login')}
                    >
                        <Text style={{
                            fontSize: 20,
                            color: Colors.DEFAULT_WHITE,
                            lineHeight: 20 * 1.4,
                            fontFamily: Fonts.UBUNTU_BOLD,
                        }}>Get Started</Text>
                    </TouchableOpacity>
                ):(
                    <View style={{
                        flexDirection: 'row',
                        width: '87%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity 
                            activeOpacity={.8}
                            onPress={()=> welcomeListRef.current.scrollToEnd()}
                        >
                            <Text style={[styles.buttonText, {color: Colors.DEFAULT_GREY}]}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={.8} 
                            style={styles.button}
                            onPress={()=> pageScroll()}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    page: {
        width: 15,
        height: 8,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingHorizontal: 11,
        paddingVertical: 20,
        borderRadius: 50
    },
    buttonText: {
        fontSize: 17,
        fontFamily: Fonts.UBUNTU_BOLD,
        textTransform: 'uppercase',
        lineHeight: 17 * 1.4,
        color: Colors.DEFAULT_BLACK,
    },
})