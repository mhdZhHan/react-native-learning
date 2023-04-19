import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SongInfo({ track }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>
                    {track?.title}
                </Text>
                <Text style={styles.artist}>
                    {track?.artist} . {track?.album}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,

        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    name: {
        marginBottom: 8,
        textAlign: 'center',

        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
    },
    artist: {
        color: '#d9d9d9',
        textAlign: 'center',
    },
})
