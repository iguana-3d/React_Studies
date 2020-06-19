import React, { useEffect } from 'react';
import '../styles/responsiveBar.scss';

export default function ResponsiveBar() {



      const menu = () => {
            let sidebar = document.querySelector("#sidebar");
            sidebar.style.transform = "translateX(0)";
      }
      const close = () => {
            let sidebar = document.querySelector("#sidebar");
            let close_span = document.querySelector("#close_span");
            sidebar.style.transform = "translateX(-100%)";
            close_span.style.opacity = 0;
            close_span.style.pointerEvents = "none";
      }
      const sidebar = () => {
            close_span.style.opacity = 1;
            close_span.style.pointerEvents = "all";
      }
      const sidebar2 = () => {
            close_span.style.opacity = 0;
      }
      const sidebar3 = () => {
            close_span.style.opacity = 1;
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
            <div className="container">
                  <nav>
                        <i id="menu" onClick={menu} className="fas fa-bars"></i>
                  </nav>
                  <section id="sidebar" onMouseOver={sidebar} onMouseOut={sidebar2}>
                        <span>
                              <i id="close_span" onClick={close} onMouseOut={sidebar3} class="fa fa-close"></i>
                        </span>
                        <ul id="items">
                              <li>< a href="#"><i class="fas fa-home"></i>Home</a></li>
                              <li>< a href="#"><i class="fas fa-desktop"></i>Pedidos</a></li>
                              <li>< a href="#"><i class="fas fa-blog"></i>Blog</a></li>
                              <li>< a href="#"><i class="fas fa-shopping-cart"></i>Carrinho</a></li>
                              <li>< a href="#"><i class="fas fa-id-card-alt"></i>About</a></li>
                        </ul>
                        <ul id="social">
                              <i class="fab fa-facebook"></i>
                              <i class="fab fa-twitter"></i>
                              <i class="fab fa-instagram"></i>
                              <i class="fab fa-reddit"></i>
                              <i class="fab fa-youtube"></i>
                        </ul>
                  </section>
                  
            </div>
      )
}