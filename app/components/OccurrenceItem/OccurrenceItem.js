import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const OccurrenceOfTheDay = ({ occurrence, image }) => (
    <View style={styles.container}>
        <Image style={styles.icon} source={image} />

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
);

export default OccurrenceOfTheDay;
