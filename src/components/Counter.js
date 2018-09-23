import React from "react";

const Counter = props => (
    <div>
        <h4 className="counter">Clicks this round: {props.count}</h4>
        <h4 className="counter">Your record: {props.maxCount}</h4>
    </div>
)

export default Counter;