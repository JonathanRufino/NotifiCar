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
        borderRadius: '4rem',
        width: '80%',
    },
    userContainer: {
        paddingVertical: '24rem',
        alignItems: 'center',
    },
    photo: {
        height: '80rem',
        width: '80rem',
        borderRadius: '40rem',
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
        borderBottomLeftRadius: '4rem',
    },
    negativeButton: {
        flex: 1,
        backgroundColor: Colors.BITTER_SWEET,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: '4rem',
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
    occurrencePhoto: {
        borderRadius: 20,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    photoOccurrenceContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
