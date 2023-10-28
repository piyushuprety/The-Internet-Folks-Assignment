import { useState } from "react";
import { Platter } from "./Platter";

import platterData from './data';

export const LatestArticles = () => {
    
    const [currentSlider, setCurrentSlider] = useState(0);
    const current = platterData.filter((ele) => ele.id < 4);
    const [currentP, setCurrentP] = useState(current);
   const clickRight=()=>{
        setCurrentSlider(1);
        const Newcurrent = platterData.filter((ele) => ele.id > 3);
        setCurrentP(Newcurrent);
   }
   const clickLeft = ()=>{
     setCurrentSlider(0);
     setCurrentP(current);
   }
  return (
    <div className="latestArticles">
      <div className="lContent">
        <p className="lTitle">Latest Articles</p>
        <Platter data={currentP} />
      </div>
      <div className="controller">
        <img
          className="leftArrow"
          onClick={clickLeft}
          src={
            !currentSlider 
              ? './assets/blocked-left.png'
              : './assets/left.png'
          }
          alt="left"
        />
        <p className="sliderPosition">{currentSlider + 1}/2</p>
        <img
          className="rightArrow"
          onClick={clickRight}
          src={
            !currentSlider ? './assets/right.png' : './assets/blocked-right.png'
          }
          alt="right"
        />
      </div>
    </div>
  );
}