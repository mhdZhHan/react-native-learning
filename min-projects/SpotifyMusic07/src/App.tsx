import 
{ 
    ActivityIndicator, SafeAreaView, 
    StatusBar, 
    StyleSheet
} from 'react-native'
import React, { useState, useEffect } from 'react'

import { setupPlayer, addTrack } from '../musicPlayerServices'

// cmponents (screens)
import MusciPlayer from './components/screens/MusciPlayer'

export default function App() {
    const [isPlayerRedy, setIsPlayerRedy] = useState(false)

    async function setup() {
        let isSetup = await setupPlayer()
        if (isSetup){
            await addTrack()
        }

        setIsPlayerRedy(isSetup)
    }

    useEffect(()=>{
        setup()
    }, [])

    if(!isPlayerRedy){
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <MusciPlayer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})