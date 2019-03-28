import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <button onClick={this.props.onClickCalled}>{this.props.title}</button>
        );
    }
};

export default Button;