import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home Screen</Text>
            <Button 
                title="Go to about"
                style={styles.button} 
                onPress={()=> navigation.navigate('About', {  id: 1, name: 'Mohammed' })} 
            />
            <Button 
                title="Go to Details" 
                style={styles.button}
                onPress={()=> navigation.navigate('Details')} 
            />
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
    },
    button: {
        marginBottom: 20,
    }
})