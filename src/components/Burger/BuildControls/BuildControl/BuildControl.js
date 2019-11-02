import React from 'react';
import "./BuildControl.css"

export const BuildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less">Less</button>
        <button onClick={props.added} className="More">More</button>
    </div>
);