import React, { Component } from 'react';
import {
    View, Text, Modal, Image, Alert,
    ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';

import styles from './styles';
import { Texts, Colors } from '../../commom';
import firebaseApp from '../../services/firebase';
import { 
    parseNumberToTwoDigits
} from '../../utils';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this._responseProfile = this._responseProfile.bind(this);

        this.state = {
            occurrencePhoto: null,
            user: {
                name: '',
                photo: '',
            },
            reputation: 0,
            occurrencesCount: 0,
            canVote: false,
            gettingUser: false,
            db: null,
        };
    }

    async componentDidMount() {
        this.setState({ gettingUser: true });
        
        const date = new Date();
        const year = date.getFullYear();
        const month = parseNumberToTwoDigits(date.getMonth() + 1);
        const day = parseNumberToTwoDigits(date.getDate());

        firebaseApp.database()
            .ref(`/users/${this.props.occurrence.occurrence.userID}`)
            .once('value')
            .then(snapshot => {
                const user = snapshot.val();
                this.setState({
                    reputation: user.reputation || 0,
                    occurrencesCount: user.occurrencesCount || 0,
                });
            })
            .then(() => {
                firebaseApp.database()
                .ref(`/occurrences/${year}/${month}/${day}/${this.props.occurrence.key}`)
                .once('value')
                .then(snapshot => {
                    const occurrencePhotoSnap = snapshot.val();
                    this.setState({
                        occurrencePhoto: occurrencePhotoSnap.photo || null,
                    });
                });   
            });

        const profileRequest = await new GraphRequest(
            `/${this.props.occurrence.occurrence.userID}?fields=name,picture.type(large)`,
            null,
            this._responseProfile,
        );
        
        await new GraphRequestManager().addRequest(profileRequest).start();
    }

    async _responseProfile(err, result) {
        this.setState({ gettingUser: false });

        if (err) {
            Actions.pop();
            Alert.alert(Texts.Errors.OOPS, Texts.Errors.CANT_GET_USER_DATA);
        } else {
            this.setState({
                user: {
                    name: result.name,
                    photo: result.picture.data.url,
                }
            }, this._checkCanVote());
        }
    }

    _checkCanVote = () => {
        if (this.props.occurrence.occurrence.userID === this.props.userID) {
            this.setState({ canVote: false });
        } else {
            const date = new Date();
            const year = date.getFullYear();
            const month = parseNumberToTwoDigits(date.getMonth() + 1);
            const day = parseNumberToTwoDigits(date.getDate());
    
            firebaseApp.database()
                .ref(`/occurrences/${year}/${month}/${day}/${this.props.occurrence.key}/feedback`)
                .on('value', snapshot => {
                    if (snapshot !== undefined) {
                        if (snapshot.numChildren() === 0) {
                            this.setState({ canVote: true });
                        } else {
                            snapshot.forEach(user => {
                                if (user.key === this.props.userID) {
                                    this.setState({ canVote: false });
                                } else {
                                    this.setState({ canVote: true });
                                }
                            });
                        }
                    } else {
                        this.setState({ canVote: true });
                    }
                });
        }
    }

    _giveFeedback = feedback => {
        const date = new Date();
        const year = date.getFullYear();
        const month = parseNumberToTwoDigits(date.getMonth() + 1);
        const day = parseNumberToTwoDigits(date.getDate());

        firebaseApp.database()
            .ref(`/occurrences/${year}/${month}/${day}/${this.props.occurrence.key}/feedback/`)
            .child(`${this.props.userID}`)
            .set(feedback);

        const reputationRef = firebaseApp.database()
            .ref(`/users/${this.props.occurrence.occurrence.userID}/`)
            .child('reputation');

        reputationRef.transaction(reputation => (feedback ? reputation + 1 : reputation - 1))
            .then(() => this.setState({ canVote: false }));
    }

    _renderImageOccurrence = () => {
            if (this.state.occurrencePhoto === null 
                || this.state.occurrencePhoto === Texts.Messages.NO_IMAGE) {
                return (
                    <Text style={styles.noImage}>
                        { Texts.Informative.NO_IMAGE }
                    </Text>
                );
            }

            return (
                <View style={styles.photoOccurrenceContainer}>
                    <Image
                        style={styles.occurrencePhoto}
                        source={{ uri: this.state.occurrencePhoto }}
                    />
                </View>
            );
    }

    _renderUserData = () => {
        if (this.state.gettingUser) {
            return (
                <ActivityIndicator size='large' alignSelf='center' style={styles.loading} />
            );
        }

        if (this.state.user.photo !== '') {
            return (
                <View style={styles.userContainer}>
                    <Image
                        style={styles.photo}
                        source={{ uri: this.state.user.photo }}
                    />
    
                    <Text style={styles.name}>
                        { this.state.user.name }
                    </Text>

                    <View style={styles.detailsContainer}>
                        <View style={styles.infoContainer}>
                            <Text
                                style={[
                                    styles.counter,
                                    this.state.reputation >= 0 ?
                                        { color: Colors.GREEN_MEDIUM } : { color: Colors.RED_DARK }
                                ]}
                            >
                                { this.state.reputation }
                            </Text>
                            <Text style={styles.label}>
                                { Texts.Labels.REPUTATION_COUNT }
                            </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={[styles.counter, { color: Colors.BLUE_MEDIUM }]}>
                                { this.state.occurrencesCount }
                            </Text>
                            <Text style={styles.label}>
                                { Texts.Labels.OCCURRENCES_COUNT }
                            </Text>
                        </View>
                    </View>
                    { this._renderImageOccurrence() }
                </View>
            );
        }
    }

    _renderButtons = () => {
        if (this.state.canVote) {
            return (
                <View style={{ width: '100%' }}>
                    <Text style={styles.feedbackTitle}>
                        { Texts.Informative.HOW_DO_YOU_RATE_THIS_OCCURRENCE }
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.positiveButton}
                            onPress={() => this._giveFeedback(true)}
                        >
                            <Text style={styles.buttonText}>
                                { Texts.Buttons.LIKE }
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.negativeButton}
                            onPress={() => this._giveFeedback(false)}
                        >
                        <Text style={styles.buttonText}>
                            { Texts.Buttons.DISLIKE }
                            </Text>
                        </TouchableOpacity>
                    </View>
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
                            { this._renderUserData() }
                            { this._renderButtons() }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

UserProfile.propTypes = {
    occurrence: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    userID: state.AuthenticationReducer.userID,
});

export default connect(mapStateToProps)(UserProfile);
