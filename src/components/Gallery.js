import React from 'react';
import Man from '../resources/man.png';
import Burg from '../resources/burg.png';
import Dish from '../resources/dish.png';
// import Man from '../resources/man.png';
import Brush from '../resources/Brush_1_.png';

function Gallery() {
  return (
    <div style={{ backgroundColor: '#ffaa00', position: 'fixed', width: '100%', height: '100%' }}>
      <div class="parent" id="boxes" style={{marginTop: '10%', marginLeft: '20%',}}>
        <div class="child" id="column1">
          <img class="" src={Man} alt="Snow" alt="Hot Burger" width="50" height="50" />
          <h6>Free shipping on
first order</h6>
        </div>
        <div class="child" id="column2">
          <img class="" src={Burg} alt="Snow" alt="Hot Burger" width="50" height="50" />
          <h6>30 min delivery</h6>

        </div>
        <div class="child" id="column3">
          <img class="" src={Dish} alt="Snow" alt="Hot Burger" width="50" height="50" />
          <h6>Best quality
guarantee</h6>

        </div>
        <div class="child" id="column4">
          <img class="" src={Dish} alt="Snow" alt="Hot Burger" width="50" height="50" />
          <h6>Variety of
dishes</h6>

        </div>
        <div class="child" id="column5">
          <img class="" src={Dish} alt="Snow" alt="Hot Burger" width="50" height="50" />
          <h6>Variety of
dishes</h6>

        </div>
      </div>

    </div>

  );
}

export default Gallery;