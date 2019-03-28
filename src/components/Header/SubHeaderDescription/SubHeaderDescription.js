import React from 'react';
import './SubHeaderDescription.css';

const subHeaderDesc = (props) => {
    return(
        <p className="subHeaderStyling">{props.description}</p>
    );
};

export default subHeaderDesc;
