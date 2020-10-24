import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./MainPanel.css";

function MainPanel() {
  return (
    <div className="intro-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>MOUNTAIN PASSION</h1>
      <p>Enjoy mountain posts and photos!</p>
      <div className="intro-btns">
        <Button className="btn-outline" to="/">
          CHECKOUT THESE PLACES
        </Button>
        <Button className="btn-primary" to="/">
          WATCH MY FILM <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default MainPanel;
