import React, {useState, useEffect} from "react";

import logs from "../../../assests/img/Home/logs.svg";
import hon from "../../../assests/img/Home/hon.svg";
import but from "../../../assests/img/Home/but.svg";
import earing from "../../../assests/img/Home/earing.svg";
import { Link } from "react-router-dom";
const VideoHome = () => {
   
    return (
        <>
            
            <div class="col-lg-2">
            <div class="pane">
            <a href="#" class="link-2 inline">
            <img src={logs} alt=""/></a>
            <Link to="/" class="link inline">
            <img src={hon} alt="" class="image-2"/>
            <div>Home</div>
            </Link>
            <Link to="/taps" class="link inline">
            <img src={but} class="image-2"/>
            <div>Taps</div>
            </Link>
            <Link to="#" class="link inline">
            <img src={earing} alt="" class="image-2"/>
            <div>Earnings</div>
            </Link>
            </div>
           </div>
            
           
          
          

          
        </>
    );
};

export default VideoHome;
