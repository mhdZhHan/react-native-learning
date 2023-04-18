import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.title}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>🫠</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#6A1B4D',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: 'red',
        shadowOpacity: .8,
        shadowRadius: 2,
    },
})