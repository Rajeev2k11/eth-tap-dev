import React from "react";
import Wq from "../../assests/img/Home/Wq.svg";
import Wqq from "../../assests/img/Home/Wqq.svg";
import wone from "../../assests/img/Home/wone.svg";
import wtwo from "../../assests/img/Home/wtwo.svg";
import wthree from "../../assests/img/Home/wthree.svg";
import wfour from "../../assests/img/Home/wfour.svg";
const Nextone = () => {
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
  <div class="active-tab">
  <div class="tab-current">
  <img src={Wq}  alt=""/>
  </div>
  <div class="detail">
  <div class="grace">Step 1/6</div>
  <div class="title">Select Type</div>
  </div></div>
  <div class="line-break">
  </div>
  <div  class="slider-tab">
  <img src={Wqq} alt="" class="tab-icon"/>
  </div>
  <div class="line-break"></div>
  <div  class="slider-tab">
  <img src={wone} alt="" class="tab-icon"/>
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
  <h2 class="form-heading">Select an Item</h2>
  <p class="paragraph-header">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
  </div>
  <div class="grid grid-three-column">
  <label class="box field">
  <div class="box-input box-input--inputType-custom large-box"></div>
  <input type="checkbox" id="Design" name="Design"/>
  <span for="Design" class="box-label labels">Download</span>
  </label>
  <label class="box field">
  <div class="box-input box-input--inputType-custom large-box option-02"></div>
  <input type="checkbox" id="Development" name="Development"/>
  <span for="Development" class="box-label labels">Tip Jar</span>
  </label><label class="box field">
  <div class="box-input box-input--inputType-custom large-box option-03"></div>
  <input type="checkbox" id="Other" name="Other" />
  <span for="Other" class="box-label labels">Blog</span></label>
  </div>
 </div>
 
  <div class="base">
  <a href="/Nexttwo" class="next-button s-button">Next Step</a>
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

export default Nextone;