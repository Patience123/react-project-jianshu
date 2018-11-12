import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper } from '../styled';

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.RecommendList.map((item) => (
                        <img
                            key={item.get('RecommendId')}
                            src={item.get('RecommendImg')}
                            alt={item.get('RecommendId')}
                        />
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    RecommendList: state.getIn(['home', 'RecommendList'])
})

export default connect(mapStateToProps, null)(Recommend);