import React, { useEffect } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native'

// contants
import { Colors, Images, Fonts } from '../../contants'

// utils
import { Display } from '../../utils'

export default function Splash({ navigation }) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Welcome')
        }, 2000)
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={Colors.DEFAULT_GREEN}
                translucent
            />
            <Image source={Images.PLATE} resizeMode='contain' style={{
                width: Display.setWidth(50),
                height: Display.setHeight(25),
            }} />
            <Text style={{
                color: Colors.DEFAULT_WHITE,
                fontSize: 32,
                fontFamily: Fonts.UBUNTU_LIGHT,
            }}>Food Door</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },
})