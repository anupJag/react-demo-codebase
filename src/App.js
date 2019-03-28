import React, { Component } from 'react';
import HeaderComp from './components/Header/Header';
import CustButton from './components/Main/Button';
import InputCmp from './components/InputHolder/InputHolder';
import BoxCmp from './components/Boxes/BoxComponent';
import './App.css';

class App extends Component {

  state = {
    toggle: false,
    name: "Anupam",
    surName: "Jagatdeo",
    title: "React KT",
    num: 0,
    inputValue: ''
  };

  toggleOnClickHandler = () => {


    //USE THIS WHEN YOU DON'T HAVE DEPENDENCY ON PREVIOUS STATE
    this.setState({
      name: "SANDESH"
    });

    //USE THIS IF U HAVE DEPENDECY ON PREVIOUS STATE
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    });

    //Calculation
    this.setState({
      num: this.state.num + 1
    });
  }

  inputOnChangeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  boxClickedHandler = (id) => {
    let tempInput = this.state.inputValue.split('');
    tempInput.splice(id, 1);

    this.setState({
      inputValue : tempInput.join('')
    });

  }

  render() {

    // const conditionalRender = this.state.toggle ?
    //   <HeaderComp
    //     title={this.state.title}
    //     description={`This is a React & SPFx Session by ${this.state.name}`}
    //   />
    //   :
    //   null;

    // const condtionalAndRender = this.state.toggle && <HeaderComp title={"Conditional Render With AND"} description={"Hey I am rendered"} />;

    // let switchHandler;

    // switch (this.state.num) {
    //   case 1:
    //     switchHandler = <HeaderComp
    //       title={`${this.state.title} ${this.state.num}`}
    //       description={`This is a React & SPFx Session by ${this.state.name}`}
    //     />;
    //     break;
    //   case 2:
    //     switchHandler = <HeaderComp
    //       title={`${this.state.title} ${this.state.num}`}
    //       description={`This is a React & SPFx Session by ${this.state.name}`}
    //     />;
    //     break;
    //   default:
    //     switchHandler = <HeaderComp
    //       title={`${this.state.title} ${this.state.num}`}
    //       description={`This is a React & SPFx Session by ${this.state.name}`}
    //     />;
    //     break;
    // }



    return (
      <div className="App">
        {/* <HeaderComp
          title = {this.state.title}
          description = {`This is a React & SPFx Session by ${this.state.name}`}
        />
        <hr />
        <CustButton 
          title="Giri Asked Me To Click"
          onClickCalled={this.toggleOnClickHandler.bind(this)}
        />
        <div>
        
        <div>Sum Current: {this.state.num}</div>
        </div> */}

        {/* <InputCmp
          inputOnChange={this.inputOnChangeHandler.bind(this)}
          inputValue={this.state.inputValue}
        />
        <label>{this.state.inputValue}</label>

        <hr />
        <CustButton
          title="Giri Asked Me To Click"
          onClickCalled={this.toggleOnClickHandler.bind(this)}
        />
        <label>Toggle state: {this.state.toggle ? "Yes" : "No"}</label>

        <hr />

        {conditionalRender}

        <hr />

        {condtionalAndRender}

        <hr />
        <div>
          Hello I am Anupam !{null}
        </div>

        <hr />

        {switchHandler} */}

        <InputCmp
          inputOnChange={this.inputOnChangeHandler.bind(this)}
          inputValue={this.state.inputValue}
        />

        <div style={{ display: "flex" }}>
          {
            this.state.inputValue.split('').map((x, index) =>
              <BoxCmp
                letter={x}
                key={index}
                boxClicked={this.boxClickedHandler.bind(this, index)}
              />
            )
          }
        </div>


      </div>
    );
  }
}

export default App;
