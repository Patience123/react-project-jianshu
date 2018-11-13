import { fromJS } from 'immutable';
import { GET_HOME_DATA, GET_HOME_LIST, CHANGE_BACK_TOP } from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    RecommendList: [],
    writerList: [],
    listPage: 1,
    showBackTop: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                RecommendList: fromJS(action.RecommendList),
                writerList: fromJS(action.writerList)
            });
        case GET_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.articleList)),
                listPage: fromJS(action.listPage)
            });
        case CHANGE_BACK_TOP:
            return state.set('showBackTop', action.toggle);
        default:
            return state;
    }
}