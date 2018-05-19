import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Values = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    EMPTY: 0,
    LICENSE_PLATE_MAX_LENGTH: 8,
    MAX_OCCURRENCE_ON_LIST_OF_OCCURRENCES: 10,
    FIRST: 0,
    SECOND: 1,
    THIRD: 2,
};

export { Values };
