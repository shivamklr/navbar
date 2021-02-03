import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="site-logo" />
                    <button className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <div className="links-container show-container">
                    <ul className="links">
                        {/* <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">products</a>
                        </li> */}
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {/* <li>
                        <a href="http://www.twitter.com">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com">
                            <FaTwitter />
                        </a>
                    </li> */}
                    {social.map((soc)=>{
                        const {id, url, icon} = soc;
                        return (<li key={id}>
                            <a href={url}>{icon}</a>
                        </li>)
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
