import React, { Component } from 'react';
import { View, Text, TextInput, Modal } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import {
    writeVehicle,
    addVehicle,
    updateVehicleError
} from '../../actions/AccountActions';
import Button from '../../components/button';
import texts from '../../commom/texts';
import { LICENSE_PLATE_REGEX } from '../../commom/regex';

class VehicleModal extends Component {
    _validateVehicle() {
        const { vehicle, userID } = this.props;

        if (!vehicle) {
            this.props.updateVehicleError(texts.errors.emptyVehicle);
        } else if (!LICENSE_PLATE_REGEX.test(vehicle)) {
            this.props.updateVehicleError(texts.errors.invalidVehicle);
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
                            {texts.titles.registerVehicle}
                        </Text>
                        <View>
                            <TextInput
                                style={styles.inputField}
                                value={this.props.vehicle}
                                onChangeText={(text) => this.props.writeVehicle(text)}
                                maxLength={8}
                                autoCapitalize='characters'
                                placeholder={texts.placeholders.vehicle}
                            />
                            <Text style={styles.error}>
                                {this.props.vehicleError}
                            </Text>
                        </View>
                        <Button
                            title={texts.buttons.register}
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
