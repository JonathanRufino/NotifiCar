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
import { Texts, Regexes, Values } from '../../commom';
import {
    showDialog,
    writeVehicle,
    changeOccurrenceType,
    updateVehicleError,
    addOccurrence,
} from '../../redux/actions/FeedActions';
import Button from '../Button';

class OccurrenceModal extends Component {
    _showPickerWhenDataFetch() {
        if (this.props.isLoadingPicker) {
            return (
                <ActivityIndicator size='small' />
            );
        }

        return (
            <View>
                <Text style={styles.type_occurrence}>
                    { Texts.Informative.OCCURRENCE_TYPE }
                </Text>
                <Picker
                    selectedValue={this.props.pickerValueHolder}
                    onValueChange={(itemValue, itemIndex) => 
                        this.props.changeOccurrenceType(itemValue)} 
                >
                    { _.map(this.props.occurrenceTypes, (item, key) => 
                        (<Picker.Item label={item.type} value={item.type} key={key} />)
                    )}
                </Picker>
            </View>
        );
    }
    
    _validateOccurrence() {
        if (this.props.vehicle === '') {
            this.props.updateVehicleError(Texts.Errors.EMPTY_LICENSE_PLATE);
        } else if (!Regexes.LICENSE_PLATE.test(this.props.vehicle)) {
            this.props.updateVehicleError(Texts.Errors.INVALID_LICENSE_PLATE);
        } else {
            this.props.addOccurrence(this.props.userID, 
                this.props.pickerValueHolder, this.props.vehicle);
        }
    }
    
    _renderRegisterOccurrenceButton() {
        if (!this.props.isLoadingPicker) {
            return (
                <Button
                    title={Texts.Buttons.REGISTER_OCCURRENCE}
                    onPress={() => this._validateOccurrence()}
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
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            { Texts.Titles.REGISTER_OCCURRENCE }
                        </Text>

                        {this._showPickerWhenDataFetch()}

                        <TextInput
                            style={styles.inputField}
                            value={this.props.vehicle}
                            onChangeText={(text) => this.props.writeVehicle(text)}
                            maxLength={Values.LICENSE_PLATE_MAX_LENGTH}
                            autoCapitalize='characters'
                            placeholder={Texts.Placeholders.LICENSE_PLATE}
                        />
                        <Text style={styles.error}>
                            { this.props.vehicleError }
                        </Text>

                        { this._renderRegisterOccurrenceButton() }
                    </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
        occurrenceTypes: state.FeedReducer.occurrenceTypes,
        dialogIsVisible: state.FeedReducer.dialogIsVisible,
        vehicle: state.FeedReducer.vehicle,
        pickerValueHolder: state.FeedReducer.pickerValueHolder,
        isLoadingPicker: state.FeedReducer.isLoadingPicker,
        vehicleError: state.FeedReducer.vehicleError,
        userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    showDialog, writeVehicle, changeOccurrenceType, updateVehicleError, addOccurrence
})(OccurrenceModal);
