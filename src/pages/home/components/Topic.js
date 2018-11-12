import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    TopicWrapper,
    TopicItem,
    MoreTopic
} from '../styled';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img
                                    className="topic-img"
                                    src={item.get('imgUrl')} 
                                    alt={item.get('id')} 
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <MoreTopic>更多热门专题&nbsp;></MoreTopic>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);