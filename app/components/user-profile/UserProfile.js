import React, { Component } from 'react';
import {
    View, Text, Modal, TouchableWithoutFeedback, Image, Alert, ActivityIndicator, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';

import styles from './styles';
import { Texts, Colors } from '../../commom';
import firebaseApp from '../../services/firebase';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this._responseProfile = this._responseProfile.bind(this);

        this.state = {
            user: {
                name: '',
                photo: '',
            },
            reputation: 0,
            canVote: false,
            gettingUser: false,
            db: null,
        };
    }

    async componentDidMount() {
        this.setState({ gettingUser: true });

        firebaseApp.database()
            .ref(`/users/${this.props.userID}/reputation`)
            .once('value')
            .then(snapshot => {
                this.setState({ reputation: snapshot.val() || 0 });
            });

        const profileRequest = await new GraphRequest(
            `/${this.props.occurrence.occurrence.userID}?fields=name,picture`,
            null,
            this._responseProfile,
        );
        
        await new GraphRequestManager().addRequest(profileRequest).start();

        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

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

    async _responseProfile(err, result) {
        this.setState({ gettingUser: false });

        if (err) {
            Alert.alert(Texts.Errors.OOPS, Texts.Errors.CANT_GET_USER_DATA);
        } else {
            this.setState({
                user: {
                    name: result.name,
                    photo: result.picture.data.url,
                }
            });
        }
    }

    _giveFeedback = feedback => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        firebaseApp.database()
            .ref(`/occurrences/${year}/${month}/${day}/${this.props.occurrence.key}/feedback/`)
            .child(`${this.props.userID}`)
            .set(feedback);

        const refTeste = firebaseApp.database()
            .ref(`/users/${this.props.occurrence.occurrence.userID}/`)
            .child('reputation');

        refTeste.transaction(reputation => (feedback ? reputation + 1 : reputation - 1))
            .then(() => this.setState({ canVote: false }));
    }

    _renderUserdata = () => {
        if (this.state.gettingUser) {
            return (
                <ActivityIndicator size='large' alignSelf='center' style={{ margin: 4 }} />
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

                    <Text>
                        Reputação: { this.state.reputation }
                    </Text>
                </View>
            );
        }
    }

    _renderButtons = () => {
        if (this.state.canVote) {
            return (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={{ flex: 1, backgroundColor: Colors.GREEN, height: 40, justifyContent: 'center', alignItems: 'center', }}
                        onPress={() => this._giveFeedback(true)}
                    >
                        <Text style={{ color: Colors.WHITE, fontWeight: 'bold' }}>
                            Like
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1, backgroundColor: Colors.RED, height: 40, justifyContent: 'center', alignItems: 'center', }}
                        onPress={() => this._giveFeedback(false)}
                    >
                    <Text style={{ color: Colors.WHITE, fontWeight: 'bold' }}>
                            Dislike
                        </Text>
                    </TouchableOpacity>
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
                            { this._renderUserdata() }
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
