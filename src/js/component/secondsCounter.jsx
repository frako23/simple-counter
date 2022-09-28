import React from "react";

let SecondsCounter = (props) => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid justify-content-center d-flex">
                <a className="navbar-brand" href="#">
                    <div className="text-white">
                    <h1>
                        <div className="cajita"><i class="fa-regular fa-clock"></i> </div>
                        <div className="cajita">{props.fourthDigit}</div>
                        <div className="cajita">{props.thirdDigit}</div>
                        <div className="cajita">{props.secondDigit}</div>
                        <div className="cajita">{props.firstDigit}</div>
                    </h1>
                    </div></a>
            </div>
            <div className="container-fluid justify-content-center">
                <button type="button" className="btn btn-outline-info" onClick={props.stop}>STOP</button>
                <button 
                    type="button" 
                    className="btn btn-outline-info"
                    onClick={props.reload}>RESET</button>
                <button type="button" className="btn btn-outline-info" onClick={props.resume}>RESUME</button>
            </div>
        </nav>)           
};


export default SecondsCounter;

