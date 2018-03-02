import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const { title, onPress } = props;

    return (
        <TouchableOpacity
            style={[props.style, styles.container]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={styles.text}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
