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
        backgroundColor: Colors.GRAY,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: '24rem'
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
});

export default styles;
