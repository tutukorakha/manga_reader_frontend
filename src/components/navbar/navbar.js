import React, { Component } from "react";
import { Button } from "../button";
import { MenuItems } from "./menu-items";
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import "./navbar.css";

export default class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked });
        console.log(this.state.clicked);
    }

    test = () => {
        console.log("Hello World");
        console.log({MenuItems});
    }

    render() {
        return (
            <nav className="NavbarItems">
                
                <div className="navbar-logo">
                    <a className="navbar-brand" href="#">
                        <img src="https://logosandtypes.com/wp-content/uploads/2020/07/loqueleo.svg" height="50"/>
                    </a>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked ? <FaTimes/> : <FaBars/> }
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
                {/* <Button className="">Sign Up</Button> */}
            </nav>
        );
    }
}