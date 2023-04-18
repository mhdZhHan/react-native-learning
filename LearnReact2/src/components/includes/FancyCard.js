import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.title}>Trending cars</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={require('../../assets/images/car05.jpg')} 
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>The car</Text>
                    <Text style={styles.cardLabel}>car</Text>
                    <Text style={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis natus excepturi voluptatibus numquam adipisci accusantium?
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: '95%',
        height: 430,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 11,
    },
    cardElevated: {
        backgroundColor: '#fff',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        }
        
    },
    cardImage: {
        resizeMode: 'cover',
        height: 240,
        width: '100%',
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        paddingHorizontal: 12,
        flexGrow: 1,
    },
    cardTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000',
        fontSize: 15,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 13,
        marginBottom: 12,
        marginTop: 6,
        lineHeight: 28,
    },
    cardFooter: {
        color: '#000',
    },
})