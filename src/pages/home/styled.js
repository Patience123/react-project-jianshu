import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 86px;
    box-sizing: border-box;
`

export const HomeLeft = styled.article`
    float: left;
    width: 640px;
    box-sizing: border-box;
    padding-left: 15px;
    .banner-img {
        width: 100%;
        height: 270px;
        margin-bottom: 35px;
    }
`

export const HomeRight = styled.aside`
    float: right;
    width: 280px;
    margin-left: 40px;
`

export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1000;
    background: #fff;
    border: 1px solid #dcdcdc;
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: #666;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
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
        margin-left: 20px;
    }
`
export const ListInfo = styled.div`
    box-sizing: border-box;
    padding-right: 20px;
    margin-bottom: 8px;
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
    a {
        text-decoration: none;
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

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    line-height: 20px;
    padding: 10px 15px;
    margin: 30px 0 60px 0;
    border-radius: 20px;
    background: #a5a5a5;
    text-align: center;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
`

// Recommend-style
export const RecommendWrapper = styled.div`
    padding-bottom: 4px;
    margin-top: -4px;
    img {
        width: 100%;
        display: block;
        height: 50px;
        margin-bottom: 6px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

// Writer-style
export const WriterWrapper = styled.div`
    margin-top: 30px;
    position: relative;
`

export const WriterHeader = styled.div`
    width: 100%;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    div {
        float: right;
        cursor: pointer;
    }
`

export const WriterItem = styled.div`
    margin-top: 20px;
    overflow: hidden;
    img {
        float: left;
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        margin-right: 10px;
        border-radius: 50%;
    }
    div {
        float: left;
        box-sizing: border-box;
        padding-top: 5px;
        line-height: 20px;
        margin-right: 50px;
        .name {
            font-size: 14px;
            color: #333;
        }
        .desc {
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
    .add {
        float: right;
        margin-top: 5px;
        font-size: 13px;
        color: #42c02e;
        display: block;
    }
`

export const LookAll = styled.div`
    margin-top: 20px;
    box-sizing: border-box;
    margin-left: 5px;
    padding: 7px;
    width: 275px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
`