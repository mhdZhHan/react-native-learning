import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Mohammed',
            status: 'Never give up',
            imageUrl: require('../../assets/avatar/avatar.jpg')
        },
        {
            uid: 2,
            name: 'Liviya',
            status: 'Never give up',
            imageUrl: require('../../assets/avatar/avatar.jpg'),
        },
        {
            uid: 3,
            name: 'John',
            status: 'Never give up',
            imageUrl: require('../../assets/avatar/avatar.jpg'),
        },
        {
            uid: 4,
            name: 'Liyana',
            status: 'Never give up',
            imageUrl: require('../../assets/avatar/avatar.jpg'),
        },
    ]
    return (
        <View>
            <Text style={styles.title}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {
                    contacts.map(({uid, name, imageUrl, status})=>(
                        <View key={uid} style={styles.userCard}>
                            <Image 
                                source={imageUrl}
                                style={styles.uerImage}
                            />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>

                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        backgroundColor: '#50DBB4',
        padding: 8,
        borderRadius: 10,
    },
    uerImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    userStatus: {
        fontSize: 12,
    },
})