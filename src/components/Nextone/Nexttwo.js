import React from "react";
import fill from "../../assests/img/Home/fill.svg";
import white from "../../assests/img/Home/white.svg";
import wone from "../../assests/img/Home/wone.svg";
import wtwo from "../../assests/img/Home/wtwo.svg";
import wthree from "../../assests/img/Home/wthree.svg";
import wfour from "../../assests/img/Home/wfour.svg";
const Nexttwo = () => {
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
  <div class="active-tab">
  <div class="tab-current">
  <img src={white} alt=""/>
  </div>
  <div class="detail">
  <div class="grace">Step 2/6</div>
  <div class="title">Set Tip Sizes</div>
  </div>
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
  <h2 class="form-heading">Set Tip Sizes</h2>
  <p class="paragraph-header">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
  </div>
  <div class="sizes-div">
  <div class="size-item">
  <div class="text-block">$1</div>
  <div>Small </div>
  </div>
  <div class="size-item">
  <div class="text-block">$3</div>
  <div>Med</div>
  </div>
  <div class="size-item">
  <div class="text-block">$5</div>
  <div>Large </div>
  </div>
  </div>
  </div>
  <div class="base">
  <a href="/Nextone" class="back-button m-button"><div>Back</div></a>
  <a href="/Nextthree" class="next-button s-button">Next Step</a>
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

export default Nexttwo;