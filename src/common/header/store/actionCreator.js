import { INPUT_FOCUS, INPUT_BLUR, GET_SEARCH_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_LIST } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const getSearchList = (data) => ({
    type: GET_SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const inputFocus = () => ({
    type: INPUT_FOCUS
});

export const inputBlur = () => ({
    type: INPUT_BLUR
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            let data = res.data;
            if(data.success) {
                dispatch(getSearchList(data.data));
            }
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const mouseEnter = () => ({
    type: MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: MOUSE_LEAVE
});

export const changeList = (newPage) => ({
    type: CHANGE_LIST,
    newPage
});
