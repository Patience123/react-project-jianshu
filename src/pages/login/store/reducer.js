import { fromJS } from 'immutable';
import { CHANGE_LOGIN, LOG_OUT } from './actionTypes';

const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_LOGIN:
            return state.set('login', action.loginState);
        case LOG_OUT:
            return state.set('login', false);
        default:
            return state;
    }
} 