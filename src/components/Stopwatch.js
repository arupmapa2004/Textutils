import React, { useRef, useState } from "react";

export default function Stopwatch(props) {
    const [inputValue, setInputValue] = useState("");
    const [time, setTime] = useState("0:0");
    const [progWidth, setProgWidth] = useState("0%");
    const intervalID = useRef(null);
    const remain = useRef(0);
    const totalTime = useRef(0);

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    const start = () => {
        let minutes = Math.floor(remain.current / 60);
        let seconds = Math.floor(remain.current % 60);
        setTime(`${minutes}:${seconds}`);

        const progress = (1 - remain.current / totalTime.current) * 100;
        setProgWidth(`${progress}%`);

        if (remain.current <= 0) {
            props.toast.error("Time is Up!");
            clearInterval(intervalID.current); // stop the interval
            intervalID.current = null;
        } else {
            remain.current = remain.current - 1;
        }
    }

    const startTime = () => {
        const Time = parseFloat(inputValue);
        if (!isNaN(Time)) {
            const totalSeconds = Time * 60;
            totalTime.current = totalSeconds;
            remain.current = totalSeconds;

            if (intervalID.current) {
                clearInterval(intervalID.current); // Clear any existing interval
            }

            intervalID.current = setInterval(start, 1000); // Adjusted to 1000ms (1 second)
        } else {
            props.toast.error("Please Enter Only Digits");
        }
    }

    const pauseTime = () => {
        if (intervalID.current) {
            clearInterval(intervalID.current);
            intervalID.current = null;
        }
    }

    const resetTime = () => {
        if (intervalID.current) {
            clearInterval(intervalID.current);
            intervalID.current = null;
        }
        remain.current = totalTime.current = 0;
        setProgWidth("0%");
        setTime("0:0");
        setInputValue('');
    }
    return (
        <>
            <div className="container mb-3">
                <div className="progress my-3" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: progWidth }}></div>
                </div>
                <div className="container my-3">
                    <div className="container my-3">
                        <h5 style={{ color: props.mode === 'Dark' ? 'black' : 'white' }}>{time}</h5>
                    </div>
                    <div className="container my-3">
                        <h5 style={{ color: props.mode === 'Dark' ? 'black' : 'white' }}>Enter Your Time Here</h5>
                        <input type="text" value={inputValue} onChange={handleOnChange} style={{ border: "2px solid blue", borderRadius: "7px" }} />
                    </div>
                </div>
                <div className="container my-3">
                    <button className="btn btn-success my-2 mx-1" onClick={startTime}>Start</button>
                    <button className="btn btn-warning my-2 mx-1" onClick={pauseTime}>Pause</button>
                    <button className="btn btn-danger my-2 mx-1" onClick={resetTime}>Reset</button>
                </div>
            </div>
        </>
    )
}