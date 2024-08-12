import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const convertToUpper = () => {
        setText(text.toUpperCase());
        props.toast.success("Converted To Upper Text Successfully!");
    }
    const convertToLower = () => {
        setText(text.toLowerCase());
        props.toast.success("Converted To Lower Text Successfully!");

    }
    const downloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "textfile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
        props.toast.success("Text Downloaded Successfully!");


    }
    const copyText = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.toast.success("Copied to Clipboard!");
        }).catch(err => {
            props.showAlert("Failed To Copy The Text!", "danger");
        })
    }
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.toast.success("Extra Spaces Removed!");
    }
    const clearText = () => {
        setText("");
        props.toast.warning("Text Cleared!");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'Dark' ? 'black' : 'white' }}>
                <h1>Enter Some Text To Analysze</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'black' : 'white' }} value={text} onChange={handleOnChange} rows="8" placeholder='Enter Your Text Here'></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={convertToUpper}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={convertToLower}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={downloadText}>Download Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy to Clipboard</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={removeSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={clearText}>Clear Text</button>
                </div>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'Dark' ? 'black' : 'white' }}>
                <h2>Your Text Summery</h2>
                <h5>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} character</h5>
                <h7>{0.08 * text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} minutes need to read the content.</h7>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
