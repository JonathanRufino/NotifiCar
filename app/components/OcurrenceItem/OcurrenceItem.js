import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const OcurrenceOfTheDay = ({ ocurrence, image }) => (
    <View style={styles.container}>
        <View style={styles.photo}>
            <Image style={styles.photo} source={image} />
        </View>
        <View style={styles.itemView}>
            <Text style={styles.text}>
                { ocurrence.vehicle.toUpperCase() }
            </Text>
            <Text style={styles.text}>
                { ocurrence.ocurrence_type }
            </Text>
        </View>
        <View>
            <Text style={styles.textTime}>
                { ocurrence.time }
            </Text>
        </View>
    </View>
);

export default OcurrenceOfTheDay;
