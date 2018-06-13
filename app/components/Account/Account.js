import React, { Component } from 'react';
import {
    View, ListView, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { Colors, Values, Images, Texts } from '../../commom';
import {
    fetchUserVehicles,
    removeVehicle,
} from '../../redux/actions/AccountActions';
import LicensePlate from '../LicensePlate';
import EmptyState from '../../components/EmptyState';

class Account extends Component {
    componentWillMount() {
        this.props.fetchUserVehicles(this.props.userID);
        this._createVehiclesList(this.props.vehicles);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.vehicles !== this.props.vehicles) {
            this._createVehiclesList(nextProps.vehicles);
        }
    }

    _createVehiclesList(vehicles) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.vehiclesData = ds.cloneWithRows(vehicles);
    }

    _getRightButtons(vehicle) {
        const swiperButtons = [
            {
                onPress: () => this.props.removeVehicle(this.props.userID, vehicle),
                text: 'Deletar',
                backgroundColor: Colors.RED_LIGHT, 
            }
        ];

        return swiperButtons;
    }

    _renderRow(data) {
        return (
            <Swipeout
                autoClose
                style={styles.swipe}
                right={this._getRightButtons(data)}
            >
                <View style={styles.listItem}>
                    <LicensePlate licensePlate={data} />
                </View>
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
                { this._renderListOfVehicles() }

                <ActionButton
                    buttonColor={Colors.RED_LIGHT}
                    onPress={() => Actions.push('addVehicle')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    vehicles: state.AccountReducer.vehicles,
    error: state.AccountReducer.error,
    isLoadingListOfVehicles: state.AccountReducer.isLoadingListOfVehicles,
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    fetchUserVehicles, removeVehicle
})(Account);
