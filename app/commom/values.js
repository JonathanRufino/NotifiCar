import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Values = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    EMPTY: 0,
    LICENSE_PLATE_MAX_LENGTH: 7,
};

export { Values };
