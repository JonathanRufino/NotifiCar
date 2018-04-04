import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const LicensePlate = ({ licensePlate }) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            { licensePlate.toUpperCase() }
        </Text>
    </View>
);

export default LicensePlate;
