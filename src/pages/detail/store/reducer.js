import { fromJS } from 'immutable';
import { GET_DETAIL_DATA } from './actionTypes';

const defaultState = fromJS({
    articleTitle: '',
    articleContent: ''
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_DETAIL_DATA:
            return state.merge({
                articleTitle: fromJS(action.articleTitle),
                articleContent: fromJS(action.articleContent)
            });
        default:
            return state;
    }
} 