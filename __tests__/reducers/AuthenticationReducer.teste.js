import AuthenticationReducer from '../../app/redux/reducers/AuthenticationReducer';
import * as Types from '../../app/redux/actions/types';

describe('Authentication Reducer', () => {
    it('has a default state', () => {
        expect(AuthenticationReducer(undefined, { type: 'unexpected' })).toEqual({
            accessToken: '',
            userID: '',
            isLoading: false,
        });
    });

    it('can handle CHECKING_USER_IS_LOGGED', () => {
        const action = {
            type: Types.CHECKING_USER_IS_LOGGED,
            payload: true,
        };
      
        expect(AuthenticationReducer(undefined, action)).toEqual({
            accessToken: '',
            userID: '',
            isLoading: true,
        });
    });

    it('can handle USER_LOGIN_SUCCESS', () => {
        const action = {
            type: Types.USER_LOGIN_SUCCESS,
            payload: {
                accessToken: 'LSup9T0qc1Rl3H',
                userID: '1146399017078182'
            },
        };
      
        expect(AuthenticationReducer(undefined, action)).toEqual({
            accessToken: 'LSup9T0qc1Rl3H',
            userID: '1146399017078182',
            isLoading: false
        });
    });

    it('can handle USER_IS_LOGGED', () => {
        const action = {
            type: Types.USER_IS_LOGGED,
            payload: {
                accessToken: 'LSup9T0qc1Rl3H',
                userID: '1146399017078182'
            },
        };
      
        expect(AuthenticationReducer(undefined, action)).toEqual({
            accessToken: 'LSup9T0qc1Rl3H',
            userID: '1146399017078182',
            isLoading: false,
        });
    });

    it('can handle USER_IS_NOT_LOGGED', () => {
        const action = {
            type: Types.USER_IS_NOT_LOGGED,
        };
      
        expect(AuthenticationReducer(undefined, action)).toEqual({
            accessToken: '',
            userID: '',
            isLoading: false,
        });
    });
});
