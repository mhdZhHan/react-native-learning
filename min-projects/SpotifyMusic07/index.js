/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

// trackplayer
import TrackPlayer from 'react-native-track-player'
import { musicPlayerServices } from './musicPlayerServices'


AppRegistry.registerComponent(appName, () => App)

TrackPlayer.registerPlaybackService(() => musicPlayerServices)