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
