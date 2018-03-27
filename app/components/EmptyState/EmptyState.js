import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

class EmptyState extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={this.props.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>
                    { this.props.title }
                </Text>
                <Text style={styles.message}>
                    { this.props.message }
                </Text>
            </View>
        );
    }
}

export default EmptyState;
