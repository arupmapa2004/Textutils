import React from "react";

export default function About(props) {
    return (
        <>
            <div className="container" >
                    <div className="container mb-3" style={{ color: props.mode === 'Dark' ? 'black' : 'white' }}>
                        <h2>About Us</h2>
                        <h6>Welcome to Textutils, your go-to solution for all things text-related! We are dedicated to providing a seamless and efficient experience for managing and manipulating text. Whether you’re looking to convert text to uppercase or lowercase, count words, or quickly copy and download your text, Textutils has you covered.</h6>
                    </div>
                <div className="accordion" id="accordionExample" style={{border:'2px solid', borderColor:props.mode === 'Dark' ? 'black' : 'white'}}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey' }}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'grey' : 'white' }}>
                                <b>Our Mission</b>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'grey' : 'white' }}>
                                At Textutils, our mission is to simplify and enhance your text handling experience. We understand the importance of having the right tools at your fingertips, which is why we’ve designed our app to be intuitive, powerful, and versatile. Our goal is to help you streamline your workflow and get more done with ease.                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'grey' : 'white' }}>
                                <b>Features</b>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'grey' : 'white' }}>
                                <li><strong>Text Conversion:</strong> Easily convert your text to uppercase or lowercase.</li>
                                <li><strong>Word Count:</strong> Quickly find out how many words are in your text.</li>
                                <li><strong>Copy and Download:</strong> Conveniently copy your text to your clipboard or download it for later use.</li>
                                <li><strong>And More:</strong> Explore additional features designed to make text management simple and effective.</li>                           
                         </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'grey' : 'white' }}>
                                Why Choose Us?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'Dark' ? 'white' : 'grey', color: props.mode === 'Dark' ? 'grey' : 'white' }}>
                                Textutils stands out with its user-friendly interface and efficient functionality. We prioritize your needs and continuously work to improve our app, ensuring it meets the highest standards of performance and reliability. Our team is passionate about creating tools that make your life easier, and we’re always here to support you.                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}