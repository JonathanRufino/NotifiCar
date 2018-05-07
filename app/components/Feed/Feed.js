import React, { Component } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import _ from 'lodash';

import styles from './styles';
import { Images, Texts, Values, Colors } from '../../commom';
import {
    showDialog,
    fetchOccurrencesOfTheDay,
} from '../../redux/actions/FeedActions';
import OccurrenceModal from '../OccurrenceModal';
import OccurrenceItem from '../OccurrenceItem';
import EmptyState from '../EmptyState';

class Feed extends Component {
    componentWillMount() {
        this.props.fetchOccurrencesOfTheDay();
        this._createOccurrenceList(this.props.occurrencesOfTheDay);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.occurrencesOfTheDay);
        this._createOccurrenceList(nextProps.occurrencesOfTheDay);
    }

    _createOccurrenceList(occurrencesOfTheDay) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(occurrencesOfTheDay);
    }

    _renderRow(occurrenceData) {
        let icon;

        if (occurrenceData.occurrence_type === Texts.Occurrence_Type.HEADLIGHTS_ON) {
            icon = Images.ICON_LIGHTS;
        } else if (occurrenceData.occurrence_type === Texts.Occurrence_Type.OPEN_GLASS) {
            icon = Images.ICON_WINDOW;
        } else if (occurrenceData.occurrence_type === Texts.Occurrence_Type.ALARM) {
            icon = Images.ICON_ALARM;
        } else if (occurrenceData.occurrence_type === Texts.Occurrence_Type.CAR_BLOCKING) {
            icon = Images.ICON_CAR_BLOCKING;
        } else if (occurrenceData.occurrence_type === Texts.Occurrence_Type.DOOR_OPEN) {
            icon = Images.ICON_DOOR_OPEN;
        } else if (occurrenceData.occurrence_type === Texts.Occurrence_Type.FLAT_TIRE) {
            icon = Images.ICON_FLAT_TIRE;
        } else {
            icon = Images.ICON_WARNING;
        }

        return (
            <OccurrenceItem occurrence={occurrenceData} image={icon} />
        );
    }

    _renderSeparator() {
        return (
            <View style={styles.separator} />
        );
    }

    _renderListOfOccurrences() {
        if (this.props.isLoadingListOfOccurrences) {
            return (
                <ActivityIndicator style={styles.indicator} size='large' />
            );
        }

        if (this.props.occurrencesOfTheDay.length === Values.EMPTY) {
            return (
                <EmptyState
                    image={Images.ICON_ATTENTION}
                    title={Texts.Informative.NO_OCCURRENCES}
                    message={Texts.Informative.ADD_OCCURRENCE_INSTRUCTIONS}
                />
            );
        }

        return (
            <ListView
                style={styles.occurrenceList}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}
            />
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <OccurrenceModal />

                { this._renderListOfOccurrences() }

                <ActionButton
                    buttonColor={Colors.RED_LIGHT}
                    onPress={() => this.props.showDialog(true)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    let occurrencesOfTheDay;

    if (state.FeedReducer.occurrencesOfTheDay === null) {
        occurrencesOfTheDay = [];
    } else {
        occurrencesOfTheDay = _.map(state.FeedReducer.occurrencesOfTheDay, 
            (val, uid) => ({ ...val, uid }));
    }

    return {
        occurrencesOfTheDay,
        isLoadingListOfOccurrences: state.FeedReducer.isLoadingListOfOccurrences
    };
};

export default connect(mapStateToProps, {
    showDialog, fetchOccurrencesOfTheDay
})(Feed);
