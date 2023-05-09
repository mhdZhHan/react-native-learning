import { 
    StyleSheet, Text, View,
    StatusBar, TextInput, TouchableOpacity,
    Image,
} from 'react-native'
import React, { useState } from 'react'

// icons
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

// Lottie 
import Lottie from 'lottie-react-native'

// components (includes)
import { Separator } from '../includes'

// constants
import { Colors, Fonts, Images } from '../../contants'
import { SafeAreaView } from 'react-native-safe-area-context'

// services
import { AuthService } from '../../services'

// utils
import { Display } from '../../utils'


// coustom styles for form validation
const inputStyle = (state) => {
    switch(state){
        case 'valid':
            return {
                backgroundColor: Colors.LIGHT_GREY,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.DEFAULT_GREEN,
                justifyContent: 'center',
            }
        case 'invalid':
            return {
                backgroundColor: Colors.LIGHT_GREY,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.DEFAULT_RED,
                justifyContent: 'center',
            }
        default:
            return {
                backgroundColor: Colors.LIGHT_GREY,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                borderRadius: 8,
                borderWidth: .8,
                borderColor: Colors.LIGHT_GREY2,
                justifyContent: 'center',
            }
    }
}

// for form validation
const showMarker = (state) => {
    switch (state) {
        case 'valid':
            return (
                <AntDesign 
                    name="checkcircleo"
                    color={Colors.SECONDARY_GREEN}
                    size={20}
                    style={{marginLeft: 5}}
                />
            )
        case 'invalid':
            return (
                <AntDesign 
                    name="closecircleo"
                    color={Colors.DEFAULT_RED}
                    size={20}
                    style={{marginLeft: 5}}
                />
            )
        default : return null
    }
}

