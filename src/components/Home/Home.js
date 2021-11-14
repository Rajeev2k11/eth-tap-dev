import React from "react";

import HeaderHome from "../Header/HomeHeader";
import Taps from "./Taps";
import VideoHome from "./VideoHome/VideoHome";


const Home = () => {
    return (
        <div class="background">
            <div class="container">
            <div class="row">
                <VideoHome/>
                <div id="home" class="col-lg-10">
            <div class="top-bar"></div>
            <div id="home" class="block-4">
            <span className="h1">Items</span>
            <div class="block-6">
            <a href="/Nextone" class="button w-button">Add a new Item</a>
            </div>
            </div>

         
 </div>
            </div>
            </div>
        </div>
    );
};

export default Home;