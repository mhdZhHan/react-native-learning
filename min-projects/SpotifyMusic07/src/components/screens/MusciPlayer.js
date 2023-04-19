import { 
    Dimensions, 
    FlatList, 
    Image, 
    StyleSheet, 
    View 
} from 'react-native'
import React, { useState } from 'react'

// trackplayer
import TrackPlayer, { 
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'

// constants
import { playListData } from '../../Constants'

// components (includes)
import SongInfo from '../includes/SongInfo'
import ControlCenter from '../includes/ControlCenter'
import SongSlider from '../includes/SongSlider'


const { width } = Dimensions.get('window')

export default function MusciPlayer() {
    const [track, setTrack] = useState(null)

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event)=> {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break
        }
    })

    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {
                        track?.artwork && (
                            <Image 
                                style={styles.albumArtImg}
                                source={track?.artwork}
                            />
                        )
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()}                   
            />
            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
})