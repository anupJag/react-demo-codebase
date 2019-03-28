import React from 'react';


const boxComponent = (props) => {
    return(
        <div style={{height: "50px", width: "50px", border: "1px solid #ccc", display: "flex"}} onClick={props.boxClicked}>
            <p style={{margin : "auto"}}>{props.letter}</p>
        </div>
    );
};

export default boxComponent;