import React, { Component } from 'react';
import { View, ListView, ActivityIndicator, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Colors, Values, Images, Texts } from '../../commom';
import {
    fetchOccurrencesTypeRanking,
} from '../../redux/actions/RankingActions';
import EmptyState from '../../components/EmptyState';

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
    
    _renderRow(occurrencesTypedata) {
        return (
            <Text style={styles.totalTypeOcurrence}>
                oi 135345345
            </Text>
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

        return (
            <View>
                <View style={styles.screenImages}>
                    <View style={styles.screenImagesIndividual}>
                        <Image
                            style={styles.secondPlace}
                            source={Images.ICON_LIGHTS}
                        />
                        <Text style={styles.totalTypeOcurrence}>
                            oi 2
                        </Text>
                    </View>
                    <View style={styles.screenImagesIndividual}>
                        <Image
                            style={styles.firstPlace}
                            source={Images.ICON_DOOR_OPEN}
                        />
                        <Text style={styles.totalTypeOcurrence}>
                            oi 1
                        </Text>
                    </View>
                    <View style={styles.screenImagesIndividual}>
                        <Image
                            style={styles.thirdPlace}
                            source={Images.ICON_CAR_BLOCKING}
                        />
                        <Text style={styles.totalTypeOcurrence}>
                            oi 3
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
                
            </View>
        );
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
    isLoadingListOfRanking: state.RankingReducer.isLoadingListOfRanking,
});

export default connect(mapStateToProps, { 
    fetchOccurrencesTypeRanking,
})(Ranking);
