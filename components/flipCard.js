import React, { useEffect } from 'react';
import '../styles/flipCard.scss';

export default function FlipCard(){
      useEffect(() => {
            const script = document.createElement('script');

            script.src = "https://kit.fontawesome.com/5f7c1e951c.js";
            script.async = true;

            document.body.appendChild(script);

            return () => {
                  document.body.removeChild(script);
            }
      }, []);
      return(
            <div>
                  <div className="card middle">
                        <div className="front">
                              <img src="/static/planet.jpg" />
                        </div>
                        <div className="back">
                              <div className="back-content middle">
                                    <h2>Código das Trevas</h2>
                                    <span>Artcode Work</span>
                                    <div className="sm">
                                          <a href="#"><i class="fab fa-facebook"></i></a>
                                          <a href="#"><i class="fab fa-twitter"></i></a>
                                          <a href="#"><i class="fab fa-youtube"></i></a>
                                          <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                              </div>

                        </div>
                        
                  </div>
            </div>
      )
}