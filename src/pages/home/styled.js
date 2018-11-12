import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 30px;
`

export const HomeLeft = styled.article`
    float: left;
    width: 625px;
    margin-right: 15px;
    .banner-img {
        width: 100%;
        height: 270px;
        margin-bottom: 35px;
    }
`

export const HomeRight = styled.aside`
    float: right;
    width: 320px;
`

// Topic-style
export const TopicWrapper = styled.div`
    padding: 0 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    margin-left: 18px;
    margin-bottom: 18px;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-img {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`

export const MoreTopic = styled.div`
    float: left;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    font-size: 14px;
    color: #787878;
`

// article-list-style
export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    box-sizing: border-box;
    padding-right: 20px;
    margin-bottom: 8px;
    float: left;
    .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
        color: #333;
        margin-bottom: 4px;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
        word-wrap: break-word;
    }
`

export const ListMeta = styled.div`
    line-height: 20px;
    font-size: 12px;
    color: #999;
    span {
        margin-right: 10px;
    }
    .iconfont {
        font-size: 12px;
        margin-right: 2px;
    }
`