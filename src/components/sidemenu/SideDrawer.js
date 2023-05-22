import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
       <ul>
       <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/user">Academics</a>
          </li>
          <li>
            <a href="/admission">Admission</a>
          </li>
          <li>
            <a href="/staff">Staff</a>
          </li>
        
          <li>
            <a href="/photogalary">Photo Galary</a>
          </li>

          <li>
            <a href="/contactus">Contact Us</a>
          </li>



          <li>
            <a href="">Hide Me</a>
          </li>
            
         
        </ul>
        
    </nav>
  );
};
export default sideDrawer;
