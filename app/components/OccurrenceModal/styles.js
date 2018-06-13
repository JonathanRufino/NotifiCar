import { 
    Platform,
    PixelRatio,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

import { Colors, Values } from '../../commom';

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        padding: '16rem',
        borderRadius: '4rem',
    },
    inputField: {
        width: '80%',
        fontSize: 0.120 * Values.SCREEN_WIDTH,
        alignSelf: 'center',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
                borderBottomColor: Colors.BLACK,
            }
        })
    },
    title: {
        fontSize: '24rem',
        alignSelf: 'center',
        marginBottom: '16rem',
        fontWeight: 'bold',
    },
    type_occurrence: {
        fontSize: 0.04 * Values.SCREEN_WIDTH,
        alignSelf: 'center',
        color: Colors.BLACK,
    },
    error: {
        color: Colors.RED,
        alignSelf: 'flex-start',
    },
    photoContainer: {
        borderColor: Colors.GRAY,
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    photo: {
        borderRadius: 20,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    photoText: {
        color: Colors.BLACK,
        alignSelf: 'center',
    },
    photoCaseContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 37,
        height: 37,
        marginLeft: 10,
        backgroundColor: Colors.RED_LIGHT,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 20,
        height: 20
    },
    optional: {
        color: Colors.RED,
        alignSelf: 'center',
    },
    photoUploadContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectInput: {
        borderWidth: '1rem',
        borderColor: Colors.BLACK,
        overflow: 'hidden',
        marginVertical: '8rem',
        borderRadius: '4rem',
        ...Platform.select({
            ios: {
                height: '40rem',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
        })
    },
    loading: {
        height: 50,
    }
});

export default styles;
