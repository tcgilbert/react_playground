import React, { memo } from "react";

const Child = (props) => {
    console.log("Child is rendering");

    return (
        <div>
            <h1>I am the child</h1>
            <p>Child number: {props.childNum}</p>
            <button onClick={() => props.changeNum(Math.random())}>
                Change Child Number
            </button>
        </div>
    );
};

export default memo(Child);
