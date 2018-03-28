import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const OccurrenceOfTheDay = ({ occurrence, image }) => (
    <View style={styles.container}>
        <View style={styles.photo}>
            <Image style={styles.photo} source={image} />
        </View>
        <View style={styles.itemView}>
            <Text style={styles.text}>
                { occurrence.vehicle.toUpperCase() }
            </Text>
            <Text style={styles.text}>
                { occurrence.occurrence_type }
            </Text>
        </View>
        <View>
            <Text style={styles.textTime}>
                { occurrence.time }
            </Text>
        </View>
    </View>
);

export default OccurrenceOfTheDay;
