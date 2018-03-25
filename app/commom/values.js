import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Values = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
};

export { Values };
