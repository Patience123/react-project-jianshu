import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreator } from '../detail/store';
import {
    DetailWrapper,
    AdContainer,
    Note,
    Header,
    Content
} from './styled';

class Detail extends Component {
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

    render() {
        return (
            <DetailWrapper>
                <AdContainer>
                    <div className="download"></div>
                    <img src="https://oimagec1.ydstatic.com/image?id=2615826342504648643&product=adpublish&w=180&h=180&sc=0&rm=2&gsb=0&gsbd=60" alt=""/>
                </AdContainer>
                <Note>
                    <Header>{this.props.articleTitle}</Header>
                    <Content 
                        dangerouslySetInnerHTML={{__html: this.props.articleContent}}
                    />
                </Note>
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    articleTitle: state.getIn(['detail', 'articleTitle']),
    articleContent: state.getIn(['detail', 'articleContent'])
});

const mapDispatchToPrps = (dispatch) => ({
    getDetail(articleId) {
        dispatch(actionCreator.getDetailAction(articleId))
    }
})

export default connect(mapStateToProps, mapDispatchToPrps)(withRouter(Detail));