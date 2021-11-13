import React from "react";
import fill from "../../assests/img/Home/fill.svg";
import fil from "../../assests/img/Home/fil.svg";
import whites from "../../assests/img/Home/whites.svg";
import wtwo from "../../assests/img/Home/wtwo.svg";
import wthree from "../../assests/img/Home/wthree.svg";
import wfour from "../../assests/img/Home/wfour.svg";
const Nextthree = () => {
    return (
        <>
      
       <section>
       <div class="container">
       <div class="row">
       <div class="col-lg-12">
       <div id="flowbase" class="wrapper w-link">
       <div class=" w-line">
  <div class=" slide-wrapper">
  <div class="slide-content">
  <div class="contents">
  <div class="slide-detail">

  <div class="slider-tab" id="p-1">
  <img src={fill}  alt="" class="tab-icon"/>
  </div>
  
  <div class="line-break">
  </div>
  <div  class="slider-tab" id="p-1">
  <img src={fil} alt="" class="tab-icon"/>
  </div>
  
  <div class="line-break"></div>
  <div class="active-tab">
  <div class="tab-current">
  <img src={whites} alt=""/>
  </div>
  <div class="detail">
  <div class="grace">Step 3/6</div>
  <div class="title">Button Shape</div>
  </div>
  </div>
  <div class="line-break">

  </div>
  <div  class="slider-tab">
  <img src={wtwo} alt="" class="tab-icon"/>
  </div>
  <div class="line-break">

  </div>
  <div  class="slider-tab">
  <img src={wthree} alt="" class="tab-icon"/>
  </div>
  <div class="line-break">

  </div>
  <div  class="slider-tab">
  <img src={wfour} alt="" class="tab-icon"/>
  </div>
  </div>
  <div class="form-wrap">
  <div class="title-wrap">
  <h2 class="form-heading">Select a Button Shape</h2>
  
  </div>
  <div class="grid grid-two-column">
  <label class="box field">
    <div class="box-input box-input--inputType-custom large-box yes">
    </div>
    <input type="checkbox" id="Content Yes" name="Content-Yes"/>
    <span for="Content-Yes" class="checkbox-label w-form-label">Square Corners</span>
  </label>
  <label class="box field"><div class="box-input box-input--inputType-custom large-box no">
    </div>
    <input type="checkbox" id="Content No" name="Content-No" />
    <span for="Content-No" class="checkbox-label w-form-label">Round Corners</span>
  </label>
</div>
 
  </div>
  <div class="base">
  <a href="/Nexttwo" class="back-button m-button"><div>Back</div></a>
  <a href="/Nextfour" class="next-button s-button">Next Step</a>
  </div>
  </div>
  </div>
  </div>
  </div>
       </div>
       </div>
       </div>

       </div>

       </section>
        </>
    );
};

export default Nextthree;