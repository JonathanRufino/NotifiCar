import React, { Component } from 'react';
import {
    View, Text, Modal, TouchableWithoutFeedback, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import styles from './styles';
import { Images, Texts } from '../../commom';

class OccurrenceDetails extends Component {
    constructor(props) {
        super(props);

        this._responseProfile = this._responseProfile.bind(this);

        this.state = {
            userName: '',
            userImage: '',
        };
    }

    componentWillMount() {
        const profileRequest = new GraphRequest(
            `/${this.props.occurrence.userID}?fields=name,picture`,
            null,
            this._responseProfile,
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    }

    _responseProfile(err, result) {
        if (err) {
            console.log(err);
        } else {
            this.setState({
                userName: result.name,
                userImage: result.picture.data.url,
            });
        }
    }

    _renderUserInfo() {
        if (this.state.userImage !== '') {
            return (
                <View style={styles.userContainer}>
                    <Image
                        style={styles.profile}
                        source={{ uri: this.state.userImage }}
                    />
                    <Text style={styles.userName}>
                        { this.state.userName }
                    </Text>
                </View>
            );
        }
    }


    render() {
        return (
            <Modal
                transparent
                visible
                onRequestClose={() => Actions.pop()}
            >
                <TouchableWithoutFeedback
                    onPress={() => Actions.pop()}
                >
                    <View style={styles.modal}>
                        <View style={styles.container}>
                            <Text>{this.props.occurrence.occurrence_type}</Text>
                            <Text>{this.props.occurrence.time}</Text>
                            <Text>{this.props.occurrence.userID}</Text>
                            <Text>{this.props.occurrence.vehicle}</Text>
                            {/* { this._renderUserInfo() } */}
                            <View style={styles.userContainer}>
                                <Image
                                    style={styles.profile}
                                    source={{ uri: this.state.userImage }}
                                />
                                <Text style={styles.userName}>
                                    { this.state.userName }
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

OccurrenceDetails.propTypes = {
    image: PropTypes.number,
    title: PropTypes.string,
    message: PropTypes.string,
};

OccurrenceDetails.defaultProps = {
    image: Images.ERROR,
    title: Texts.OOPS,
    message: Texts.Errors.GENERIC_ERROR,
};

export default OccurrenceDetails;
