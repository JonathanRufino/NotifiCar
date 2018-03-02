import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import styles from './styles';
import {
    getUserData,
    showDialog
} from '../../actions/AccountActions';
import VehicleModal from '../vehicleModal';

class Account extends Component {
    componentWillMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <View style={styles.screen}>
                <VehicleModal />
                <ActionButton
                    buttonColor='rgba(231,76,60,1)'
                    onPress={() => this.props.showDialog(true)}
                />  
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    vehicles: state.AccountReducer.vehicles,
    error: state.AccountReducer.error,
    userData: state.AccountReducer.userData,
});

export default connect(mapStateToProps, {
    getUserData, showDialog
})(Account);
