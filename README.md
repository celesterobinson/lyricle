# Lyricle

Celeste Robinson

## Objective

Build a React/Redux App integrated with the MusixMatch API that displays lyrics based on user input. Allow user to favorite songs they love so they can quickly access the lyrics of those songs. Make the app completely responsive.

Unfortunately, full use of this API is very expensive. Users will only be able to see 30% of the lyrics. My long-term goal is to purchase full use.

### Home Page

#### Web Views
##### Home Page
![homepage-web](screenshots/homepage-web-view.png)
##### Lyrics Page
![lyrics-page](screenshots/lyrics-web-view.png)

### Mobile Views<br/>
Home Page<br/><img alt="homepage-web-view" src="screenshots/homepage-mobile-view.png" width="300" height="auto"><br/>
Lyrics Page<br/>
<img alt="homepage-web-view" src="screenshots/lyrics-mobile-view.png" width="300" height="auto">

## Links

Live URL: https://lyricle.herokuapp.com/

GitHub Repository: https://github.com/celesterobinson/lyricle

## Technologies Used
* HTML, CSS, React, Redux + Thunk, Javascript, Axios
* Express + Middleware

## Code Examples

Due to how small this app was, Redux wasn't really necessary. My main reason for using it was to better familiarize myself with it, and fully understand the benefits it provides to larger projects. Through its use on Lyricle, I realized that there are also benefits to using it on smaller projects. 

It was incredibly useful throughout building this app to have all of my AJAX requests as in one file, separate from other code. It's easy to look at my reducer and actions to see exactly what is happening.

```
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
```

