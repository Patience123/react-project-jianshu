import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    ListMeta,
    LoadMore
} from '../styled';

class List extends PureComponent {
    render() {
        const { articleList, getMoreList, page } = this.props;
        return (
            <Fragment>
                {
                    articleList.map((item, index) => (
                        <ListItem key={index}>
                            <img 
                                className="list-pic" 
                                src={item.get('articleImg')} 
                                alt={item.get('articleId')}
                            />
                            <ListInfo>
                                <Link to='/detail'>
                                    <h3 className="title">{item.get('articleTitle')}</h3>
                                </Link>
                                <p className="desc">
                                    {item.get('articleDesc')}
                                </p>
                            </ListInfo>
                            <ListMeta>
                                <span>{item.get('nickName')}</span>
                                <span>
                                    <i className="iconfont">&#xe603;</i>
                                    {item.get('commentNum')}
                                </span>
                                <span className="like">
                                    <i className="iconfont">&#xe635;</i>
                                    {item.get('likeNum')}
                                </span>
                            </ListMeta>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={() => {getMoreList(page)}}>阅读更多</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'listPage'])
});

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);