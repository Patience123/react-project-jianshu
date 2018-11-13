import { fromJS } from 'immutable';
import { GET_HOME_DATA } from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    RecommendList: [],
    writerList: []
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
        default:
            return state;
    }
}