import React, { useState } from "react";

export default function Stopwatch(props) {
    const [inputValue, setInputValue] = useState("");
    const [time, setTime] = useState("0:0");
    const [progWidth, setProgWidth] = useState("0%");
    const [intervalId, setIntervalId] = useState(null);
    const [remain, setRemain] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    let progress;
    const start = () => {
        console.log(remain);
        let minutes = Math.floor(remain / 60);
        let seconds = Math.floor(remain % 60);
        console.log(minutes);
        console.log(seconds);
        setTime(`${minutes}:${seconds}`);
        progress = (1 - remain / totalTime) * 100;
        console.log(progress);
        setProgWidth(`${progress}%`);
        //console.log(remain)
        if (remain <= 0) {
            props.toast.error("Time is Up!");
            clearInterval(intervalId);
        } else {
            setRemain(remain-1);
        }
    }

    const startTime = () => {
        const Time = parseFloat(inputValue);
        if (!isNaN(Time)) {
            const totalSeconds = Time * 60;
            //console.log(totalSeconds);
            setTotalTime(totalSeconds);
            setRemain(totalSeconds);
            clearInterval(intervalId);
            //console.log(totalSeconds);
            //console.log(remain);
            const newIntervalId = setInterval(start, 2000);
            setIntervalId(newIntervalId);
        } else {
            props.toast.error("Please Enter Only Digits");
        }
    }

    const pauseTime = () => {
        clearInterval(intervalId);
    }

    const resetTime = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        setRemain(totalTime);
        progress = 0;
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