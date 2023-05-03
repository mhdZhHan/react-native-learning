import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Button 
                title='Go to Details'
                onPress={()=> navigation.push('Details')}
            /> */}
            <Button 
                title='Go to Details'
                onPress={()=> navigation.navigate('Details', {
                    productId: 86,
                })}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})