import React, {Component} from 'react';
import './slider.css';

class Slider extends Component
{

  render()
  {

    return(

          <div className="slideshow-container">

                <div className="mySlides">
                <img src="./img/ios1.jpg" width="100%" />
                </div>

                <div className="mySlides">
                <img src="./img/slider.png"  width="100%"/>
                </div>

                <div className="mySlides">
                <img src="./img/training.jpg"  width="100%"/>
                </div>

                <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>
          </div>
          );
  }
}
export default Slider;
