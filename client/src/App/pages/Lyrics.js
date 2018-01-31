import React from "react";
import { connect } from "react-redux";
import Aside from "../Components/Aside";
import "../styles/Lyrics.css";

function Lyrics(props) {
    let { title, artist, lyrics, album } = props.data;
    let { errMsg } = props;
    return (
        
        <div className="lyrics">
            <Aside />
            {errMsg ?
            <h2 className="err">{errMsg}</h2>
            :
            <div className="lyrics-display">
                <h2>{title}</h2>
                <h4>{artist}</h4>
                <h5>{album}</h5>
                <p>{lyrics}</p>
            </div>}
            
        </div>
    )
}

export default connect(state => state.track, {})(Lyrics);