import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openwebsite(websiteLink){
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                paddingHorizontal: 8,
            }}>Blog card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.cardTitle}>What's new in javascriot 21 - ES12</Text>
                </View>
                <Image
                    source={require('../../assets/images/car02.jpg')}
                    style={{
                        resizeMode: 'cover',
                        height: 240,
                        width: '100%',
                        marginBottom: 8,

                    }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis natus excepturi voluptatibus numquam adipisci accusantium?
                    </Text>
                </View>
                <View style={styles.cardFooter}>
                    <TouchableOpacity
                        onPress={()=> openwebsite('https://mohammedsh.com')}
                    >
                        <Text style={styles.linkText}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> openwebsite('https://instagram.com/mhd_zh__han')}
                    >
                        <Text style={styles.linkText}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    card: {
        width: '95%',
        height: 430,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 11,
    },
    elevatedCard: {
        backgroundColor: '#fff',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: .4,
    },
    titleContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    cardTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardBody: {
        padding: 10,
    },
    cardDescription: {
        color: '#000',
    },
    cardFooter: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    linkText: {
        color: '#fff',
        fontSize: 16,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 6, 
        borderRadius: 6,
    },
})