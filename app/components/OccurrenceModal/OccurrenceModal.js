import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';
import { Texts, Regexes } from '../../commom';
import {
    showDialog,
    writeVehicle,
    changeOccurrenceType,
    updateVehicleError,
    addOccurrence,
} from '../../redux/actions/FeedActions';
import Button from '../Button';
import LicensePlateInput from '../../components/license-plate-input';

class OccurrenceModal extends Component {
    state = {
        photoSource: null,
        options: {
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
            mediaType: 'photo',
            title: 'Foto da Placa',
            takePhotoButtonTitle: 'Tirar Foto',
            chooseFromLibraryButtonTitle: 'Escolher da Biblioteca',
            cancelButtonTitle: 'Cancelar',
            storageOptions: {
              skipBackup: true,
            }
        },
    };

    _showImagePicker() {
        ImagePicker.showImagePicker(this.state.options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
          
              this.setState({
                photoSource: source
              });
            }
          });
    }

    _renderImagePickerButton() {
        return (
            <TouchableOpacity onPress={this._showImagePicker.bind(this)}>
                <View style={[styles.photo, styles.photoContainer]}>
                    { this.state.photoSource === null ? 
                        <View>
                            <Text style={styles.photoText}>Foto</Text>
                            <Text style={styles.optional}>*Opcional*</Text>
                        </View>
                        :
                        <Image style={styles.photo} source={this.state.photoSource} />
                    }
                </View>
            </TouchableOpacity>
        );
    }

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
                    style={styles.picker}
                    selectedValue={this.props.pickerValueHolder}
                    onValueChange={(itemValue, itemIndex) => 
                        this.props.changeOccurrenceType(itemValue)} 
                >
                    {
                        _.map(this.props.occurrenceTypes, (item, key) => 
                            <Picker.Item label={item.type} value={item.type} key={key} />
                        )
                    }
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

                        <LicensePlateInput
                            onWrite={text => this.props.writeVehicle(text)}
                        />
                        <Text style={styles.error}>
                            { this.props.vehicleError }
                        </Text>

                        {this._renderImagePickerButton()}

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
