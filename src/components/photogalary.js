import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import n1 from "./img/nes_01.png";
import n2 from "./img/nes_02.png";
import n3 from "./img/nes_03.png";
import n4 from "./img/nes_04.png";
import n5 from "./img/nes_05.png";
import n6 from "./img/nes_06.png";
import "./styles.css";


const im = [ n1,n2, n3,n4,n5,n6];
export default function photogalary() {
  
   return (
    <main style={{ marginTop: "64px" }}>
      <div className="responsive-image"   >
        <p align="center"><h1>Photo Gallery</h1></p>
         
        <Carousel className="responsive-image" useKeyboardArrows={true}>
          {im.map((URL, index) => (
            <div className="responsive-image"   >
              <img alt="sample_file" src={URL} key={index}  className="responsive-image"  />
            </div>
           
          ))}
        </Carousel>
       
      </div> </main>
    );
  }
//export default photo_galary;
