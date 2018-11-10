import styled from 'styled-components';
import LogoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    width: 100px;
    height: 56px;
    float: left;
    background: url(${LogoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 100px;
    box-sizing: border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
        .iconfont {
            font-size: 24px;
        }
    }
    &.active {
        color: #ea6f5a;
    }
    &.download {
        &:hover {
            background: #f5f5f5;
        }
    }
`
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        line-height: 30px;
        width: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .5s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .5s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin: 9px 20px 0 0;
    border: 1px solid #ec6149;
    padding: 0 20px;
    border-radius: 19px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
        &:hover {
            background: rgba(236,97,73,.05);
        }
    }
    &.writting {
        color: #fff;
        background: #ea6f5a;
        &:hover {
            background: #ec6149;
        }
        .iconfont {
            margin-right: 4px;
        }
    }
`