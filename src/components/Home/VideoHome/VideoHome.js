import React, {useState, useEffect} from "react";

import logs from "../../../assests/img/Home/logs.svg";
import hon from "../../../assests/img/Home/hon.svg";
import but from "../../../assests/img/Home/but.svg";
import earing from "../../../assests/img/Home/earing.svg";
const VideoHome = () => {
   
    return (
        <>
            <div class="background">
            <div class="container">
            <div class="row">
            <div class="col-lg-2">
            <div class="pane">
            <a href="#" class="link-2 inline">
            <img src={logs} alt=""/></a>
            <a href="#" class="link inline">
            <img src={hon} alt="" class="image-2"/>
            <div>Home</div>
            </a>
            <a href="#" class="link inline">
            <img src={but} class="image-2"/>
            <div>Buttons</div>
            </a>
            <a href="#" class="link inline">
            <img src={earing} alt="" class="image-2"/>
            <div>Earnings</div>
            </a>
            </div>
           </div>
            <div class="col-lg-10">
            <div class="top-bar"></div>
            <div class="block-4">
            <h1>Items</h1>
            <div class="block-6">
            <a href="/Nextone" class="button w-button">Add a new Item</a>
            </div>
            </div>
 </div>
           
          
          

            </div>

            </div>

            </div>
        </>
    );
};

export default VideoHome;
