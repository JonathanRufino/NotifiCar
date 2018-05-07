import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const OccurrenceOfTheDay = ({ occurrence, image }) => (
    <TouchableWithoutFeedback
        onPress={() => Actions.push('occurrenceDetails', { occurrence })}
    >
        <View style={styles.container}>
            <Image style={styles.photo} source={image} />

            <View style={styles.infoContainer}>
                <Text style={styles.licensePlate}>
                    { occurrence.vehicle.toUpperCase() }
                </Text>
                <Text style={styles.description}>
                    { occurrence.occurrence_type }
                </Text>
            </View>

            <Text style={styles.time}>
                { occurrence.time }
            </Text>
        </View>
    </TouchableWithoutFeedback>
);

export default OccurrenceOfTheDay;
