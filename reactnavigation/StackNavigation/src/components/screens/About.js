import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function About({ navigation, route }) {
    const { id, name } = route.params
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About Screen</Text>
            <Button title="Go to Home" onPress={()=> navigation.push('Home')} />
            <Text style={styles.text}>Name: {name}</Text>
            <Button title="Go Back" onPress={()=> navigation.goBack()} />
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