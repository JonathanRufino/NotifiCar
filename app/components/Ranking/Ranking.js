import React, { Component } from 'react';
import { View, ListView, ActivityIndicator, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Images, Values, Texts } from '../../commom';
import {
    fetchOccurrencesTypeRanking,
} from '../../redux/actions/RankingActions';
import OccurrenceTypeRankingItem from '../OccurrenceTypeRankingItem';

class Ranking extends Component {
    componentWillMount() {
        this.props.fetchOccurrencesTypeRanking();
        this._createOccurrenceTypeRankingList(this.props.occurrencesTypeRankingList);
    }

    componentWillReceiveProps(nextProps) {
        this._createOccurrenceTypeRankingList(nextProps.occurrencesTypeRankingList);
    }

    _createOccurrenceTypeRankingList(occurrencesTypeRankingList) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(occurrencesTypeRankingList);
    }

    _renderIconPodium(occurrenceTypePodium) {
        let icon;

        if (occurrenceTypePodium === Texts.Occurrence_Type.HEADLIGHTS_ON) {
            icon = Images.ICON_LIGHTS;
        } else if (occurrenceTypePodium === Texts.Occurrence_Type.OPEN_GLASS) {
            icon = Images.ICON_WINDOW;
        } else if (occurrenceTypePodium === Texts.Occurrence_Type.ALARM) {
            icon = Images.ICON_ALARM;
        } else if (occurrenceTypePodium === Texts.Occurrence_Type.CAR_BLOCKING) {
            icon = Images.ICON_CAR_BLOCKING;
        } else if (occurrenceTypePodium === Texts.Occurrence_Type.DOOR_OPEN) {
            icon = Images.ICON_DOOR_OPEN;
        } else if (occurrenceTypePodium === Texts.Occurrence_Type.FLAT_TIRE) {
            icon = Images.ICON_FLAT_TIRE;
        } else {
            icon = Images.ICON_WARNING;
        }

        return icon;
    }
    
    _renderRow(occurrencesTypeData) {
        let icon;

        if (occurrencesTypeData.type === Texts.Occurrence_Type.HEADLIGHTS_ON) {
            icon = Images.ICON_LIGHTS;
        } else if (occurrencesTypeData.type === Texts.Occurrence_Type.OPEN_GLASS) {
            icon = Images.ICON_WINDOW;
        } else if (occurrencesTypeData.type === Texts.Occurrence_Type.ALARM) {
            icon = Images.ICON_ALARM;
        } else if (occurrencesTypeData.type === Texts.Occurrence_Type.CAR_BLOCKING) {
            icon = Images.ICON_CAR_BLOCKING;
        } else if (occurrencesTypeData.type === Texts.Occurrence_Type.DOOR_OPEN) {
            icon = Images.ICON_DOOR_OPEN;
        } else if (occurrencesTypeData.type === Texts.Occurrence_Type.FLAT_TIRE) {
            icon = Images.ICON_FLAT_TIRE;
        } else {
            icon = Images.ICON_WARNING;
        }

        return (
            <OccurrenceTypeRankingItem 
                occurrenceType={occurrencesTypeData} 
                image={icon} 
            />
        );
    }

    _renderSeparator() {
        return (
            <View style={styles.separator} />
        );
    }

    _renderRanking() {
        if (this.props.isLoadingListOfRanking) {
            return (
                <ActivityIndicator style={styles.indicator} size='large' />
            );
        }
        
        if (this.props.occurrencesTypeRankingPodium.length !== Values.EMPTY) {
            return (
                <View>
                    <View style={styles.screenImages}>
                        <View style={styles.screenImagesIndividual}>
                            <Image
                                style={styles.secondPlace}
                                source={
                                    this._renderIconPodium(
                                        this.props.occurrencesTypeRankingPodium[Values.SECOND].type)
                                }
                            />
                            <Text style={styles.ocurrenceType}>
                                2. {this.props.occurrencesTypeRankingPodium[Values.SECOND]
                                    .type}
                            </Text>
                            <Text style={styles.totalOcurrenceType}>
                                {this.props.occurrencesTypeRankingPodium[Values.SECOND]
                                    .occurrences_count}
                            </Text>
                        </View>
                        <View style={styles.screenImagesIndividual}>
                            <Image
                                style={styles.crown}
                                source={Images.ICON_CROWN}
                            />
                            <Image
                                style={styles.firstPlace}
                                source={
                                    this._renderIconPodium(
                                        this.props.occurrencesTypeRankingPodium[Values.FIRST].type)
                                }
                            />
                            <Text style={styles.ocurrenceType}>
                                1. {this.props.occurrencesTypeRankingPodium[Values.FIRST]
                                    .type}
                            </Text>
                            <Text style={styles.totalOcurrenceType}>
                                {this.props.occurrencesTypeRankingPodium[Values.FIRST]
                                    .occurrences_count}
                            </Text>
                        </View>
                        <View style={styles.screenImagesIndividual}>
                            <Image
                                style={styles.thirdPlace}
                                source={
                                    this._renderIconPodium(
                                        this.props.occurrencesTypeRankingPodium[Values.THIRD].type)
                                }
                            />
                            <Text style={styles.ocurrenceType}>
                                3. {this.props.occurrencesTypeRankingPodium[Values.THIRD]
                                    .type}
                            </Text>
                            <Text style={styles.totalOcurrenceType}>
                                {this.props.occurrencesTypeRankingPodium[Values.THIRD]
                                    .occurrences_count}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.screenList}>
                        <ListView
                            style={styles.rankingList}
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator}
                        />
                    </View>
                    <View style={styles.screenTotal}>
                        <Text style={styles.totalTextOcurrenceType}>
                            {Texts.Informative.TOTAL_OCCURRENCES}
                        </Text>
                        <Text style={styles.totalOcurrenceType}>
                            {this.props.totalOccurrenceType}
                        </Text>
                    </View>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                {this._renderRanking()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    occurrencesTypeRankingPodium: state.RankingReducer.occurrencesTypeRankingPodium,
    occurrencesTypeRankingList: state.RankingReducer.occurrencesTypeRankingList,
    totalOccurrenceType: state.RankingReducer.totalOccurrenceType,
    isLoadingListOfRanking: state.RankingReducer.isLoadingListOfRanking,
});

export default connect(mapStateToProps, { 
    fetchOccurrencesTypeRanking,
})(Ranking);
