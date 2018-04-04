import React, { Component } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import Swipeout from 'react-native-swipeout';

import styles from './styles';
import { Colors, Values, Images, Texts } from '../../commom';
import {
    showDialog,
    fetchUserVehicles,
    removeVehicle,
} from '../../redux/actions/AccountActions';
import VehicleModal from '../VehicleModal';
import LicensePlate from '../LicensePlate';
import EmptyState from '../../components/EmptyState';

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

    _getSwiperButtons(vehicle) {
        const swiperButtons = [
            {
                backgroundColor: Colors.RED,
                color: Colors.WHITE,
                onPress: () => this.props.removeVehicle(this.props.userID, vehicle),
                text: Texts.Buttons.DELETE,
                type: 'delete',
            }
        ];

        return swiperButtons;
    }

    _renderRow(data) {
        return (
            <Swipeout
                autoClose
                backgroundColor={Colors.TRANSPARENT}
                right={this._getSwiperButtons(data)}
                style={{
                    alignItems: 'center',
                    backgroundColor: Colors.TRANSPARENT,
                }}
            >
                <LicensePlate licensePlate={data} />
            </Swipeout>
        );
    }

    _renderListOfVehicles() {
        if (this.props.isLoadingListOfVehicles) {
            return (
                <ActivityIndicator style={styles.indicator} size='large' />
            );
        }

        if (this.props.vehicles.length === Values.EMPTY) {
            return (
                <EmptyState
                    image={Images.ICON_CAR}
                    title={Texts.Informative.NO_VEHICLES}
                    message={Texts.Informative.ADD_VEHICLE_INSTRUCTIONS}
                />
            );
        }

        return (
            <ListView
                style={styles.vehiclesList}
                enableEmptySections
                dataSource={this.vehiclesData}
                renderRow={data => this._renderRow(data)}
            />
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <VehicleModal />

                {this._renderListOfVehicles()}

                <ActionButton
                    buttonColor='rgba(231,76,60,1)'
                    onPress={() => this.props.showDialog(true)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    let vehicles;

    if (state.AccountReducer.vehicles === null) {
        vehicles = [];
    } else {
        vehicles = Object.keys(state.AccountReducer.vehicles); /* Zé GOD */
    }

    return {
        vehicles,
        error: state.AccountReducer.error,
        isLoadingListOfVehicles: state.AccountReducer.isLoadingListOfVehicles,
        userID: state.AuthenticationReducer.userID,
    };
};

export default connect(mapStateToProps, {
    showDialog, fetchUserVehicles, removeVehicle
})(Account);
