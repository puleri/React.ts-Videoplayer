import React, { FC, useState } from 'react'
import ReactPlayer from 'react-player';
import CustomControls from './CustomControls'

const Player:FC = () => {
const [state, setState] = useState({
    isPlay: false,
    currentSeek: 0,
    volumeBar: 0,
    volume: 0,
    totalDurationOfVideo: 0,
    muted: false
  })

const handleOnProgress = (e: any) => {
    setState({ ...state, currentSeek: e.playedSeconds })
  }

  const handleVolumeChange = (e: any) => {
    setState({ ...state, volume: e.target.value / 100, volumeBar: e.target.value })
    console.log(state.volume)
  }
  return (
<div className="playerContainer">

        <ReactPlayer
        className="videoBox"
        controls
        volume={state.volume}
        muted={state.muted}
        playing={state.isPlay}
        onProgress={(e) => handleOnProgress(e) }
        onReady={() => console.log('ready')}
        onStart={() => console.log('start')}
        onPause={() => console.log('pause')}
        onEnded={() => console.log('ended')}
        onError={() => console.log('error')}
        url='https://www.youtube.com/watch?v=bn-DQCifeQQ&ab_channel=KevinPowell'
        />

        <CustomControls handleVolumeChange={handleVolumeChange} handlePlay={() => console.log('play')}/>

      </div>
    )
}
