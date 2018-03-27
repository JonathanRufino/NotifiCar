import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Picker,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-native-modal';

import styles from './styles';
import { Texts, Regexes } from '../../commom';
import {
    showDialog,
    writeVehicle,
    changeOcurrenceType,
    updateVehicleError,
    addOcurrence,
} from '../../redux/actions/FeedActions';
import Button from '../Button';

class OcurrenceModal extends Component {
    _showPickerWhenDataFetch() {
        if (this.props.isLoadingPicker) {
            return (
                <ActivityIndicator size='small' />
            );
        }

        return (
            <View>
                <Text style={styles.type_ocurrence}>
                    { Texts.Informative.OCURRENCE_TYPE }
                </Text>
                <Picker
                    selectedValue={this.props.pickerValueHolder}
                    onValueChange={(itemValue, itemIndex) => 
                        this.props.changeOcurrenceType(itemValue)} 
                >
                    { _.map(this.props.ocurrenceTypes, (item, key) => 
                        (<Picker.Item label={item.type} value={item.type} key={key} />)
                    )}
                </Picker>
            </View>
        );
    }
    
    _validateOcurrence() {
        if (this.props.vehicle === '') {
            this.props.updateVehicleError(Texts.Errors.EMPTY_LICENSE_PLATE);
        } else if (!Regexes.LICENSE_PLATE.test(this.props.vehicle)) {
            this.props.updateVehicleError(Texts.Errors.INVALID_LICENSE_PLATE);
        } else {
            this.props.addOcurrence(this.props.userID, 
                this.props.pickerValueHolder, this.props.vehicle);
        }
    }
    
    _renderRegisterOcurrenceButton() {
        if (!this.props.isLoadingPicker) {
            return (
                <Button
                    title={Texts.Buttons.REGISTER_OCURRENCE}
                    onPress={() => this._validateOcurrence()}
                />
            );
        }
    }

    render() {
        return (
            <View>
                <Modal
                    isVisible={this.props.dialogIsVisible}
                    onBackdropPress={() => this.props.showDialog(false)}
                    onBackButtonPress={() => this.props.showDialog(false)}
                >
                    <View style={styles.modal}>
                        <View style={styles.container}>
                            <Text style={styles.title}>
                                { Texts.Titles.REGISTER_OCURRENCE }
                            </Text>
                            {this._showPickerWhenDataFetch()}
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
                            <View>
                                { this._renderRegisterOcurrenceButton() }
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
        ocurrenceTypes: state.FeedReducer.ocurrenceTypes,
        dialogIsVisible: state.FeedReducer.dialogIsVisible,
        vehicle: state.FeedReducer.vehicle,
        pickerValueHolder: state.FeedReducer.pickerValueHolder,
        isLoadingPicker: state.FeedReducer.isLoadingPicker,
        vehicleError: state.FeedReducer.vehicleError,
        userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    showDialog, writeVehicle, changeOcurrenceType, updateVehicleError, addOcurrence
})(OcurrenceModal);
