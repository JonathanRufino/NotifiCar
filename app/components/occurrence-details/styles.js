import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors } from '../../commom';

const styles = EStyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center'
    },
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        marginHorizontal: '10rem',
        paddingTop: '10rem',
        borderRadius: 5,
    },
    userContainer: {
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '10rem',
    },
    profile: {
        width: '50rem',
        height: '50rem',
        borderRadius: '50rem',
        borderWidth: '2rem',
        borderColor: Colors.RED_DARK,
    },
    userName: {
        color: Colors.WHITE,
        fontSize: '15rem',
    },
    reputation: {
        fontSize: '10rem',
        color: Colors.WHITE,
    }
});

export default styles;
