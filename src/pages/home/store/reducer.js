import { fromJS } from 'immutable';
import { GET_HOME_DATA, GET_HOME_LIST } from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    RecommendList: [],
    writerList: [],
    listPage: 1
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
        default:
            return state;
    }
}