import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { playbackService } from '../../../musicPlayerServices'

export default function ControlCenter() {
    const playbackstate = usePlaybackState()

    // next button
    const skipToNext = async ()=>{
        await TrackPlayer.skipToNext()
    }

    // previous button
    const skipToPrevious = async ()=>{
        await TrackPlayer.skipToPrevious()
    }

    // paly pause toggle
    const togglePlayback = async (playback)=>{
        const currentTrack = await TrackPlayer.getCurrentTrack()
        if(currentTrack !== null){
            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play()
            }else {
                await TrackPlayer.pause()
            }
        }
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={skipToPrevious}
            >
                <Icon 
                    style={styles.icon}
                    name="skip-previous"
                    size={40}
                />
            </Pressable>
            <Pressable
                onPress={()=> togglePlayback(playbackstate)}
            >
                <Icon 
                    style={styles.icon}
                    name={playbackstate === State.Playing ? "pause" : "play-arrow"}
                    size={75}
                />
            </Pressable>
            <Pressable
                onPress={skipToNext}
            >
                <Icon 
                    style={styles.icon}
                    name="skip-next"
                    size={40}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})