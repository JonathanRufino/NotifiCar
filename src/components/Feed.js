import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Feed extends Component {
    render() {
        return (
            <View>
                <Text> Feed Screen </Text>
            </View>
        );
    }
}

export default connect(null, null)(Feed);
