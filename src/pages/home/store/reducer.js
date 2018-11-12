import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        title: '@IT·互联网'
    }, {
        id: 2,
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        title: '简书电影'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}