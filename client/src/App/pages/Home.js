import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className="home">
            <h1>Lyricle</h1>
            <h3>Find the lyrics to songs you love.</h3>
            <Link to="/lyrics">
                <div className="search">
                    Get Started &rarr;
                </div>
            </Link>
        </div>
    )
}

export default Home;