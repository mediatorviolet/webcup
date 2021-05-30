import React from "react";

const Progress = ({ percentage, color }) => {
    return (
        <div className='progress' style={{height: "20px"}}>
            <div
                className='progress-bar'
                role='progressbar'
                style={{ width: `${percentage}%` }}
                aria-valuenow={percentage}
                aria-valuemin='0'
                aria-valuemax='100'
                style={{backgroundColor: `var(--${color})`, height: "20px"}}>
                {percentage}%
            </div>
        </div>
    );
};

export default Progress;
