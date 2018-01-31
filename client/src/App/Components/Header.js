import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
    return (
        <div className="header">
            <Link to="/">home</Link>
            <Link to="/lyrics">lyrics</Link>
            <Link to="/favorites">faves</Link>
        </div>
    )
}

export default Header
