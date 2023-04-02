// import { Text, SafeAreaView, StyleSheet } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <SafeAreaView
//         style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}, styles.container]}
//     >
//         <Text style={[styles.Text, {color: 'teal', fontSize: 50}]}>Hello World</Text>
//         <Text style={styles.Text}>Hello World</Text>
//         <Text style={styles.MyText}>Hello World</Text>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//     },
//     Text: {
//         color: 'rgb(167, 100, 255)',
//         fontSize: 40,
//     },
//     MyText: {
//         color: "tomato",
//         fontSize: 40,
//         fontStyle: "italic",
//         fontWeight: '900',
//         textAlign: "left",
//         textDecorationLine: "underline line-through",
//         lineHeight: 70,
//         letterSpacing: 2,
//         textTransform: 'uppercase',
//     }
// })


// ============================== FLEX ==========================================
// import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
// import React from 'react'

// export default function App() {
//     return (
//         <SafeAreaView style={styles.Container}>
//             <View style={styles.Box1}>
//                 <Text style={styles.Text}>Box1</Text>
//             </View>
//             <View style={styles.Box2}>
//                 <Text style={styles.Text}>Box1</Text>
//             </View>
//             <View style={styles.Box3}>
//                 <Text style={styles.Text}>Box1</Text>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     Container: {
//         backgroundColor: 'crimson',
//         flex: 1,
//     },
//     Text: {
//         color: "#fff", 
//         fontSize: 55, 
//         fontWeight: '900',
//         textAlign: 'center',
//         marginTop: 20,
//     },
//     Box1: {
//         backgroundColor: 'teal',
//         flex: 1,
//     },
//     Box2: {
//         backgroundColor: 'crimson',
//         flex: 2,
//     },
//     Box3: {
//         backgroundColor: 'tomato',
//         flex: 3,
//     },
// })


// ===================== (GET, POST, AXIOS, ASYNCSTORAGE) ==============================================
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

// assets
import Logo from './src/assets/icons/manjaro.svg'

export default function App() {
    const [input, setInput] = useState('')
    const [newData, setNewData] = useState('')

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const addPost = ()=>{
        axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                title: 'Hello',
                body: 'hello world',
                userId: 1,
            })
            .then((res)=>{
                console.log("=======NEW POST ADDED======",res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const storeData = async ()=>{
        try{
            if(input){
                await AsyncStorage.setItem('itemList', input)
                setInput('')
                console.warn("DATA STORED")
                await getData()
            }else{
                console.warn('Type something')
            }
        }catch(err){
            // any err
        }
    }

    const getData = async ()=>{
        try{
            const data = await AsyncStorage.getItem('itemList')
            setNewData(data)
        }catch(err){
            // any err
        }
    }
    return (
        <View style={styles.Container}>
            <Text style={{color: '#fff', fontSize: 40,fontFamily: 'Ubuntu-Bold'}}>SVG IN REACT NATIVE</Text>
            <Logo width={200} height={200} />
            <TouchableOpacity style={styles.Button} onPress={addPost}>
                <Text style={{fontSize: 20}}>Add Post</Text>
            </TouchableOpacity>
            <TextInput 
                onChangeText={setInput}
                style={styles.Input}
                placeholder="Type here:"
            />
            <TouchableOpacity 
                onPress={storeData} 
                style={styles.Button_}
            >
                <Text style={{fontSize: 20, color: '#fff', fontWeight: '900'}}>Add</Text>
            </TouchableOpacity>
            <Text style={{fontFamily: 'Ubuntu-Regular'}}>Stored data: {newData}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    Button: {
        backgroundColor: 'teal',
        color: '#fff',
        padding: 20,
    },
    Input: {
        borderWidth: 2,
        borderColor: '#fff',
        width: '80%',
        height: 50,
        margin: 12,
        color: '#fff'
    },
    Button_: {
        width: '80%',
        height: 50,
        backgroundColor: 'crimson',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        fontFamily: 'Ubuntu-Bold',
    }
})