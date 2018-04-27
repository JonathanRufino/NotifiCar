import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style={this.props.containerStyle}
                onPress={this.props.onPress}
                activeOpacity={this.props.activeOpacity}
            >
                <Text style={this.props.textStyle}>
                    { this.props.title.toUpperCase() }
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    activeOpacity: PropTypes.number,
    containerStyle: PropTypes.any,
    textStyle: PropTypes.any,
};

Button.defaultProps = {
    title: 'CustomButton',
    onPress: () => {},
    activeOpacity: 0.8,
    containerStyle: styles.container,
    textStyle: styles.text,
};

export default Button;
