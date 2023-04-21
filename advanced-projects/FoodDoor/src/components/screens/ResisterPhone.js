import { StyleSheet, Text, View, StatusBar, 
    TouchableOpacity, Image, TextInput, FlatList, 
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'

// icons
import Ionic from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

// components (includes)
import { FlagItem } from '../includes'

// constants
import { Colors, Fonts, CountryCodes } from '../../contants'

// utils
import { Display } from '../../utils'

// services
import { StaticImageService } from '../../services'

// something special
const getDropdownStyle = (y) => ({
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    width: Display.setWidth(80),
    height: Display.setHeight(60),
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: Colors.LIGHT_GREY2,
    zIndex: 2,
    position: 'absolute',
    top: y + 130,
}
)

export default function ResisterPhone({ navigation }) {
    const [selectedCountry, setSelectedCountry] = useState(
        CountryCodes.find(country => country.name === 'India')
    )
    const [inputContainerY, setInputContainerY] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [dropdownLayout, setDropdownLayout] = useState({})

    const closeDropdown = (pageX, pageY) => {
        if(isDropdownOpen){
            if(
                (pageX < dropdownLayout?.x || pageX > dropdownLayout?.x + dropdownLayout?.width) || 
                (pageY < dropdownLayout?.y || pageY > dropdownLayout?.y + dropdownLayout?.height)
            ){
                setIsDropdownOpen(false)
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}
            onStartShouldSetResponder={({nativeEvent: {pageX, pageY}})=> closeDropdown(pageX, pageY)}
        >
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
                >Register Phone</Text>
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
                >Enter your registered phone number to login</Text>

                {/* input section */}
                <View style={{ // input container
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 50,
                }}
                    onLayout={({
                        nativeEvent: {
                            layout: {y},
                        }
                    })=>setInputContainerY(y)}
                >
                    <TouchableOpacity style={{ // country list select btn
                         backgroundColor: Colors.LIGHT_GREY,
                         width: Display.setWidth(22),
                         height: Display.setHeight(6),
                         marginRight: 10,
                         borderRadius: 8,
                         flexDirection: 'row',
                         justifyContent: 'space-evenly',
                         alignItems: 'center',
                         borderWidth: 0.5,
                         borderColor: Colors.LIGHT_GREY2,
                         paddingHorizontal: 10,
                    }}
                        activeOpacity={.8}
                        onPress={()=> setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <Image style={{ // flag icon style
                            height: 24,
                            width: 24,
                            marginRight: 10,
                        }}
                            source={{
                                uri: StaticImageService.getFlagIcon(selectedCountry.code)
                            }}
                        />
                        <Text style={{ // country dial code style
                            fontSize: 14,
                            lineHeight: 14 * 1.4,
                            color: Colors.DEFAULT_BLACK,
                            fontFamily: Fonts.UBUNTU_MEDIUM,
                            textAlignVertical: 'center',
                        }}
                        >{selectedCountry.dial_code}</Text>
                        <MaterialIcon 
                            name="keyboard-arrow-down"
                            size={18}   
                        />
                    </TouchableOpacity>

                    <View style={{ // phone number input container
                        backgroundColor: Colors.LIGHT_GREY,
                        paddingHorizontal: 10,
                        borderRadius: 8,
                        borderWidth: .5,
                        borderColor: Colors.LIGHT_GREY2,
                        justifyContent: 'center',
                        flex: 1,
                        height: Display.setHeight(6),
                    }}>
                        <TextInput style={{
                            fontSize: 18,
                            textAlignVertical: 'center',
                            padding: 0,
                            height: Display.setHeight(6),
                            color: Colors.DEFAULT_BLACK,
                        }}
                            placeholder='Phone number'
                            placeholderTextColor={Colors.DEFAULT_GREY}
                            selectionColor={Colors.DEFAULT_GREY}
                            keyboardType='number-pad'
                            maxLength={10}
                            onFocus={() => setIsDropdownOpen(false)}
                        />
                    </View>
                </View>
                {/* input section end */}

                {/* continue button */}
                <TouchableOpacity activeOpacity={0.8} style={{
                    backgroundColor: Colors.DEFAULT_GREEN,
                    marginHorizontal: 20,
                    borderRadius: 8,
                    height: Display.setHeight(6),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Text style={{
                        fontSize: 18,
                        fontFamily: Fonts.UBUNTU_MEDIUM,
                        color: Colors.DEFAULT_WHITE,
                        lineHeight: 18 * 1.4,
                    }}>Continue</Text>
                </TouchableOpacity>

                {/* country dropdown */}
                {
                    isDropdownOpen && (
                        <View 
                            style={getDropdownStyle(inputContainerY)}
                            onLayout={
                                ({nativeEvent: {layout: {x, y, height, width}}}) => {
                                    setDropdownLayout({x, y, height, width})
                                }
                            }
                        >
                            <FlatList 
                                data={CountryCodes}
                                keyExtractor={(item) => item.code}
                                renderItem={({item})=> <FlagItem  {...item}
                                    onPress={country => {
                                        setSelectedCountry(country)
                                        setIsDropdownOpen(false)
                                    }}
                                />}
                            />
                        </View>
                    )
                }
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