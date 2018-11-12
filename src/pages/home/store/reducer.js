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
    }],
    articleList: [{
        articleId: 1,
        articleImg: '//upload-images.jianshu.io/upload_images/2100084-5f40979f3c9e6b44?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        articleTitle: '总是对你说这六句话的男人，他根本就不爱你',
        articleDesc: '爱是这个世界上最神圣的东西，也是最藏不住的东西。 当一个男人爱你的时候，他的眼神，他的行为，他的语言，处处都在诉说着他对你的爱，而当他不爱你的时...',
        nickName: '南方姑娘谭檬',
        commentNum: 7,
        likeNum: 26
    }, {
        articleId: 2,
        articleImg: '//upload-images.jianshu.io/upload_images/2100084-5f40979f3c9e6b44?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        articleTitle: '总是对你说这六句话的男人，他根本就不爱你',
        articleDesc: '爱是这个世界上最神圣的东西，也是最藏不住的东西。 当一个男人爱你的时候，他的眼神，他的行为，他的语言，处处都在诉说着他对你的爱，而当他不爱你的时...',
        nickName: '南方姑娘谭檬',
        commentNum: 7,
        likeNum: 26
    }, {
        articleId: 3,
        articleImg: '//upload-images.jianshu.io/upload_images/2100084-5f40979f3c9e6b44?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        articleTitle: '总是对你说这六句话的男人，他根本就不爱你',
        articleDesc: '爱是这个世界上最神圣的东西，也是最藏不住的东西。 当一个男人爱你的时候，他的眼神，他的行为，他的语言，处处都在诉说着他对你的爱，而当他不爱你的时...',
        nickName: '南方姑娘谭檬',
        commentNum: 7,
        likeNum: 26
    }, {
        articleId: 4,
        articleImg: '//upload-images.jianshu.io/upload_images/2100084-5f40979f3c9e6b44?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        articleTitle: '总是对你说这六句话的男人，他根本就不爱你',
        articleDesc: '爱是这个世界上最神圣的东西，也是最藏不住的东西。 当一个男人爱你的时候，他的眼神，他的行为，他的语言，处处都在诉说着他对你的爱，而当他不爱你的时...',
        nickName: '南方姑娘谭檬',
        commentNum: 7,
        likeNum: 26
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}