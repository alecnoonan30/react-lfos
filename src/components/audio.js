import React, {Component} from "react";
import '../App.css';
import '../index.css'
import '../Info.css'
import LFOSaudio from "../fileAudio/LFOSaudio.mp3";
import { Image } from 'react-bootstrap';


class AudioButton extends Component {
    state = {
  
      audio: new Audio(LFOSaudio),
  
      isPlaying: false,

    };
  
    // Handles both play and pause operations
    playPause = () => {
  
      let isPlaying = this.state.isPlaying;
  
      if (isPlaying) {
        this.state.audio.pause();
      } else {
  
        this.state.audio.play();
      }
  
      this.setState({ isPlaying: !isPlaying });
    };
  
    render() {
      return (
            <button className="tagaudio" onClick={this.playPause}>
              <Image className="click" fluid src="./images/ArtboardSound2.png" alt="" />
            </button>
      );
    }
  }
  
  export default AudioButton;