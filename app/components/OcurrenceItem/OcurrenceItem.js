import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const OcurrenceOfTheDay = ({ ocurrence }) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            { ocurrence.time }
        </Text>
        <Text style={styles.text}>
            { ocurrence.typeOcurrence }
        </Text>
        <Text style={styles.text}>
            { ocurrence.userID }
        </Text>
        <Text style={styles.text}>
            { ocurrence.vehicle }
        </Text>
    </View>
);

export default OcurrenceOfTheDay;
