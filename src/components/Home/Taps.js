import React ,{useState} from 'react'
import VideoHome from './VideoHome/VideoHome'
import "../../App.css"
import Widget from './Widget'
function Taps() {
    const [count] =useState([1,2,3]);
    return (
        <>
        <div class="background">
            <div class="container">
            <div class="row">
                <VideoHome/>
                <div id="home" class="col-lg-10">
            <div class="top-bar"></div>
            <div class="block-4">
            <span className="h1">Items</span>
            <div className="row">
            {count.map((x)=><div className="col-sm-4">
                <Widget id={x}/>
            </div>)}
            </div>
           
            
          


            </div>

         </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Taps
