import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import styles from './styles';
import { Texts, Regexes } from '../../commom';
import {
    writeVehicle,
    addVehicle,
    updateVehicleError,
    showDialog,
} from '../../redux/actions/AccountActions';
import Button from '../Button';

class VehicleModal extends Component {
    _validateVehicle() {
        const { vehicle, userID } = this.props;

        if (!vehicle) {
            this.props.updateVehicleError(Texts.Errors.EMPTY_LICENSE_PLATE);
        } else if (!Regexes.LICENSE_PLATE.test(vehicle)) {
            this.props.updateVehicleError(Texts.Errors.INVALID_LICENSE_PLATE);
        } else {
            this.props.addVehicle(userID, vehicle);
        }
    }

    _renderRegisterButton() {
        if (this.props.isSavingVehicle) {
            return (
                <ActivityIndicator size='large' />
            );
        }

        return (
            <Button
                title={Texts.Buttons.REGISTER}
                onPress={() => this._validateVehicle()}
            />
        );
    }

    render() {
        return (
            <Modal
                isVisible={this.props.dialogIsVisible}
                onBackdropPress={() => this.props.showDialog(false)}
                onBackButtonPress={() => this.props.showDialog(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            { Texts.Titles.REGISTER_VEHICLE }
                        </Text>
                        <View>
                            <TextInput
                                style={styles.inputField}
                                value={this.props.vehicle}
                                onChangeText={(text) => this.props.writeVehicle(text)}
                                maxLength={8}
                                autoCapitalize='characters'
                                placeholder={Texts.Placeholders.LICENSE_PLATE}
                            />
                            <Text style={styles.error}>
                                { this.props.vehicleError }
                            </Text>
                        </View>
                        <View>
                            { this._renderRegisterButton() }
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    vehicle: state.AccountReducer.vehicle,
    vehicleError: state.AccountReducer.vehicleError,
    dialogIsVisible: state.AccountReducer.dialogIsVisible,
    isSavingVehicle: state.AccountReducer.isSavingVehicle,
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    writeVehicle, addVehicle, updateVehicleError, showDialog
})(VehicleModal);
