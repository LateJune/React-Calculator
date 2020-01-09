import React, { Component } from 'react'
import {
    View ,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './style';

class InputButton extends Component {
    render() {
        return (
                <TouchableHighlight 
                    //style={Style.calculatorInputButton}
                    style={[Style.calculatorInputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                    underlayColor="#193441"
                    onPress={this.props.onPress}>
                        <Text style={Style.calculatorInputButtonText}>{this.props.value}</Text>
                </TouchableHighlight>
        );
    }
}

export default InputButton;