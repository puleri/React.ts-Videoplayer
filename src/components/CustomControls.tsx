import { useState, FC } from 'react'
import './styles.css'

export default function CustomControls(props: any) {

  return (
    <div className="controller-wrapper">

      <div className="play/pause">
        {props.playing && <p onClick={props.handlePause}><i className="fa fa-pause text-white" /></p>}
        {!props.playing && <p onClick={props.handlePlay}><i className="fa fa-play text-white" /></p>}
      </div>

      <div className="volume">
        {props.volume > 50 && <i className="fa fa-volume-up"/>}
        {props.volume == 0 && <i className="fa fa-volume-mute"/>}
        {props.volume <= 50 && <i className="fa fa-volume-down"/>}
      </div>
      <input
        className="volume-range"
        type="range"
        min={0} max={100}
        value={props.volume}
        onInput={ (e) => props.handleVolumeChange(e) }
        />

    </div>
  )
}
