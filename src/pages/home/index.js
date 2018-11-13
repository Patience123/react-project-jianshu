import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './styled';

class Home extends PureComponent {
    componentDidMount() {
        this.props.gethomeData();
        this.bindEvent();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeShowBackTop);
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeShowBackTop);
    }

    handleBackTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4574/d5c5ea3e984c8c08071b467c2dfe5bd2d0acf7b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner-img" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showBackTop ? <BackTop onClick={this.handleBackTop}>回到顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    gethomeData() {
        dispatch(actionCreator.getHomeDataAction());
    },
    changeShowBackTop(e) {
        if(document.documentElement.scrollTop > 200) {
            dispatch(actionCreator.changeShowBackTop(true));
        } else {
            dispatch(actionCreator.changeShowBackTop(false));
        }
    }
});

const mapStateToProps = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);