import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Account extends Component {
    render() {
        return (
            <View>
                <Text> Account Screen </Text>
            </View>
        );
    }
}

export default connect(null, null)(Account);
