import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import FCM from 'react-native-fcm';
import { connect } from 'react-redux';

import styles from './styles';
import TabBarMenu from '../../components/TabBarMenu';
import Account from '../../components/Account';
import Ranking from '../../components/Ranking';
import Feed from '../../components/Feed';
import firebaseApp from '../../services/firebase';
import { fetchOccurrencesTypes } from '../../redux/actions/MainActions';

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
            { key: '3', title: 'Conta' },
        ],
    };
    
    async componentDidMount() {
        this.props.fetchOccurrencesTypes();

        FCM.getFCMToken()
            .then(token => {
                firebaseApp.database().ref(`/users/${this.props.userID}`)
                    .child('token')
                    .set(token);
            });
    }

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

const mapStateToProps = (state) => ({
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, { fetchOccurrencesTypes })(Main);
