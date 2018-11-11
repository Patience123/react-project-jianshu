import { fromJS } from 'immutable';
import { INPUT_FOCUS, INPUT_BLUR, GET_SEARCH_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_LIST } from './actionTypes';

// 把defaultState变成immutable对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    searchList: [],
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case INPUT_FOCUS:
            // immutable对象的set方法会结合之前immutable对象的值
            // 和新设置的值，返回一个全新的对象
            return state.set('focused', true);
        case INPUT_BLUR:
            return state.set('focused', false);
        case GET_SEARCH_LIST:
            return state.merge({
                searchList: action.data,
                totalPage: action.totalPage
            });  // 等同：state.set('searchList', action.data).set('totalPage', action.totalPage);
        case MOUSE_ENTER:
            return state.set('mouseIn', true);
        case MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case CHANGE_LIST:
            return state.set('page', action.newPage);
        default:
            return state;
    }
}