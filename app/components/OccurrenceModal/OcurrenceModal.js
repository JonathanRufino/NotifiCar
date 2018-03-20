import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Texts } from '../../commom';
import {
    showDialog,
    writeVehicle
} from '../../redux/actions/FeedActions';

class OcurrenceModal extends Component {
    render() {
        return (
            <Modal
                transparent
                visible={this.props.dialogIsVisible}
                onRequestClose={() => this.props.showDialog(false)}
            >
                <TouchableWithoutFeedback onPress={() => this.props.showDialog(false)}>
                    <View style={styles.modal}>
                        <View style={styles.container}>
                            <Text style={styles.title}>
                                { Texts.Titles.REGISTER_OCURRENCE }
                            </Text>

                            <TextInput
                                style={styles.inputField}
                                value={this.props.vehicle}
                                onChangeText={(text) => this.props.writeVehicle(text)}
                                maxLength={8}
                                autoCapitalize='characters'
                                placeholder={Texts.Placeholders.LICENSE_PLATE}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    dialogIsVisible: state.FeedReducer.dialogIsVisible,
    vehicle: state.FeedReducer.vehicle,
});

export default connect(mapStateToProps, {
    showDialog, writeVehicle
})(OcurrenceModal);
