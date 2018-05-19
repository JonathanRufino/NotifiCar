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
        borderRadius: 10,
        width: '80%',
    },
    userContainer: {
        paddingVertical: '24rem',
        alignItems: 'center',
    },
    photo: {
        height: '80rem',
        width: '80rem',
        borderRadius: 100,
        marginBottom: '8rem',
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
        borderBottomLeftRadius: 10,
    },
    negativeButton: {
        flex: 1,
        backgroundColor: Colors.BITTER_SWEET,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
    },
    buttonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
    loading: {
        margin: 4,
    },
    detailsButton: {
        backgroundColor: Colors.RED_LIGHT,
        paddingHorizontal: '32rem',
        paddingVertical: '8rem',
        borderRadius: 30
    },
    counter: {
        fontSize: '18rem',
        fontWeight: 'bold',
    },
    label: {
        textAlign: 'center',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        marginTop: '24rem',
    },
    feedbackTitle: {
        alignSelf: 'center',
        fontSize: '14rem',
        marginBottom: '8rem',
    },
});

export default styles;
