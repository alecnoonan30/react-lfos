import React from "react";
import "../App.css";
import "../index.css";
import LFOSVIDEO from "../homeVid/LFOSVIDEO.mp4";

function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

export default function Video() {
  return (
        <video className="homevideo" autoPlay loop muted playsInline>
          <source src={LFOSVIDEO} type="video/mp4"></source>
        </video>
  );
}
