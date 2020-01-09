import React, { Component } from 'react';
import { 
  Text, 
  View 
} from 'react-native';
import Style from './style.js'
import InputButton from './calculatorInputButton'
import { number, string } from 'prop-types';

const calculatorButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }


  render() {
    
    return (
      <View style={Style.rootContainer}>
        <View style={Style.calculatorDisplayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>

        <View style={Style.calculatorInputContainter}>
            {this._renderCalculatorInputButtons()}
        </View>
      </View>
      
    );

  }
  _renderCalculatorInputButtons() {
    let views = [];

    for (let rowIndex = 0; rowIndex < calculatorButtons.length; rowIndex++ ) {
      let currentRow = calculatorButtons[rowIndex];
      let inputRow = [];

      for (let buttonIndex = 0; buttonIndex < currentRow.length; buttonIndex++) {
        let input = currentRow[buttonIndex];
        inputRow.push(
          <InputButton
              value={input} 
              highlight={this.state.selectedSymbol === input}
              onPress={this._onInputButtonPressed.bind(this, input)}
              key = {rowIndex + "-" + buttonIndex} />
        );

      }
      views.push(
        <View 
            style={Style.inputRow} 
            key={"row-" + rowIndex}>{inputRow}
        </View>
      )
    }
    return views;
  }

  _onInputButtonPressed(input) {
    //alert(input)
    switch(typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }
  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;
    
    this.setState({ 
      inputValue: inputValue 
    })
  }
  _handleStringInput(str){
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
            selectedSymbol: str,
            previousInputValue: this.state.inputValue,
            inputValue: 0 
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
        inputValue = this.state.inputValue,
        previousInputValue = this.state.previousInputValue

        if (!symbol) { 
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbols: null
        });
        break;
    }
  }
  
}



export default ReactCalculator;
