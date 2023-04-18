import { View } from 'react-native'
import React from 'react'

export default function Separator({ height, width, ...extraProps }) {
    return (
        <View style={{height: height, width: width}} />
    )
}

Separator.defaultProps = {
    height: 0,
    width: 0,
}