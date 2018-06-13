import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const OccurrenceTypeRanking = ({ occurrenceType, image }) => (
    <View style={styles.container}>
        <Image style={styles.icon} source={image} />

        <View style={styles.typeContainer}>
            <Text style={styles.type}>
                { occurrenceType.type }
            </Text>
        </View>
        <View style={styles.countContainer}>
            <Text style={styles.count}>
                { occurrenceType.occurrences_count }
            </Text>
        </View>
    </View>
);

export default OccurrenceTypeRanking;
