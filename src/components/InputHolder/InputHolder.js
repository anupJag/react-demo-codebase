import React from 'react';


const inputHolder = (props) => {
    return(
        <div>
            <label>Input Text</label>
            <input 
                type="text"
                onChange={props.inputOnChange}
                value={props.inputValue}
            />
        </div>
    );
};

export default inputHolder;