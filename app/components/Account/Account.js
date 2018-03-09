import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import _ from 'lodash';

import styles from './styles';
import {
    showDialog,
    fetchUserVehicles
} from '../../redux/actions/AccountActions';
import VehicleModal from '../VehicleModal/VehicleModal';
import LicensePlate from '../LicensePlate/LicensePlate';

class Account extends Component {
    componentWillMount() {
        this.props.fetchUserVehicles(this.props.userID);
        this._createVehiclesList(this.props.vehicles);
    }

    componentWillReceiveProps(nextProps) {
        this._createVehiclesList(nextProps.vehicles);
    }

    _createVehiclesList(vehicles) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.vehiclesData = ds.cloneWithRows(vehicles);
    }

    render() {
        return (
            <View style={styles.screen}>
                <VehicleModal />
                <ListView
                    enableEmptySections
                    dataSource={this.vehiclesData}
                    renderRow={data => (
                        <LicensePlate licensePlate={data.vehicle} />
                    )}
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
    const vehicles = _.map(state.AccountReducer.vehicles, (val, uid) => ({ ...val, uid }));

    return {
        vehicles,
        error: state.AccountReducer.error,
        userID: state.AuthenticationReducer.userID,
    };
};

export default connect(mapStateToProps, {
    showDialog, fetchUserVehicles
})(Account);
