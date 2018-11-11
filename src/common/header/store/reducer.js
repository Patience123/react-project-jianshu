import { INPUT_FOCUS, INPUT_BLUR } from './actionTypes';

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if(action.type === INPUT_FOCUS) {
        return {
            focused: true
        }
    }
    if(action.type === INPUT_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}