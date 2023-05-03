import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useRef, useState } from 'react'

// icons
import Ionic from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

// components (includes)
import { FlagItem } from '../includes'

// constants
import { Colors, Fonts, CountryCodes } from '../../contants'

// utils
import { Display } from '../../utils'

export default function VerificationScreen({ navigation, route: { params: { phonenumber } } }) {
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''})
    // inputs refs
    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()
    const fourthInput = useRef()


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
                        onPress={() => navigation.navigate('Signup')}
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
                >OTP Verification</Text>
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
                >
                    Enter the OTP number just sent you at {' '}
                    <Text style={{
                        fontSize: 18,
                        fontFamily: Fonts.UBUNTU_REGULAR,
                        lineHeight: 18 * 1.4,
                        color: Colors.DEFAULT_YELLOW,
                    }}>{phonenumber}</Text>
                </Text>

                {/* input secttion */}
                <View style={{
                    marginHorizontal: 20,
                    marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}>
                    <View style={{
                        borderRadius: 5,
                        borderWidth: .5,
                        borderColor: Colors.DEFAULT_GREEN,
                    }}>
                        <TextInput style={{
                            fontSize: 25,
                            color: Colors.DEFAULT_BLACK,
                            padding: 0,
                            textAlign: 'center',
                            paddingHorizontal: 18,
                            paddingVertical: 10,
                        }} 
                            maxLength={1}
                            keyboardType='numeric'
                            ref={firstInput}
                            onChangeText={(text)=> {
                                setOtp({...otp, 1: text})
                                text && secondInput.current.focus()
                            }}
                        />
                    </View>{/* inputbox 1 */}
                    <View style={{
                        borderRadius: 5,
                        borderWidth: .5,
                        borderColor: Colors.DEFAULT_GREEN,
                    }}>
                        <TextInput style={{
                            fontSize: 25,
                            color: Colors.DEFAULT_BLACK,
                            padding: 0,
                            textAlign: 'center',
                            paddingHorizontal: 18,
                            paddingVertical: 10,
                        }} 
                            maxLength={1}
                            keyboardType='numeric'
                            ref={secondInput}
                            onChangeText={(text)=> {
                                setOtp({...otp, 2: text})
                                text ? thirdInput.current.focus() : firstInput.current.focus()
                            }}
                        />
                    </View>{/* inputbox 2 */}
                    <View style={{
                        borderRadius: 5,
                        borderWidth: .5,
                        borderColor: Colors.DEFAULT_GREEN,
                    }}>
                        <TextInput style={{
                            fontSize: 25,
                            color: Colors.DEFAULT_BLACK,
                            padding: 0,
                            textAlign: 'center',
                            paddingHorizontal: 18,
                            paddingVertical: 10,
                        }} 
                            maxLength={1}
                            keyboardType='numeric'
                            ref={thirdInput}
                            onChangeText={(text)=> {
                                setOtp({...otp, 3: text})
                                text ? fourthInput.current.focus() : secondInput.current.focus()
                            }}
                        />
                    </View>
                    <View style={{
                        borderRadius: 5,
                        borderWidth: .5,
                        borderColor: Colors.DEFAULT_GREEN,
                    }}>
                        <TextInput style={{
                            fontSize: 25,
                            color: Colors.DEFAULT_BLACK,
                            padding: 0,
                            textAlign: 'center',
                            paddingHorizontal: 18,
                            paddingVertical: 10,
                        }} 
                            maxLength={1}
                            keyboardType='numeric'
                            ref={fourthInput}
                            onChangeText={(text)=> {
                                setOtp({...otp, 4: text})
                                !text && thirdInput.current.focus()
                            }}
                        />
                    </View>{/* inputbox 3 */}
                </View>

                {/* verify button */}
                <TouchableOpacity activeOpacity={0.8} style={{
                    backgroundColor: Colors.DEFAULT_GREEN,
                    marginHorizontal: 20,
                    borderRadius: 8,
                    height: Display.setHeight(6),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    onPress={() => {
                        navigation.navigate('VerificationScreen', {phonenumber})
                    }}
                >
                    <Text style={{
                        fontSize: 18,
                        fontFamily: Fonts.UBUNTU_MEDIUM,
                        color: Colors.DEFAULT_WHITE,
                        lineHeight: 18 * 1.4,
                    }}>Verify</Text>
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