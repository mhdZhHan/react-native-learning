import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function CurrencyButton(props) {
    return (
        <View style={styles.btnContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        fontSize: 28,
        color: '#000',
        marginBottom: 4,
        textAlign: 'center',
    },
    country: {
        fontSize: 14,
        color: '#2d3436',
        textAlign: 'center',
    }
})