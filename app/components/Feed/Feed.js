import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import styles from './styles';
import {
    showDialog,
} from '../../redux/actions/FeedActions';
import OcurrenceModal from '../OccurrenceModal/OcurrenceModal';

class Feed extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <OcurrenceModal />]

                <ActionButton
                    buttonColor='rgba(231,76,60,1)'
                    onPress={() => this.props.showDialog(true)}
                />
            </View>
        );
    }
}

export default connect(null, { showDialog })(Feed);
