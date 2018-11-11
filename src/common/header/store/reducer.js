import { fromJS } from 'immutable';
import { INPUT_FOCUS, INPUT_BLUR } from './actionTypes';

// 把defaultState变成immutable对象
const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if(action.type === INPUT_FOCUS) {
        // immutable对象的set方法会结合之前immutable对象的值
        // 和新设置的值，返回一个全新的对象
        return state.set('focused', true);
    }
    if(action.type === INPUT_BLUR) {
        return state.set('focused', false);
    }
    return state;
}