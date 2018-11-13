import axios from 'axios';
import { GET_DETAIL_DATA } from './actionTypes';

const initialDetail = (result) => ({
    type: GET_DETAIL_DATA,
    articleTitle: result.articleTitle,
    articleContent: result.articleContent
})

export const getDetailAction = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then(res => {
            let result = res.data.detailData;
            if(res.data.success && result) {
                dispatch(initialDetail(result));
            }
        }).catch(err => {
            console.log(err);
        })
    }
} 