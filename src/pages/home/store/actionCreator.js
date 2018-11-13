import axios from 'axios';
import { GET_HOME_DATA } from './actionTypes';

const initialHomeData = (result) => ({
    type: GET_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    RecommendList: result.RecommendList,
    writerList: result.writerList
})

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