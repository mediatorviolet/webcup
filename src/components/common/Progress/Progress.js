import React from "react";

const Progress = ({ percentage }) => {
    return (
        <div className='progress'>
            <div
                className='progress-bar'
                role='progressbar'
                style={{ width: `${percentage}%` }}
                aria-valuenow={percentage}
                aria-valuemin='0'
                aria-valuemax='100'>
                {percentage}%
            </div>
        </div>
    );
};

export default Progress;
