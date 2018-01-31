import React, { Component } from 'react';
import { connect } from "react-redux";
import { getLyrics } from "../redux/track";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                track: "",
                artist: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getLyrics(this.state.inputs);
    }

    render() {
        let { track, artist } = this.state.inputs;
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} name="track" value={track} placeholder="Track Title" type="text" />
                    <input onChange={this.handleChange} name="artist" value={artist} placeholder="Artist" type="text" /><br />
                    <div className="search lyric-search" onClick={this.handleSubmit}>Search</div>
                </form>
            </div>
        )
    }
}

export default connect(null, ({ getLyrics }))(Form);
