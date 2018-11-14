import axios from 'axios';
import { CHANGE_LOGIN, LOG_OUT } from './actionTypes';

const loginSuccess = (result) => ({
    type: CHANGE_LOGIN,
    loginState: result
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
            let result = res.data.data;
            if(result) {
                dispatch(loginSuccess(result));
            } else {
                alert('登录失败');
            }
        }).catch(err => {
            console(err);
        })
    }
}

export const logout = () => ({
    type: LOG_OUT
})