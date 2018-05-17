import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors } from '../../commom';

const styles = EStyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        width: '80%',
    },
    userContainer: {
        paddingVertical: '24rem',
        alignItems: 'center',
    },
    photo: {
        height: '64rem',
        width: '64rem',
        borderRadius: 100,
    },
    name: {
        fontSize: '18rem',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    positiveButton: {
        flex: 1,
        backgroundColor: Colors.SILVER_TREE,
        height: 40,
        justifyContent: 'center',
        alignItems:
        'center',
    },
    negativeButton: {
        flex: 1,
        backgroundColor: Colors.BITTER_SWEET,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
    loading: {
        margin: 4,
    },
});

export default styles;
