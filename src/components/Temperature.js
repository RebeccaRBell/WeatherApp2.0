import React, { useState } from "react";

export default function Temperature(props) {
	const [unit, setUnit] = useState("celcius");

	function changeToF(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function changeToC(event) {
		event.preventDefault();
		setUnit("celcius");
	}

	if (unit === "celcius") {
		return (
			<div>
				<div className="buttons">
					<div onClick={changeToC} id="temp-button1">
						°C
					</div>
					<div onClick={changeToF} id="temp-button2">
						°F
					</div>
				</div>
				<div className="temp-today">
					<p>
						{props.temp}
						<span className="degree">°</span>
					</p>
				</div>
			</div>
		);
	} else {
		let fahrenheit = Math.round((props.temp * 9) / 5 + 32);
		return (
			<div className="temp-button-cont">
				<div className="buttons">
					<div onClick={changeToC} id="temp-button1">
						°C
					</div>
					<div onClick={changeToF} id="temp-button2">
						°F
					</div>
				</div>
				<div className="temp-today">
					<p>
						{fahrenheit}
						<span className="degree">°</span>
					</p>
				</div>
			</div>
		);
	}
}
