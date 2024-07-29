import React, { useState } from "react";

export default function Stopwatch(props) {
    const [inputValue, setInputValue] = useState("");
    let [time, setTime] = useState("0:0");
    let [progWidth, setProgWidth] = useState("0");
    const handleOnChage = (event) => {
        setInputValue(event.target.value);
    }

    let totalTime;
    let intervalId;
    let remain;
    let progress;
    function start() {
        //console.log(remain);
        let minutes = Math.floor(remain / 60);
        let seconds = Math.floor(remain % 60);
        setTime(`${minutes}:${seconds}`);

        progress = (1 - remain / totalTime) * 100;
        setProgWidth(`${progress}%`);


        if (remain <= 0) {
            clearInterval(intervalId);
            props.showAlert("Time is Up!","danger");
            //setTime("Time is Up!");
        }
        else {
            --remain;
        }
    }
    const startTime = ()=>{
        let Time = inputValue;
        totalTime = Time * 60;
        remain = totalTime;
        clearInterval(intervalId);
        intervalId = setInterval(start, 1000);
    }
    const pauseTime = ()=>{
        clearInterval(intervalId);
    }
    const resetTime = ()=>{
        clearInterval(intervalId);
        remain = totalTime;
        progress = 0;
        setProgWidth("0%");
        setTime("0:0");
    }
    return (
        <>
            <div className="container mb-3">
                <div className="progress my-3" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: progWidth }}></div>
                </div>
                <div className="container my-3">
                    <div className="container my-3">
                        <h5>{time}</h5>
                    </div>
                    <div className="container my-3">
                        <h5>Enter Your Time Here</h5>
                        <input type="text" value={inputValue} onChange={handleOnChage} style={{ border: "2px solid blue", borderRadius: "7px" }} />
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