import { useRef, useState, FC } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'
import KrakenContain from './components/KrakenContain';


// "Function component"
const App:FC = () => {


  // const handlePlay = () => {
  //   if (state.totalDurationOfVideo === 0) {
  //     setState({ ...state, totalDurationOfVideo: video.current.getDuration() })
  //   }
  // }


  return (
    <div className="App">

        <KrakenContain />

    </div>
  );
}

export default App;
