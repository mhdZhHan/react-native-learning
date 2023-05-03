import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation
import { useNavigation } from '@react-navigation/native'

const Details = ({route}) => {
    const { productId } = route.params
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Product Id : {JSON.stringify(productId)}
            </Text>
            <Button 
                title='Go back'
                onPress={() => navigation.goBack()}
            />
            <Button 
                title='Go to Home'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        
    }
})
