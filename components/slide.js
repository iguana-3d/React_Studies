import React, { useState, useEffect } from 'react';
import '../styles/slide.scss';
// import $ from 'react-dom'

export default function Slide() {
      //src="https://code.jquery.com/jquery-3.4.1.js"


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
            // <div className="gridSlide">
            //       <img src="/static/slide/1.jpg" />
            //       <img src="/static/slide/2.jpg" />
            //       <img src="/static/slide/3.jpg" />
            //       <img src="/static/slide/4.jpg" />
            //       <img src="/static/slide/5.jpg" />
            //       <img src="/static/slide/6.jpg" />
            // </div>
            
            <div className="slide hi-slide">
                  <div className="hi-prev"></div>
                  <div className="hi-next"></div>
                  <ul>
                        <li>
                              <img src="/static/slide/1.jpg" alt="" />
                        </li>
                        <li>
                              <img src="/static/slide/2.jpg" alt="" />
                        </li>
                        <li>
                              <img src="/static/slide/3.jpg" alt="" />
                        </li>
                        <li>
                              <img src="/static/slide/4.jpg" alt="" />
                        </li>
                        <li>
                              <img src="/static/slide/5.jpg" alt="" />
                        </li>
                        <li>
                              <img src="/static/slide/6.jpg" alt="" />
                        </li>
                        <li>
                              <img src="/static/slide/5.jpg" alt="" />
                        </li>

                  </ul>

            </div>
      )
}