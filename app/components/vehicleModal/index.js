import React, { Component } from 'react';
import { View, Text, TextInput, Modal } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Texts, Regexes } from '../../commom';
import {
    writeVehicle,
    addVehicle,
    updateVehicleError
} from '../../actions/AccountActions';
import Button from '../../components/button';

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

    render() {
        return (
            <Modal
                transparent
                visible={this.props.dialogIsVisible}
                onRequestClose={() => {}}
            >
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            {Texts.Titles.REGISTER_VEHICLE}
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
                                {this.props.vehicleError}
                            </Text>
                        </View>
                        <Button
                            title={Texts.Buttons.REGISTER}
                            onPress={() => this._validateVehicle()}
                        />
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
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    writeVehicle, addVehicle, updateVehicleError
})(VehicleModal);
