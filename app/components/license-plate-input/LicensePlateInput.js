import React, { Component } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';

import styles from './styles';
import { Values, Texts, Colors } from '../../commom';

class LicensePlateInput extends Component {
    state = {
        vehicle: '',
    };
    
    render() {
        return (
            <TextInputMask
                style={this.props.style}
                value={this.state.vehicle}
                onChangeText={text => {
                    this.setState({ vehicle: text });
                    this.props.onWrite(text);
                }}
                maxLength={this.props.maxLength}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                placeholder={this.props.placeholder}
                type='custom'
                options={{ mask: 'AAA-9999' }}
                underlineColorAndroid={Colors.TRANSPARENT}
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
