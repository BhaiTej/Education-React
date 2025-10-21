import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null)
  const videoRef = useRef(null)

  const closePlayer = (e) => {
    if (e.target === player.current) {
      videoRef.current.pause()
      setPlayState(false)
    }
  }

  
  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} controls muted autoPlay  ></video>
    </div>
  )
}

export default VideoPlayer
