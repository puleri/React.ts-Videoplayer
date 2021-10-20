import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <ReactPlayer
      controls
      width='i640px'
      height='540px'
      onReady={() => console.log('ready')}
      onStart={() => console.log('start')}
      onPause={() => console.log('pause')}
      onEnded={() => console.log('ended')}
      onError={() => console.log('error')}
      url='https://www.youtube.com/watch?v=bn-DQCifeQQ&ab_channel=KevinPowell' />
    </div>
  );
}

export default App;
