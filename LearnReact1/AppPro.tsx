import React from "react"

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(){
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello world pro !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#fff',
    },
    blackText: {
        color: '#000',
    },
})

export default AppPro