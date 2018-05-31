import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Images, Texts } from '../commom';

/**
 * Show a generic dialog to handle errors
 * @param {uri} image 
 * @param {string} title 
 * @param {string} message 
 * @param {callback} onPress 
 */
export const showDialog = ({ image, title, message, onPress }) => {
    Actions.push('dialog', {
        image: image || Images.ERROR,
        title: title || Texts.OOPS,
        message: message || Texts.Errors.GENERIC_ERROR,
        onPress: () => { onPress ? onPress() : Actions.pop() }
    });
};

/**
 * Parse a int number to String with two digits
 * @param {int} number 
 */
export const parseNumberToTwoDigits = (number) => {
    if (number < 10) {
        number = `0${number}`;
    }

    return number;
};

/**
 * GUID is an acronym for 'Globally Unique Identifier'. 
 * It is a 128-bit integer number used to identify resources.
 * This method generate GUID.
 */

export const guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

/**
 * @description Function to display generic alerts without actions
 * @param {string} title 
 * @param {string} message 
 */
export const showSuccessMessage = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            { text: Texts.Buttons.OK }
        ]
    );
};