export default function Signup({ navigation }) {
    const [isPasswordShow, setIsPasswordShow] = useState(true)

    const [username, setUsernaem] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [isUsernameExist, setIsUsernameexist] = useState('')
    const [isEmailExist, setIsEmailExist] = useState('')

    const [usernameState, setUsernameState] = useState('default')
    const [emailState, setEmailState] = useState('default')


    // register form subbmition
    const register = async () => {
        const user = {
            username, email, password
        }

        console.log(user)

        setIsLoading(true)
        AuthService.registerUser(user)
            .then((response)=> {
                setIsLoading(false)
                console.log(response)
                if(!response?.status){
                    setErrorMessage(response?.message)
                }
            })

        // navigation.navigate('ResisterPhone')
    }

    const checkUserExist = async (type, value) => {
        if(value?.length > 0){
            AuthService.checkUserExist(type, value)
                .then((response)=> {
                    if(response?.status){
                        type === 'email' && isEmailExist ? setIsEmailExist('') : null
                        type === 'username' && isUsernameExist ? setIsUsernameexist('') : null

                        type === 'email' ? setEmailState('valid') : null
                        type === 'username' ? setUsernameState('valid') : null
                    }else {
                        type === 'email' ? setIsEmailExist(response?.message) : null
                        type === 'username' ? setIsUsernameexist(response?.message) : null

                        type === 'email' ? setEmailState('invalid') : null
                        type === 'username' ? setUsernameState('invalid') : null
                    }
                })
        }
    }

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
                <Text style={[styles.text, {
                    fontSize: 20,
                    fontFamily: Fonts.UBUNTU_BOLD,
                    lineHeight: 20 * 1.4,
                    textAlign: 'center',
                    width: Display.setWidth(80),
                }]}>Sign Up</Text>
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
            >Create Account</Text>
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
            >Enter your email, chose a username and password</Text>

            {/* Input section start */}
            <View style={inputStyle(usernameState)}>{/* username input container */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Feather 
                        name='user' 
                        size={22} 
                        color={Colors.DEFAULT_GREY} 
                        style={{marginRight: 10}} 
                    />
                    <TextInput // username
                        placeholder='Username' 
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        onChangeText={(text)=> setUsernaem(text)}
                        onEndEditing={
                            ({nativeEvent: {text}}) => {
                                checkUserExist('username', text)
                            }
                        }
                        style={{
                            fontSize: 18,
                            textAlignVertical: 'center',
                            padding: 0,
                            height: Display.setHeight(6),
                            color: Colors.DEFAULT_BLACK,
                            flex: 1,
                        }}
                    />
                    
                    {showMarker(usernameState)}
                </View>
            </View>

            { // message (username is exist)
                isUsernameExist && <Text style={{
                    fontSize: 10,
                    lineHeight: 10 * 1.4,
                    color: Colors.DEFAULT_RED,
                    fontFamily: Fonts.UBUNTU_MEDIUM,
                    marginHorizontal: 20,
                    marginTop: 5,
                }}>{isUsernameExist}</Text>
            }

            <Separator height={16} />

            <View style={inputStyle(emailState)}>{/* email input container */}
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
                    <TextInput // Email
                        placeholder='Email' 
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        onChangeText={(text)=> setEmail(text)}
                        onEndEditing={
                            ({nativeEvent: {text}}) => {
                                checkUserExist('email', text)
                            }
                        }
                        style={{
                            fontSize: 18,
                            textAlignVertical: 'center',
                            padding: 0,
                            height: Display.setHeight(6),
                            color: Colors.DEFAULT_BLACK,
                            flex: 1,
                        }}
                    />

                    {showMarker(emailState)}
                </View>
            </View>

            { // message (email is exist)
                isEmailExist && <Text style={{
                    fontSize: 10,
                    lineHeight: 10 * 1.4,
                    color: Colors.DEFAULT_RED,
                    fontFamily: Fonts.UBUNTU_MEDIUM,
                    marginHorizontal: 20,
                    marginTop: 5,
                }}>{isEmailExist}</Text>
            }

            <Separator height={16} />

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
                        name='lock' 
                        size={22} 
                        color={Colors.DEFAULT_GREY} style={{marginRight: 10}} 
                    />
                    <TextInput // password 
                        secureTextEntry={isPasswordShow}
                        placeholder='Password' 
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        onChangeText={(text)=> setPassword(text)}
                        style={{
                            fontSize: 18,
                            textAlignVertical: 'center',
                            padding: 0,
                            height: Display.setHeight(6),
                            color: Colors.DEFAULT_BLACK,
                            flex: 1,
                        }}
                    />
                    <Feather 
                        name={!isPasswordShow ? 'eye' : 'eye-off'}
                        size={22} 
                        style={{marginRight:10}}
                        color={Colors.DEFAULT_GREY}
                        onPress={()=> setIsPasswordShow(!isPasswordShow)}
                    />
                </View>
            </View>
            {/* Input section end */}

            { // error message
                errorMessage && <Text style={{
                    fontSize: 10,
                    lineHeight: 10 * 1.4,
                    color: Colors.DEFAULT_RED,
                    fontFamily: Fonts.UBUNTU_MEDIUM,
                    marginHorizontal: 20,
                    marginTop: 5,
                }}>{errorMessage}</Text>
            }

            <TouchableOpacity activeOpacity={0.8} style={{ // register button
                backgroundColor: Colors.DEFAULT_GREEN,
                marginHorizontal: 20,
                borderRadius: 8,
                height: Display.setHeight(6),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}
            onPress={() => register()}
            >
                {
                    isLoading ? (
                        <Lottie
                            source={Images.LOADING}
                            autoPlay
                        />
                    ): (
                        <Text style={{
                            fontSize: 18,
                            fontFamily: Fonts.UBUNTU_MEDIUM,
                            color: Colors.DEFAULT_WHITE,
                            lineHeight: 18 * 1.4,
                        }}>Sign Up</Text>
                    )
                }
            </TouchableOpacity>

            <Text style={{
                fontSize: 15,
                fontFamily: Fonts.UBUNTU_MEDIUM,
                color: Colors.DEFAULT_BLACK,
                lineHeight: 15 * 1.4,
                alignSelf: 'center',
                marginTop: 20,
            }}>OR</Text>

            <TouchableOpacity activeOpacity={0.8} style={{ // facebook button
                backgroundColor: Colors.FABEBOOK_BLUE,
                paddingVertical: 15,
                marginHorizontal: 20,
                height: Display.setHeight(6),
                borderRadius: 8,
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <View style={{
                        backgroundColor: Colors.DEFAULT_WHITE,
                        borderRadius: 3,
                        padding: 2,
                        position: 'absolute',
                        left: 25,
                    }}>
                        <Image source={Images.FACEBOOK} style={{
                            width: 18,
                            height: 18,
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: Fonts.UBUNTU_MEDIUM,
                        color: Colors.DEFAULT_WHITE,
                        lineHeight: 13 * 1.4,
                    }}>Connect with Facebook</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.8} style={{ // Google button
                backgroundColor: Colors.GOOGLE_BLUE,
                paddingVertical: 15,
                marginHorizontal: 20,
                height: Display.setHeight(6),
                borderRadius: 8,
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <View style={{
                        backgroundColor: Colors.DEFAULT_WHITE,
                        borderRadius: 3,
                        padding: 2,
                        position: 'absolute',
                        left: 25,
                    }}>
                        <Image source={Images.GOOGLE} style={{
                            width: 18,
                            height: 18,
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: Fonts.UBUNTU_MEDIUM,
                        color: Colors.DEFAULT_WHITE,
                        lineHeight: 13 * 1.4,
                    }}>Connect with Google</Text>
                </View>
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