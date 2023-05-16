import React from "react";


export default function WeatherIcon(props) {
    let imgsrc = ("./images/" + (props.icon) + ".png");
    return (
        <div className="weather-icon-container"><img className="weather-icon" src={imgsrc} alt="weather icon"></img></div>
    )
}