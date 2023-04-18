import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

// constants
import { Colors, Fonts, Images } from '../../contants'

// utils
import { Display } from '../../utils'

export default function WelcomeCard({ item }) {
    return (
        <View style={styles.container}>
            <Image source={Images[item.image]} resizeMode='contain' style={{
                height: Display.setHeight(30),
                width: Display.setWidth(60),
            }} />
            <Text style={{
                fontSize: 22,
                fontFamily: Fonts.UBUNTU_BOLD,
                marginBottom: 16,
                color: Colors.DEFAULT_BLACK,
            }}>{item.title}</Text>
            <Text style={{
                fontFamily: Fonts.UBUNTU_LIGHT,
                fontSize: 16,
                textAlign: 'center',
                maxWidth: '90%',
                lineHeight: 25,
                color: Colors.DEFAULT_BLACK,
            }}>{item.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.setWidth(100),
    },
})