import React, { Component } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { Images, Texts, Values, Colors } from '../../commom';
import { fetchOccurrencesOfTheDay } from '../../redux/actions/FeedActions';
import OccurrenceItem from '../OccurrenceItem';
import EmptyState from '../EmptyState';

class Feed extends Component {
    componentWillMount() {
        this.props.fetchOccurrencesOfTheDay(this.props.userID);
        this._createOccurrenceList(this.props.occurrencesOfTheDay);
    }

    componentWillReceiveProps(nextProps) {
        this._createOccurrenceList(nextProps.occurrencesOfTheDay);
    }

    _createOccurrenceList(occurrencesOfTheDay) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(occurrencesOfTheDay);
    }

    _renderRow(occurrenceData) {
        let icon;

        if (occurrenceData.occurrence.occurrence_type === Texts.Occurrence_Type.HEADLIGHTS_ON) {
            icon = Images.ICON_LIGHTS;
        } else if (occurrenceData.occurrence.occurrence_type === Texts.Occurrence_Type.OPEN_GLASS) {
            icon = Images.ICON_WINDOW;
        } else if (occurrenceData.occurrence.occurrence_type === Texts.Occurrence_Type.ALARM) {
            icon = Images.ICON_ALARM;
        } else if (occurrenceData.occurrence.occurrence_type === Texts.Occurrence_Type.CAR_BLOCKING) {
            icon = Images.ICON_CAR_BLOCKING;
        } else if (occurrenceData.occurrence.occurrence_type === Texts.Occurrence_Type.DOOR_OPEN) {
            icon = Images.ICON_DOOR_OPEN;
        } else if (occurrenceData.occurrence.occurrence_type === Texts.Occurrence_Type.FLAT_TIRE) {
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
                { this._renderListOfOccurrences() }

                <ActionButton
                    buttonColor={Colors.RED_LIGHT}
                    onPress={() => Actions.push('addOccurrence')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    userID: state.AuthenticationReducer.userID,
    occurrencesOfTheDay: state.FeedReducer.occurrencesOfTheDay,
    isLoadingListOfOccurrences: state.FeedReducer.isLoadingListOfOccurrences
});

export default connect(mapStateToProps, {
    fetchOccurrencesOfTheDay
})(Feed);
