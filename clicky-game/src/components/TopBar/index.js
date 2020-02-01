import React from "react";

function TopBar(props) {
    return (
        <div className = "top-bar mt-4 mb-4">
            <div className ="row">
                <div className ="col-md-4">
                    <h4>Clicky Game</h4>
                </div>
                <div className ="col-md-4">
                    <h4>{props.msg}</h4>
                </div>
                <div className ="col-md-4">
                    <h4>Your Score: {props.score} | Your Top Score: {props.topScore}</h4>
                </div>
            </div>
        </div>
    );
};

export default TopBar;