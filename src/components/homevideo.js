import React from "react";
import "../App.css";
import "../index.css";
import LFOSVIDEO from "../homeVid/LFOSVIDEO.mp4";


export default function Video() {
  return (
    <video className="homevideo" autoPlay loop muted playsInline>
      <source src={LFOSVIDEO} type="video/mp4"></source>
    </video>
  );
}
