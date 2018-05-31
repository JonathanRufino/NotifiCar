import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import SelectInput from 'react-native-select-input-ios';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { Texts, Regexes, Images } from '../../commom';
import { addOccurrence } from '../../redux/actions/FeedActions';
import Button from '../Button';
import LicensePlateInput from '../../components/license-plate-input';

class OccurrenceModal extends Component {
    state = {
        occurrenceType: 0,
        occurrenceTypeError: ' ',
        vehicle: '',
        vehicleError: ' ',
        photoSource: null,
        options: {
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
            mediaType: 'photo',
            title: Texts.Titles.REGISTER_IMAGE,
            takePhotoButtonTitle: Texts.Buttons.TAKE_PICTURE,
            chooseFromLibraryButtonTitle: Texts.Buttons.CHOOSE_FROM_LIBRARY,
            cancelButtonTitle: Texts.Buttons.CANCEL,
            storageOptions: {
                skipBackup: true,
            }
        },
    };

    _showImagePicker() {
        ImagePicker.showImagePicker(this.state.options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
          
                this.setState({ photoSource: source });
            }
        });
    }

    _renderDeleteImageButton() {
        if (this.state.photoSource === null || this.props.isLoadingPicker) {
            return;
        }

        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ photoSource: null });
                }} 
                style={styles.button}
            >
                <Image style={styles.image} source={Images.ICON_TRASH} />
            </TouchableOpacity>
        );
    }

    _renderImagePickerButton() {
        return (
            <View style={styles.photoCaseContainer}>
                <TouchableOpacity onPress={this._showImagePicker.bind(this)}>
                    <View style={[styles.photo, styles.photoContainer]}>
                        { this.state.photoSource === null ? 
                            <View>
                                <Text style={styles.photoText}>{Texts.Labels.PHOTO}</Text>
                                <Text style={styles.optional}>{Texts.Labels.OPTIONAL}</Text>
                            </View>
                            : 
                            <Image style={styles.photo} source={this.state.photoSource} />
                        }
                    </View>
                </TouchableOpacity>

                { this._renderDeleteImageButton() }
            </View>
        );
    }
    
    _validateOccurrence() {
        if (this.state.occurrenceType === 0) {
            this.setState({ occurrenceTypeError: Texts.Errors.SELECT_OCCURRENCE_TYPE });
        } else if (this.state.vehicle === '') {
            this.setState({ vehicleError: Texts.Errors.EMPTY_LICENSE_PLATE });
        } else if (!Regexes.LICENSE_PLATE.test(this.state.vehicle)) {
            this.setState({ vehicleError: Texts.Errors.INVALID_LICENSE_PLATE });
        } else {
            this.props.addOccurrence(
                this.props.userID, 
                this.props.occurrencesTypes[this.state.occurrenceType].label,
                this.state.vehicle,
                this.state.photoSource
            );
        }
    }
    
    _renderRegisterOccurrenceButton() {
        if (this.props.isLoadingPicker) {
            return <ActivityIndicator size='large' style={styles.loading} />;
        }

        return (
            <Button
                title={Texts.Buttons.REGISTER_OCCURRENCE}
                onPress={() => this._validateOccurrence()}
            />
        );
    }

    render() {
        return (
            <View>
                <Modal
                    isVisible
                    onBackdropPress={() => Actions.pop()}
                    onBackButtonPress={() => Actions.pop()}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            { Texts.Titles.REGISTER_OCCURRENCE }
                        </Text>

                        <SelectInput
                            value={this.state.occurrenceType}
                            options={this.props.occurrencesTypes}
                            style={styles.selectInput}
                            onSubmitEditing={item => this.setState({
                                occurrenceType: item, occurrenceTypeError: ' '
                            })}
                        />
                        <Text style={styles.error}>
                            { this.state.occurrenceTypeError }
                        </Text>

                        <LicensePlateInput
                            onWrite={text => this.setState({
                                vehicle: text, vehicleError: ' '
                            })}
                        />
                        
                        <Text style={styles.error}>
                            { this.state.vehicleError }
                        </Text>

                        { this._renderImagePickerButton() }

                        { this._renderRegisterOccurrenceButton() }
                    </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    occurrencesTypes: state.MainReducer.occurrencesTypes,
    pickerValueHolder: state.FeedReducer.pickerValueHolder,
    isLoadingPicker: state.FeedReducer.isLoadingPicker,
    vehicleError: state.FeedReducer.vehicleError,
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps, {
    addOccurrence
})(OccurrenceModal);
