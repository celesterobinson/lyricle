import axios from "axios";

let defaultTrack = {
    errMsg: "",
    data: {}
}

const lyricsReducer = (track = defaultTrack, action) => {
    switch (action.type) {
        case "GET_TRACK":
            return {
                ...track,
                data: action.track
            }
        case "ERR":
            return {
                ...track,
                errMsg: action.msg
            }
        default:
            return track;
    }
}

export const getLyrics = (inputs) => {
    let { track, artist } = inputs;
    return dispatch => {
        let trackInfo = {};
        const trackUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${track}&q_artist=${artist}&apikey=e14650003ae32bc2229f9573c5408897`;
        axios.post("http://localhost:8080", { url: trackUrl })
            .then((response) => {
                let { track_list } = response.data.message.body;
                let track = track_list[0].track;
                trackInfo.artist = track.artist_name;
                trackInfo.title = track.track_name;
                trackInfo.album = track.album_name;
                let trackId = track.track_id;
                const lyricUrl = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=e14650003ae32bc2229f9573c5408897`;
                axios.post("http://localhost:8080", { url: lyricUrl })
                    .then((response) => {
                        let { lyrics_body } = response.data.message.body.lyrics;
                        trackInfo.lyrics = lyrics_body;
                        dispatch({
                            type: "GET_TRACK",
                            track: trackInfo
                        })
                    })
                    .catch((err) => {
                        dispatch({
                            type: "ERR",
                            msg: "Lyrics not found :("
                        })
                    })
            })
            .catch((err) => {
                dispatch({
                    type: "ERR",
                    msg: "Song not found :("
                })
            })
    }

}

export default lyricsReducer;