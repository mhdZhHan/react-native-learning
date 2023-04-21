import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

// constants
import { Colors, Fonts } from '../../contants'

// services
import { StaticImageService } from '../../services'

export default function FlagItem({ code, name, dial_code, onPress }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=> onPress({code, name, dial_code})}
        >
            <Image style={{
                height: 25,
                width: 25,
                marginRight: 10,
            }}
                source={{uri: StaticImageService.getFlagIcon(code)}}
            />
            <Text style={styles.text}>{dial_code}</Text>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 14,
        lineHeight: 14 * 1.4,
        fontFamily: Fonts.UBUNTU_MEDIUM,
        marginRight: 10,
    },
})