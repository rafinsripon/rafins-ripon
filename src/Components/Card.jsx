import React from 'react';


function Card(props) {
    return (
        <>
            <div className="col-md-4">
                <div className="single_servoce">
                    <span>{props.icon}</span>
                    <h4>{props.stitile}</h4>
                    <p>{props.pera}</p>
                </div>
            </div>
        </>
    )
}

export default Card;

