import {React, useState} from 'react';
import Signup from './signup';
// import background from "./webbg.jpg"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavBarElements';

import Entertainment from "./categories/entertainment";
import Health from "./categories/health";
import Home from "./home";
import Sports from "./categories/sports";
import NewPost from "./categories/newpost"
// import Hamburger from '../menu.png'
import 'primeicons/primeicons.css';
import "./styles.css"
import { Button } from "primereact/button";
import TechSci from './categories/techsci';
import SignIn from './signin';

export default function NavBar() {
    // const responsive = ()=> {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //       x.className += "responsive";
    //     } else {
    //       x.className = "topnav";
    //     }
    // }

    const [responsive, setResponsive] = useState(false);
    const toggleResponsive = () => {
      //take current value of responsive and flip it
      setResponsive(prev => !prev);
    }

    return (
        <div>
            <div className={responsive ? 'topnav responsive' : 'topnav'} style={{
                // display: "flex",
                background: 'black',
                padding: '5px 0 5px 10%',
                fontSize: '15px',
                position: 'sticky',
                top: 0
            }}>
                
                <div style={{ margin: '10px' }} className='active'>
                    <NavLink to="/" style={({ isActive }) => ({ 
                        color: isActive ? '#E9967A' : 'white' })}>
                        Home
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }} >
                    <NavLink to="/entertainment" style={({ isActive }) => ({ 
                        color: isActive ? '#E9967A' : 'white' })}>
                        Entertainment
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to="/health" style={({ isActive }) => ({ 
                        color: isActive ? '#E9967A' : 'white' })}>
                        Health
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to="/sports" style={({ isActive }) => ({ 
                        color: isActive ? '#E9967A' : 'white' })}>
                        Sports
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to="/techsci" style={({ isActive }) => ({ 
                        color: isActive ? '#E9967A' : 'white' })}>
                        Technology and Science
                    </NavLink>
                </div>
                <NavLink className="icon" to="/javascript:void(0);" onClick={toggleResponsive}>
                    <i className="pi pi-align-justify" style={{ color: 'white' }}/>
                </NavLink>
                
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/entertainment" element={<Entertainment />} />
                <Route exact path="/health" element={<Health />} />
                <Route exact path="/sports" element={<Sports />} />
                <Route exact path="/techsci" element={<TechSci/>}/>
                <Route exact path="/newpost" element={<NewPost />} />
                <Route exact path="/signin" element={<SignIn/>}/>
            </Routes>

        </div>
    )
}
