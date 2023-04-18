import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Details() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    }
})