import React from 'react';
import './Banner.css';
import MEVS from './MEVS.avif'
function Banner(){
 
    return (
      <div>
          <section>
            <div id='image-container'>
              <img src={MEVS} alt='banner' id='imagecover'></img>
              <img src={MEVS} alt='foreground' id='foreground-image'></img>
            </div>
          </section>
      </div>
    );
}

export default Banner;
