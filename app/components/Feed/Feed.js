import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import _ from 'lodash';

import styles from './styles';
import {
    showDialog,
    fetchTenOcurrencesOfTheDay,
} from '../../redux/actions/FeedActions';
import OcurrenceModal from '../OccurrenceModal/OcurrenceModal';
import OcurrenceItem from '../OcurrenceItem/OcurrenceItem';

class Feed extends Component {
    componentWillMount() {
        this.props.fetchTenOcurrencesOfTheDay();
        this._createOcurrenceList(this.props.ocurrencesOfTheDay);
    }

    componentWillReceiveProps(nextProps) {
        this._createOcurrenceList(nextProps.ocurrencesOfTheDay);
    }

    _createOcurrenceList(ocurrencesOfTheDay) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(ocurrencesOfTheDay);
    }

    _renderRow(ocurrenceData) {
        return (
            <OcurrenceItem ocurrence={ocurrenceData} />
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <OcurrenceModal />

                <ListView
                    style={styles.ocurrenceList}
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this._renderRow}
                />

                <ActionButton
                    buttonColor='rgba(231,76,60,1)'
                    onPress={() => this.props.showDialog(true)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    let ocurrencesOfTheDay;

    if (state.FeedReducer.ocurrencesOfTheDay === null) {
        ocurrencesOfTheDay = [];
    } else {
        ocurrencesOfTheDay = _.map(state.FeedReducer.ocurrencesOfTheDay, 
            (val, uid) => ({ ...val, uid }));
    }

    return {
        ocurrencesOfTheDay
    };
};

export default connect(mapStateToProps, { showDialog, fetchTenOcurrencesOfTheDay })(Feed);
