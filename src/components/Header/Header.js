import React from 'react';
import SubDescription from './SubHeaderDescription/SubHeaderDescription';

const headerComp = (props) => {


    const styleLing = {
        width: "100%",
        height: "5%",
        backgroundColor: "#ccc"
    };

    return (
        <header style={styleLing}>
            <h2>{props.title}</h2>
            <SubDescription
                description={props.description}
            />
        </header>
    );
};

export default headerComp;
