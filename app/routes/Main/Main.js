import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import styles from './styles';
import TabBarMenu from '../../components/TabBarMenu';
import Feed from '../../components/Feed';
import Ranking from '../../components/Ranking';
import Account from '../../components/account/index';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class Main extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Feed' },
            { key: '2', title: 'Ranking' },
            { key: '3', title: 'Account' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBarMenu {... props} />;

    _renderScene = SceneMap({
        '1': Feed,
        '2': Ranking,
        '3': Account,
    });

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

export default Main;
