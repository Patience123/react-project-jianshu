import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterHeader, WriterItem, LookAll } from '../styled';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterHeader>
                    <span>推荐作者</span>
                    <div>
                        <i className="iconfont">&#xe851;</i>
                        <span>换一批</span>
                    </div>
                </WriterHeader>
                {
                    this.props.writerList.map((item) => (
                        <WriterItem key={item.get('writerId')}>
                            <img
                                src={item.get('avatorImg')}
                                alt={item.get('writerId')}
                            />
                            <div>
                                <p className="name">{item.get('name')}</p>
                                <p className="desc">{item.get('desc')}</p>
                            </div>
                            <span className="add">+关注</span>
                        </WriterItem>
                    ))
                }
                <LookAll>查看全部></LookAll>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer);