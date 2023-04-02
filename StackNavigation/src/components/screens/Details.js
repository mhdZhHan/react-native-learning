import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Details({ navigation, route }) {
    return (
		<View style={styles.container}>
			<Text style={styles.text}>Details Screen</Text>
            <Button title="Go to Home" onPress={()=> navigation.push('Home')} />
            <Text style={styles.text}>Name: {route.params.name} From Initial params</Text>
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
        color: '#000',
        fontSize: 30
    }
})