import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function EventInvitation() {
  const [interestedHovered, setInterestedHovered] = useState(false);
  const [goingHovered, setGoingHovered] = useState(false);
  const [interestedCount, setInterestedCount] = useState(0);
  const [goingCount, setGoingCount] = useState(0);
  const [interestedClicked, setInterestedClicked] = useState(false);
  const [goingClicked, setGoingClicked] = useState(false);

function handleInterestedClick(){
    if(!interestedClicked) {
    setInterestedCount(interestedCount + 1)
    setInterestedClicked(true);
    ;
  }
}

function handleGoingClick(){
    if(!goingClicked) {
    setGoingCount(goingCount + 1)
    setGoingClicked(true);
  }
}

function handleInterestedKeyDown(e){
  if (e.key === " " || e.key === "SpaceBar") {
    e.target.style.backgroundColor = "#000112";
    e.target.style.color = "white";
}
}

function handleInterestedKeyUp(e) {
  if (e.key === " " || e.key === "SpaceBar") {
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#efefef";
}
}

function handleGoingKeyDown(e){
  if (e.key === " " || e.key === "SpaceBar") {
    e.target.style.backgroundColor = "#000112";
    e.target.style.color = "white";  
}
}
function handleGoingKeyUp(e){
  if (e.key === " " || e.key === "SpaceBar") {
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#efefef";
}  
}

function handleInterestedMouseEnter() {
  setInterestedHovered(true);
}

function handleInterestedMouseLeave(){
  setInterestedHovered(false);
}

function handleGoingMouseEnter(){
  setGoingHovered(true);
}

function handleGoingMouseLeave(){
  setGoingHovered(false);
}

function handleInterestedFocus(){
    setInterestedHovered(true);
}

function handleInterestedBlur() {
  setInterestedHovered(false);
}

function handleGoingFocus(){
  setGoingHovered(true);
}

function handleGoingBlur(){
setGoingHovered(false);
}

  return (
    <div className="container">
      <div className="hero-image">
        <img
          src="https://i.imgur.com/LAi9iHS.jpeg"
          alt="Event"
          style={{ height: "200px" }}
        />
      </div>
      <div className="description">
        <h2>You're invited to WaterFest! 🏝️</h2>
        <p>
          The hardest part is showing up. After you're here, you've already won.
          Join other winners like you for a weekend of fun and relaxation!
        </p>
      </div>
      <div className="buttons-container">
        <button
          tabIndex="0"
          onClick={handleInterestedClick}
          className={`interested-button ${interestedHovered ? "hovered" : ""}`}
          onMouseEnter={handleInterestedMouseEnter} 
          onKeyDown={handleInterestedKeyDown}
          onKeyUp={handleInterestedKeyUp}
          onMouseLeave={handleInterestedMouseLeave}
          onFocus={handleInterestedFocus}
          onBlur={handleInterestedBlur}
        >
          Interested ({interestedCount})
        </button>
        <button
          tabIndex="0"
          className={`going-button ${goingHovered ? "hovered" : ""}`}
          onClick={handleGoingClick}
          onKeyDown={handleGoingKeyDown}
          onKeyUp={handleGoingKeyUp}
          onMouseEnter={handleGoingMouseEnter} 
          onMouseLeave={handleGoingMouseLeave}
          onFocus={handleGoingFocus}
          onBlur={handleGoingBlur}
        >
          Going ({goingCount})
        </button>
      </div>
    </div>
  );
}
