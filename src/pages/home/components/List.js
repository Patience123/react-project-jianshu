import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
    ListItem,
    ListInfo,
    ListMeta
} from '../styled';

class List extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.articleList.map((item) => (
                        <ListItem key={item.get('articleId')}>
                            <img 
                                className="list-pic" 
                                src={item.get('articleImg')} 
                                alt={item.get('articleId')}
                            />
                            <ListInfo>
                                <h3 className="title">{item.get('articleTitle')}</h3>
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
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
});

export default connect(mapStateToProps, null)(List);