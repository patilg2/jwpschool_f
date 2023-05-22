import React from "react";
import Toolbar from "./components/Toolbar";
import "./styles.css";
import SideDrawer from "./components/sidemenu/SideDrawer";
import BackDrop from  "./components/backdrop/BackDrop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/about";
import Staff from "./components/staff_01";
import Contact from "./components/contactus";
import Photogalary from "./components/photogalary";
import Admission from "./components/admission";
import ReactDOM from 'react-dom'; 
import flogo from "./components/img/nes_logo_s.png";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
       {<Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
       
       }
     
        <SideDrawer show={this.state.sideDrawerOpen} />
        
        {backdrop}
      
        <main style={{ marginTop: "64px" }}>
        
        <Router>
            <Routes>
              <Route path='/' exact element={<Home/>}/>;
              <Route path='/about' element={<About/>}/>;
              <Route path='/staff' element={<Staff/>}/>;
              <Route path='/contactus' element={<Contact/>}/>;
              <Route path='/photogalary' element={<Photogalary/>}/>;
              <Route path='/admission' element={<Admission/>}/>;
            </Routes>
          </Router>
        
        </main>
       
       
      </div>
    );
  }
}


export default App;
