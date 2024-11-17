import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { hideAsync } from 'expo-splash-screen';

type Props = {
    onComplete: (status: boolean) => void;
}

export function Splash({onComplete}: Props) {
    const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
    const [loop, setLoop] = useState(0);
    function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
        if (status.isLoaded) {
            if (lastStatus.isLoaded !== status.isLoaded) {
                hideAsync();
            }
            if (status.didJustFinish){
                setLoop(loop+1)
                console.log(loop)
                if(loop===1){
                    onComplete(true);
                }
            }
        }
    }
    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/juntossplashvideo.mp4')}
            isLooping={true}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    )
}