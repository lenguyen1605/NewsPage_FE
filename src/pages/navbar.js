import React from 'react';
import Signup from './signup';
// import background from "./webbg.jpg"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavBarElements';
export default function NavBar() {
    return (
        <>
        <div>
            <Nav>
            <Bars></Bars>
            <NavMenu style={{marginLeft: '5%'}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Entertainment</NavLink>
                <NavLink to="/">Politics</NavLink>
                <NavLink to="/">Health</NavLink>
                <NavLink to="/">Sport</NavLink>
                <NavLink to="/">Economics</NavLink>
                <NavLink to="/">Science</NavLink>
                <NavLink to="/">Tech</NavLink>
                {/* <NavLink to="./signup">Sign up</NavLink> */}
            </NavMenu>
        </Nav>
        </div>
        </>
    )
}