import React, { Component } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';

import styles from './styles';
import { Values, Texts } from '../../commom';

class LicensePlateInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicle: '',
            keyboard: 'default'
        };
    }

    _write(text) {
        let vehicle = text;
        let keyboard = this.state.keyboard;
        const isErasing = text.length < this.state.vehicle.length;

        if (isErasing && vehicle.length === 4) {
            vehicle = vehicle.slice(0, -1);
            keyboard = 'default';
        } else if (!isErasing && vehicle.length === 3) {
            vehicle = vehicle.concat('-');
            keyboard = 'numeric';
        }

        this.setState({ vehicle, keyboard });
        this.props.onWrite(vehicle);
    }
    
    render() {
        return (
            <TextInputMask
                style={this.props.style}
                value={this.state.vehicle}
                onChangeText={text => this._write(text)}
                maxLength={this.props.maxLength}
                autoCapitalize={this.props.autoCapitalize}
                keyboardType={this.state.keyboard}
                returnKeyType={this.props.returnKeyType}
                placeholder={this.props.placeholder}
                type='custom'
                options={{ mask: 'AAA-9999' }}
            />
        );
    }
}

LicensePlateInput.propTypes = {
    style: PropTypes.any,
    maxLength: PropTypes.number,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    placeholder: PropTypes.string,
    onWrite: PropTypes.func,
};

LicensePlateInput.defaultProps = {
    style: styles.inputField,
    maxLength: Values.LICENSE_PLATE_MAX_LENGTH,
    autoCapitalize: 'characters',
    returnKeyType: 'done',
    placeholder: Texts.Placeholders.LICENSE_PLATE,
    onWrite: () => console.log('Not implemented')
};

export default LicensePlateInput;
