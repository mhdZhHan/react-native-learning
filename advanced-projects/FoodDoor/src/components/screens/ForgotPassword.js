import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

// icons
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

// components (includes)
import { Separator } from '../includes'

// constants
import { Colors, Fonts } from '../../contants'
import { SafeAreaView } from 'react-native-safe-area-context'

// utils
import { Display } from '../../utils'

export default function ForgotPassword({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top section start */}
            <StatusBar 
                barStyle='dark-content' 
                backgroundColor={Colors.DEFAULT_WHITE} 
                translucent 
            />
            {/* <Separator height={StatusBar.currentHeight} /> */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
                paddingHorizontal: 20,
            }}>
                <Ionic 
                    name="chevron-back-outline" 
                    size={30} 
                    color={Colors.DEFAULT_BLACK} 
                    onPress={() => navigation.navigate('Login')}
                />
                <Text 
                    style={[styles.text, {
                        fontSize: 20,
                        fontFamily: Fonts.UBUNTU_BOLD,
                        lineHeight: 20 * 1.4,
                        textAlign: 'center',
                        width: Display.setWidth(80),
                    }]}
                    onPress={()=> navigation.navigate('Login')}
                >Forgot Password</Text>
            </View>
            {/* Top section end */}

            <Text 
                style={{
                    fontSize: 20,
                    fontFamily: Fonts.UBUNTU_MEDIUM,
                    lineHeight: 20 * 1.4,
                    marginTop: 50,
                    marginBottom: 10,
                    marginHorizontal: 20,
                    color: Colors.DEFAULT_BLACK
                }}
            >Forgot password</Text>
            <Text 
                style={{
                    fontSize: 20,
                    fontFamily: Fonts.UBUNTU_REGULAR,
                    color: Colors.DEFAULT_BLACK,
                    lineHeight: 20 * 1.4,
                    marginTop: 10,
                    marginBottom: 20,
                    marginHorizontal: 20,
                }}
            >Please enter your email so we can help you to recover your password</Text>

            <View style={{
                backgroundColor: Colors.LIGHT_GREY,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                borderRadius: 8,
                borderWidth: .8,
                borderColor: Colors.LIGHT_GREY2,
                justifyContent: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Feather 
                        name='mail' 
                        size={22} 
                        color={Colors.DEFAULT_GREY} 
                        style={{marginRight: 10}} 
                    />
                    <TextInput 
                        placeholder='Email' 
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        style={{
                            fontSize: 18,
                            textAlignVertical: 'center',
                            padding: 0,
                            height: Display.setHeight(6),
                            color: Colors.DEFAULT_BLACK,
                            flex: 1,
                        }}
                    />
                </View>
            </View>{/* input box */}

            <Separator height={16} />

            <TouchableOpacity activeOpacity={0.8} style={{
                backgroundColor: Colors.DEFAULT_GREEN,
                marginHorizontal: 20,
                borderRadius: 8,
                height: Display.setHeight(6),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}>
                <Text 
                    style={{
                        fontSize: 18,
                        fontFamily: Fonts.UBUNTU_MEDIUM,
                        color: Colors.DEFAULT_WHITE,
                        lineHeight: 18 * 1.4,
                    }}
                >Reset Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    text: {
        color: Colors.DEFAULT_BLACK,
    },
})