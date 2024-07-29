import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Stopwatch(props) {
    const [inputValue, setInputValue] = useState("");
    let [time, setTime] = useState("0:0");
    let [progWidth, setProgWidth] = useState("0");
    let [intervalId, setintervalId] = useState(null);

    const handleOnChage = (event) => {
        setInputValue(event.target.value);
    }

    let totalTime;
    let remain;
    let progress;
    function start() {
        let minutes = Math.floor(remain / 60);
        let seconds = Math.floor(remain % 60);
        setTime(`${minutes}:${seconds}`);
        progress = (1 - remain / totalTime) * 100;
        setProgWidth(`${progress}%`);


        if (remain <= 0) {
            clearInterval(intervalId);
            props.showAlert("Time is Up!", "danger");
        }
        else {
            --remain;
        }
    }
    const startTime = () => {
        
        let Time = Number(inputValue);
        if (!isNaN(Time)) {
            totalTime = Time * 60;
            remain = totalTime;
            clearInterval(intervalId);
            setintervalId(setInterval(start, 1000));
        }
        else{
            console.log(typeof inputValue);
            toast.error("Please Enter Only Digits");
        }
    }
    const pauseTime = () => {
        clearInterval(intervalId);
    }
    const resetTime = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        remain = totalTime;
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