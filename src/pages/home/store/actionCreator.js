import axios from 'axios';
import { GET_HOME_DATA, GET_HOME_LIST, CHANGE_BACK_TOP } from './actionTypes';

const initialHomeData = (result) => ({
    type: GET_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    RecommendList: result.RecommendList,
    writerList: result.writerList
});

const getHomeList = (result, page) => ({
    type: GET_HOME_LIST,
    articleList: result.articleList,
    listPage: page
});

export const getHomeDataAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            let result = res.data.homeData;
            if(res.data.success && result) {
                dispatch(initialHomeData(result));
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?listPage=' + page).then((res) => {
            let result = res.data.homeListData;
            if(res.data.success && result) {
                dispatch(getHomeList(result, page + 1));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export const changeShowBackTop = (toggle) => ({
    type: CHANGE_BACK_TOP,
    toggle: toggle
});