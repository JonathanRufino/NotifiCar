import React, { Component } from 'react';
import { View, ListView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import Swipeable from 'react-native-swipeable';

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
    constructor(props) {
        super(props);
        this.state = {
            currentlyOpenSwipeable: null
        };
    }

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

    _getRightButtons(vehicle) {
        const swiperButtons = [
            <TouchableOpacity
                onPress={() => this.props.removeVehicle(this.props.userID, vehicle)} 
                style={styles.button}
            >
                <Image style={styles.image} source={Images.ICON_TRASH} />
            </TouchableOpacity>
        ];

        return swiperButtons;
    }

    _renderRow(data) {
        const { currentlyOpenSwipeable } = this.state;
        const itemProps = {
          onOpen: (event, gestureState, swipeable) => {
            if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
              currentlyOpenSwipeable.recenter();
            }
    
            this.setState({ currentlyOpenSwipeable: swipeable });
          },
          onClose: () => this.setState({ currentlyOpenSwipeable: null })
        };

        return (
            <Swipeable
                rightButtons={this._getRightButtons(data)}
                onRightButtonsOpenRelease={itemProps.onOpen}
                onRightButtonsCloseRelease={itemProps.onClose}
            >
                <View style={styles.listItem}>
                    <LicensePlate licensePlate={data} />
                </View>
            </Swipeable>
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
                    buttonColor={Colors.RED_LIGHT}
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
        vehicles = Object.keys(state.AccountReducer.vehicles);
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
