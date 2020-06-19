import React, { useState, useEffect} from 'react';
import '../styles/slider.scss';
import ImgComp from './imgComp';


export default function Slider() {
      let sliderArr = [
            <ImgComp src={"/static/slide/1.jpg"} />,
            <ImgComp src={"/static/slide/2.jpg"} />,
            <ImgComp src={"/static/slide/3.jpg"} />,
            <ImgComp src={"/static/slide/4.jpg"} />,
            <ImgComp src={"/static/slide/5.jpg"} />,
            <ImgComp src={"/static/slide/6.jpg"} />
      ];
      const [x, setX] = useState(0);
      const goLeft = () =>{
            x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
            console.log(x);
            //setX(x + 100);
      };
      const goRight = () =>{
            x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
            console.log(x);
      }

      useEffect(() => {
            const script = document.createElement('script');
          
            script.src = "https://kit.fontawesome.com/d8de2d9986.js";
            script.async = true;
          
            document.body.appendChild(script);
          
            return () => {
              document.body.removeChild(script);
            }
          }, []);
      return (
            <div className="slider">
                  {
                        sliderArr.map((item, index) => {
                              return (
                                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                                          {item}
                                    </div>

                              );
                        })
                  }
            <button id="goLeft" onClick={goLeft}><i class="fas fa-angle-double-left"></i></button>
            <button id="goRight" onClick={goRight}><i class="fas fa-angle-double-right"></i></button>
            </div>
      )
}