import React from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import "./ToolBar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import slogo from "./img/nes_logo_s.png";
import About from "./about";
import Home from "./Home";
import Staff from "./staff";
import contactus from "./contactus";
import photogalary from "./photogalary";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  } from './NavbarElements';

const toolbar = props => (

  
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
     <div className="toolbar_logo"><img src={slogo} alt="Logo" /></div> 
      <div className="toolbar_logo">
        <a href="/">NAVBHARAT SCHOOL BHIWANDI</a>
      
      </div>
          <div className="spacer" />
   
        <div>
      

        </div>

    <div className="toolbar_navigation-items" >
        <ul>
        <li>
            <a href="/">home</a>
          </li>
          <li>
          <a href="/about">About</a>
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
        </ul>
      
      </div>
    </nav>
  </header>
);

export default toolbar;
