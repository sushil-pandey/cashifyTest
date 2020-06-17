import React from 'react';
import Brush from '../resources/Brush_1_.png';
import women from '../resources/women.png';
import Curly from '../resources/curly.png';

function Testimonial() {

  return (


    <div>
      <div class="clientTest" >Client Testimonials</div>

      <div className="Brush_1_">
        <img src={Brush} alt="Snow" alt="Hot Burger" />
      </div>

      <div class="TryOut" >Try our Most Delicious food and it usually take minutes to deliver!</div>
    <div className="rectangular" style={{position: 'absolute', zIndex: -10,marginLeft: '5%',marginTop: '10%'}}></div>
        <div style={{marginLeft: '10%'}}>
          <img class="square" src={women} alt="Snow" alt="Hot Burger" width="270" height="256" />
          <div class="text" style={{marginLeft: '25%'}}>
            <img class="" src={Curly} alt="Snow" alt="Hot Burger" width="40" height="40" />
            <h6 className="sedPers" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </h6>

            <p> Nina marget</p>
            <p className="sedPers" style={{marginTop: -15,marginLeft: -2}}>CEO, ABC Company</p>
          </div>


        </div>
    </div>
  );
}

export default Testimonial;