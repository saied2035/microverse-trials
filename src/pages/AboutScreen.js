import React from "react";
import './about.css'
export default function AboutScreen() {
  return (
    <div
      className="flex justify-center items-center about-container"
    >
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/f9ip1iSAptQ`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
