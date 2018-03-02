import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Ranking extends Component {
    render() {
        return (
            <View>
                <Text> Ranking Screen </Text>
            </View>
        );
    }
}

export default connect(null, null)(Ranking);
