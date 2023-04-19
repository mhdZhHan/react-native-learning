import { Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// constants
import { Colors } from '../../contants'

const containerStyle = (size, isActive) =>({
    backgroundColor: isActive ? Colors.DEFAULT_GREEN : Colors.DEFAULT_GREY,
    height: 32 * size,
    width: 64 * size,
    borderRadius: 32 * size,
    padding: 4 * size,
})

const toggleStyle = (size, animatedValue) =>({
    width: 24 * size,
    height: 24 * size,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32 * size,
    transform: [
        {
            translateX: animatedValue,
        }
    ],
})

export default function ToggleButton({ size }) {
    const [isActive, setIsAcrive] = useState(false)
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))

    const toggleHandle = (size) =>{
        Animated.timing(animatedValue, {
            toValue: isActive ? 0 : 32 * size,
            duration: 180,
            easing: Easing.linear,
            delay: 0,
            useNativeDriver: true,
        }).start()
        setIsAcrive(!isActive)
    }

    return (
        <TouchableOpacity 
            activeOpacity={.9} 
            style={containerStyle(size, isActive)} onPress={() => 
            toggleHandle(size)}
        >
            <Animated.View style={toggleStyle(size, animatedValue)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})