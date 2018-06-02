import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { Texts, Regexes } from '../../commom';
import {
    addVehicle,
} from '../../redux/actions/AccountActions';
import Button from '../Button';
import LicensePlateInput from '../../components/license-plate-input';

class VehicleModal extends Component {
    state = {
        vehicle: '',
        vehicleError: ' ',
        isVisible: true,
    }

    async _validateVehicle() {
        const { vehicle } = this.state;

        if (!vehicle) {
            this.setState({ vehicleError: Texts.Errors.EMPTY_LICENSE_PLATE });
        } else if (!Regexes.LICENSE_PLATE.test(vehicle)) {
            this.setState({ vehicleError: Texts.Errors.INVALID_LICENSE_PLATE });
        } else {
            await this.props.addVehicle(this.props.userID, vehicle);
            this._closeModal();
        }
    }

    _renderRegisterButton() {
        if (this.props.isSavingVehicle) {
            return (
                <ActivityIndicator size='large' style={styles.loading} />
            );
        }

        return (
            <Button
                title={Texts.Buttons.REGISTER}
                onPress={() => this._validateVehicle()}
            />
        );
    }

    _closeModal = () => {
        this.setState({ isVisible: false });
    }

    render() {
        return (
            <Modal
                ref={ref => { this.MODAL_REF = ref; }}
                isVisible={this.state.isVisible}
                onBackdropPress={this._closeModal}
                onBackButtonPress={this._closeModal}
                onModalHide={() => Actions.pop()}
                hideModalContentWhileAnimating
            >
                <View style={styles.container}>
                    <Text style={styles.title}>
                        { Texts.Titles.REGISTER_VEHICLE }
                    </Text>
                    <View style={styles.inputContainer}>
                        <LicensePlateInput
                            onWrite={text => this.setState({
                                vehicle: text, vehicleError: ' '
                            })}
                        />
                        <Text style={styles.error}>
                            { this.state.vehicleError }
                        </Text>
                    </View>

                    { this._renderRegisterButton() }
                </View>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    isSavingVehicle: state.AccountReducer.isSavingVehicle,
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    addVehicle,
})(VehicleModal);
