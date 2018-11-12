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
    }],
    RecommendList: [{
        RecommendId: 1,
        RecommendImg: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    }, {
        RecommendId: 2,
        RecommendImg: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    }, {
        RecommendId: 3,
        RecommendImg: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    }, {
        RecommendId: 4,
        RecommendImg: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    }, {
        RecommendId: 5,
        RecommendImg: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }],
    writerList: [{
        writerId: 1,
        avatorImg: '//upload.jianshu.io/users/upload_avatars/2153206/4b7d9e0d-2e6b-4757-b5a9-a76737c5aeff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '狼医生',
        desc: '写了392.4k字 · 2k喜欢'
    }, {
        writerId: 2,
        avatorImg: '//upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '旸晓昆',
        desc: '写了112.6k字 · 326喜欢'
    }, {
        writerId: 3,
        avatorImg: '//upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '旸晓昆',
        desc: '写了112.6k字 · 326喜欢'
    }, {
        writerId: 4,
        avatorImg: '//upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '旸晓昆',
        desc: '写了112.6k字 · 326喜欢'
    }, {
        writerId: 5,
        avatorImg: '//upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '旸晓昆',
        desc: '写了112.6k字 · 326喜欢'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}